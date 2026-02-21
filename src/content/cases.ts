export interface Case {
  title: string;
  period: string;
  role: string;
  description: string;
  techs: string[];
}

export const cases: Case[] = [
  {
    title: "管理画面フロントエンド刷新",
    period: "2023.10 – 2024.09",
    role: "フロントエンド設計・実装",
    description:
      "Rails の ERB で構築された管理画面を React + TypeScript へ段階的に移行。共通コンポーネントの設計と画面単位の移行計画を策定し、運用を止めずにリプレイスを推進。",
    techs: ["React", "TypeScript", "Ruby on Rails", "CSS Modules"],
  },
  {
    title: "UI コンポーネント共通化",
    period: "2023.04 – 2023.09",
    role: "設計・実装",
    description:
      "画面ごとに重複していた UI パーツを整理し、再利用可能なコンポーネントとして切り出し。JSX の肥大化を解消し、変更時の影響範囲を大幅に縮小。",
    techs: ["React", "TypeScript", "Storybook"],
  },
  {
    title: "レガシー画面の段階的リファクタリング",
    period: "2022.06 – 2023.03",
    role: "バックエンド・フロントエンド",
    description:
      "長期運用された Rails アプリの複雑化した画面ロジックを整理。Fat Controller の解消やビューの責務分離を行い、保守性とテスタビリティを向上。",
    techs: ["Ruby on Rails", "Ruby", "RSpec", "Slim"],
  },
];
