import { useState, useRef, useCallback } from "react";
import type { KeyboardEvent, ChangeEvent } from "react";
import type { Chat, Message, InsightCard } from "../data/chatScreen";
import {
  dummyChats,
  dummyMessages,
  dummyInsights,
} from "../data/chatScreen";
import styles from "./ChatScreen.module.css";

/* ── Sidebar ── */

interface SidebarProps {
  chats: Chat[];
  activeChatId: string;
  onSelect: (id: string) => void;
  onNewChat: () => void;
  onRename: (id: string) => void;
  onDelete: (id: string) => void;
}

function Sidebar({
  chats,
  activeChatId,
  onSelect,
  onNewChat,
  onRename,
  onDelete,
}: SidebarProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id: string) => {
    setOpenMenuId(null);
    setDeleteTargetId(id);
  };

  const confirmDelete = () => {
    if (deleteTargetId) {
      onDelete(deleteTargetId);
      setDeleteTargetId(null);
    }
  };

  return (
    <aside className={styles.sidebar}>
      <button className={styles.newChatBtn} onClick={onNewChat}>
        + New Chat
      </button>

      <div className={styles.chatList}>
        {chats.map((chat) => (
          <div key={chat.id}>
            <div
              className={
                chat.id === activeChatId
                  ? styles.chatItemActive
                  : styles.chatItem
              }
              onClick={() => onSelect(chat.id)}
            >
              <span className={styles.chatItemTitle}>{chat.title}</span>
              <button
                className={styles.menuBtn}
                data-open={openMenuId === chat.id}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu(chat.id);
                }}
              >
                ...
              </button>

              {openMenuId === chat.id && (
                <div className={styles.dropdown}>
                  <button
                    className={styles.dropdownItem}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuId(null);
                      onRename(chat.id);
                    }}
                  >
                    Rename
                  </button>
                  <button
                    className={styles.dropdownDanger}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(chat.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>

            {deleteTargetId === chat.id && (
              <div className={styles.deleteConfirm}>
                <span className={styles.deleteConfirmText}>
                  このチャットを削除しますか？
                </span>
                <div className={styles.deleteConfirmActions}>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setDeleteTargetId(null)}
                  >
                    Cancel
                  </button>
                  <button
                    className={styles.confirmDeleteBtn}
                    onClick={confirmDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

/* ── Message list ── */

interface MessageListProps {
  messages: Message[];
}

function MessageList({ messages }: MessageListProps) {
  return (
    <div className={styles.messages}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={
            msg.role === "user"
              ? styles.messageUser
              : styles.messageAssistant
          }
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}

/* ── Chat input ── */

interface ChatInputProps {
  onSend: (text: string) => void;
}

function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    adjustHeight();
  };

  const send = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
    requestAnimationFrame(() => adjustHeight());
  }, [value, onSend]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className={styles.inputArea}>
      <div className={styles.inputWrapper}>
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          rows={1}
          placeholder="メッセージを入力..."
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className={styles.sendBtn}
          disabled={!value.trim()}
          onClick={send}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
}

/* ── Insight panel ── */

interface InsightPanelProps {
  insights: InsightCard[];
}

const categoryLabels: Record<InsightCard["category"], string> = {
  keyPoints: "Key Points",
  problems: "Problems",
  nextActions: "Next Actions",
};

const categoryOrder: InsightCard["category"][] = [
  "keyPoints",
  "problems",
  "nextActions",
];

function InsightPanel({ insights }: InsightPanelProps) {
  return (
    <div className={styles.insightPanel}>
      {categoryOrder.map((cat) => {
        const items = insights.filter((i) => i.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} className={styles.insightGroup}>
            <span className={styles.insightLabel}>{categoryLabels[cat]}</span>
            {items.map((item) => (
              <div key={item.id} className={styles.insightCard}>
                {item.text}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

/* ── ChatScreen (exported) ── */

export function ChatScreen() {
  const [chats, setChats] = useState<Chat[]>(dummyChats);
  const [activeChatId, setActiveChatId] = useState(dummyChats[0].id);
  const [messages, setMessages] = useState<Message[]>(dummyMessages);

  const activeChat = chats.find((c) => c.id === activeChatId);

  const handleNewChat = () => {
    const id = crypto.randomUUID();
    const newChat: Chat = {
      id,
      title: "New Chat",
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(id);
    setMessages([]);
  };

  const handleRename = (id: string) => {
    const newTitle = window.prompt("新しいタイトル");
    if (newTitle) {
      setChats((prev) =>
        prev.map((c) => (c.id === id ? { ...c, title: newTitle } : c)),
      );
    }
  };

  const handleDelete = (id: string) => {
    setChats((prev) => prev.filter((c) => c.id !== id));
    if (activeChatId === id) {
      const remaining = chats.filter((c) => c.id !== id);
      if (remaining.length > 0) {
        setActiveChatId(remaining[0].id);
      }
    }
  };

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);
  };

  return (
    <div className={styles.root}>
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelect={setActiveChatId}
        onNewChat={handleNewChat}
        onRename={handleRename}
        onDelete={handleDelete}
      />

      <main className={styles.main}>
        <div className={styles.chatHeader}>
          {activeChat?.title ?? "Chat"}
        </div>
        <MessageList messages={messages} />
        <ChatInput onSend={handleSend} />
      </main>

      <InsightPanel insights={dummyInsights} />
    </div>
  );
}
