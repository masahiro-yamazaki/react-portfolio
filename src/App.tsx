import { useState, type FormEvent } from "react";
import "./App.css";

// --- 型定義 ---
interface WebhookPayload {
  text: string;
  categoryHint: string;
}

interface WebhookSuccessResponse {
  ok: true;
  title?: string;
  notionPageUrl?: string;
  nextActions?: string[];
}

interface WebhookErrorResponse {
  ok: false;
  error: string;
}

type WebhookResponse = WebhookSuccessResponse | WebhookErrorResponse;

// --- カテゴリ ---
const CATEGORIES = ["React", "TypeScript", "n8n", "Notion API", "その他"] as const;

export default function App() {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [logText, setLogText] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<WebhookResponse | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setResult(null);
    setSending(true);

    const payload: WebhookPayload = {
      text: logText,
      categoryHint: category,
    };

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: WebhookResponse = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ ok: false, error: String(err) });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container">
      <h1>Learning Log</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Webhook URL
          <input
            type="url"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="https://your-n8n.app/webhook/xxx"
            required
          />
        </label>

        <label>
          カテゴリ
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>

        <label>
          学習ログ
          <textarea
            value={logText}
            onChange={(e) => setLogText(e.target.value)}
            rows={6}
            placeholder="今日学んだことを書く..."
            required
          />
        </label>

        <button type="submit" disabled={sending}>
          {sending ? "送信中..." : "送信"}
        </button>
      </form>

      {result && (
        <div className={`result ${result.ok ? "success" : "error"}`}>
          {result.ok ? (
            <>
              {result.title && <h2>{result.title}</h2>}
              {result.notionPageUrl && (
                <p>
                  <a href={result.notionPageUrl} target="_blank" rel="noreferrer">
                    Notion で開く
                  </a>
                </p>
              )}
              {result.nextActions && result.nextActions.length > 0 && (
                <>
                  <h3>Next Actions</h3>
                  <ul>
                    {result.nextActions.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </>
              )}
              {!result.title && !result.notionPageUrl && !result.nextActions?.length && (
                <p>送信成功</p>
              )}
            </>
          ) : (
            <p>{result.error}</p>
          )}
        </div>
      )}
    </div>
  );
}
