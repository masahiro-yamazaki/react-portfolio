export interface Case {
  title: string;
  period: string;
  role: string;
  description: string;
  techs: string[];
}

export const cases: Case[] = [
  {
    title: "EC サイト リニューアル",
    period: "2024.04 – 2024.12",
    role: "フロントエンドリード",
    description:
      "レガシーな jQuery ベースの EC サイトを React + TypeScript でフルリプレイス。Core Web Vitals を大幅に改善。",
    techs: ["React", "TypeScript", "Next.js", "CSS Modules"],
  },
  {
    title: "社内管理ダッシュボード",
    period: "2023.06 – 2024.03",
    role: "フロントエンド開発",
    description:
      "複雑なデータ可視化を含む管理画面を設計・実装。リアルタイムデータ更新とフィルタリング機能を実現。",
    techs: ["React", "TypeScript", "Recharts", "React Query"],
  },
  {
    title: "モバイルアプリ向け WebView",
    period: "2023.01 – 2023.05",
    role: "フロントエンド開発",
    description:
      "ネイティブアプリ内 WebView で動作する SPA を開発。ブリッジ通信の設計とパフォーマンス最適化を担当。",
    techs: ["React", "TypeScript", "Vite", "Bridge API"],
  },
];
