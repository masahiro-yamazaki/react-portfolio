export interface Project {
  id: string;
  title: string;
  industry: string;
  scale: string;
  role: string;
  period: string;
  summary: string;
  tasks: string[];
  techs: string[];
}

/** 案件データ（3案件） — 差し替え前提のダミーデータ */
export const projects: Project[] = [
  {
    id: "project1",
    title: "管理画面フロントエンド刷新",
    industry: "SaaS（在庫管理）",
    scale: "チーム 5名",
    role: "フロントエンド設計・実装",
    period: "2023.10 – 2024.09（12ヶ月）",
    summary:
      "Rails ERB で構築された管理画面を React + TypeScript へ段階的に移行。運用を止めずにリプレイスを推進。",
    tasks: [
      "共通コンポーネントの設計・実装（Table, Form, Modal 等）",
      "画面単位の移行計画策定と段階的リプレイス",
      "既存APIとの結合・状態管理の設計",
      "コードレビュー体制の構築",
    ],
    techs: ["React", "TypeScript", "Ruby on Rails", "CSS Modules"],
  },
  {
    id: "project2",
    title: "共通コンポーネント基盤整備",
    industry: "EC（顧客管理）",
    scale: "チーム 4名",
    role: "設計・実装リード",
    period: "2023.04 – 2023.09（6ヶ月）",
    summary:
      "画面ごとに重複していたUIパーツを整理し、再利用可能なコンポーネントライブラリとして整備。",
    tasks: [
      "UIパーツの棚卸しと共通化方針の策定",
      "再利用可能なコンポーネントの設計・実装",
      "Storybookによるカタログ整備",
      "JSX肥大化の解消・リファクタリング",
    ],
    techs: ["React", "TypeScript", "Storybook", "CSS Modules"],
  },
  {
    id: "project3",
    title: "レガシー画面リファクタリング",
    industry: "予約管理サービス",
    scale: "チーム 3名",
    role: "バックエンド・フロントエンド",
    period: "2022.06 – 2023.03（10ヶ月）",
    summary:
      "長期運用されたRailsアプリの複雑化した画面ロジックを段階的に整理。保守性とテスタビリティを向上。",
    tasks: [
      "Fat Controllerの解消・責務分離",
      "ビューロジックの整理とPartial分割",
      "テストカバレッジの改善（RSpec）",
      "パフォーマンスボトルネックの特定と改善",
    ],
    techs: ["Ruby on Rails", "Ruby", "RSpec", "Slim", "PostgreSQL"],
  },
];
