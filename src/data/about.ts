/** About バリアント型 */
export type AboutVariant = "aboutA" | "aboutB" | "aboutC";

/** 自己紹介文の候補（6+パターン） */
export const aboutTexts = [
  {
    id: "polite",
    label: "丁寧",
    text: "Ruby on Rails を軸に 12 年の Web 開発経験があります。直近では React / TypeScript を用いたフロントエンド開発に注力しており、可読性・保守性・変更コストを常に意識した設計を心がけています。",
  },
  {
    id: "casual",
    label: "カジュアル",
    text: "Webエンジニア歴12年。Railsでずっとやってきて、ここ数年はReact/TSメインです。読みやすくて壊れにくいコードが好きです。",
  },
  {
    id: "formal",
    label: "硬め",
    text: "Webアプリケーション開発に12年間従事。Ruby on Railsによるバックエンド開発を経て、現在はReact / TypeScriptによるフロントエンド設計・実装を主務としております。",
  },
  {
    id: "strength",
    label: "強み訴求",
    text: "12年のWeb開発経験の中で、特にコンポーネント設計と段階的リファクタリングを強みとしてきました。既存コードベースの改善と、長期運用を見据えた設計判断を得意としています。",
  },
  {
    id: "story",
    label: "ストーリー",
    text: "Railsエンジニアとしてキャリアをスタートし、フロントエンドの面白さに目覚めてReactに転向。「作って終わり」ではなく「育てていく」開発スタイルを大切にしています。",
  },
  {
    id: "minimal",
    label: "ミニマル",
    text: "React / TypeScript のフロントエンドエンジニアです。設計と保守性を重視し、読みやすいコードを書きます。",
  },
] as const;

/** aboutA / aboutB で使うチップ（最大8個） */
export const aboutChips = [
  "React",
  "TypeScript",
  "Ruby on Rails",
  "コンポーネント設計",
  "CSS Modules",
  "リファクタリング",
  "UI改善",
  "コードレビュー",
];

/** aboutB 左カラム用 */
export const aboutProfile = {
  experience: "12年",
  focus: "フロントエンド設計・実装",
  background: "Ruby on Rails → React / TypeScript",
};

/** aboutB 右カラム用 */
export const aboutValues = [
  "可読性を最優先にしたコード設計",
  "変更コストを抑える構造づくり",
  "チーム全体のコード品質向上",
];

/** aboutC 箇条書き（最大4点） */
export const aboutBullets = [
  { title: "経験", text: "Web開発 12年（Rails → React / TypeScript）" },
  { title: "得意", text: "コンポーネント設計・段階的リファクタリング" },
  { title: "重視", text: "可読性・保守性・変更コストの最適化" },
  { title: "姿勢", text: "一人称で設計〜実装〜レビューまで完結" },
];
