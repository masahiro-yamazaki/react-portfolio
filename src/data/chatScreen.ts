/* ── チャット一覧 ── */
export interface Chat {
  id: string;
  title: string;
  updatedAt: string;
}

export const dummyChats: Chat[] = [
  { id: "1", title: "プロジェクトの方向性について", updatedAt: "2026-03-06" },
  { id: "2", title: "リファクタリング戦略", updatedAt: "2026-03-05" },
  { id: "3", title: "API設計レビュー", updatedAt: "2026-03-04" },
  { id: "4", title: "パフォーマンス改善案", updatedAt: "2026-03-03" },
];

/* ── メッセージ ── */
export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export const dummyMessages: Message[] = [
  {
    id: "m1",
    role: "user",
    content:
      "今のプロジェクトの課題を整理したい。特にフロントエンドのアーキテクチャについて考えを聞かせてほしい。",
  },
  {
    id: "m2",
    role: "assistant",
    content:
      "いくつかの観点から整理しますね。\n\n1. **状態管理** — 現在はローカルステートが散在しており、データフローが追いにくくなっています。Context API またはグローバルストアの導入を検討しましょう。\n\n2. **コンポーネント設計** — 一部のコンポーネントが肥大化しています。責務を分離し、Presentational / Container パターンを適用すると保守性が上がります。\n\n3. **型安全性** — API レスポンスの型が any になっている箇所があります。Zod などでランタイムバリデーションを入れるのが有効です。",
  },
  {
    id: "m3",
    role: "user",
    content: "状態管理についてもう少し詳しく。Redux と Zustand ならどちらがいい？",
  },
  {
    id: "m4",
    role: "assistant",
    content:
      "プロジェクトの規模と要件を考えると **Zustand** が適していると思います。\n\n- ボイラープレートが少なく、学習コストが低い\n- TypeScript との親和性が高い\n- ミドルウェアで永続化やデバッグも対応可能\n\nRedux は大規模チームや複雑な非同期フローが必要な場合に強みがありますが、現時点ではオーバースペックになる可能性があります。",
  },
];

/* ── インサイト ── */
export interface InsightCard {
  id: string;
  category: "keyPoints" | "problems" | "nextActions";
  text: string;
}

export const dummyInsights: InsightCard[] = [
  { id: "i1", category: "keyPoints", text: "状態管理の一元化が最優先課題" },
  { id: "i2", category: "keyPoints", text: "Zustand がプロジェクト規模に適合" },
  { id: "i3", category: "problems", text: "ローカルステートが散在しデータフローが不透明" },
  { id: "i4", category: "problems", text: "API レスポンスに any 型が残存" },
  { id: "i5", category: "nextActions", text: "Zustand の PoC を小さいスコープで実施" },
  { id: "i6", category: "nextActions", text: "API 型定義を Zod スキーマで整備" },
  { id: "i7", category: "nextActions", text: "肥大化コンポーネントの責務分離リストを作成" },
];
