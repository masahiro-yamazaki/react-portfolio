export interface Strength {
  title: string;
  description: string;
  kind: "tech" | "mind";
}

export const profile = {
  name: "Masahiro Yamazaki",
  title: "Web Engineer",
  subtitle: "Ruby on Rails / React",
  tagline:
    "Web エンジニア歴 12年。「作る」より「改善し続ける」を大切にしています。",
  keywords: ["Rails", "React", "設計改善"] as const,
  about:
    "Ruby on Rails を軸に 10 年以上の Web 開発経験があり、直近では React / TypeScript を用いたフロントエンド開発に取り組んでいます。可読性・保守性・変更コストを常に意識し、長く運用できるコードを書くことを大切にしています。",
  strengths: [
    {
      title: "コンポーネント設計",
      description:
        "共通化・責務分離・再利用性を意識した設計",
      kind: "tech",
    },
    {
      title: "可読性と保守性",
      description:
        "JSX 肥大化の整理、変更コストを抑える構造設計",
      kind: "tech",
    },
    {
      title: "UI 改善",
      description:
        "プロダクト視点で既存 UI の構造・体験を継続的に改善",
      kind: "tech",
    },
    {
      title: "自走力",
      description:
        "一人称で設計〜実装〜レビューを回せる",
      kind: "mind",
    },
    {
      title: "設計で貢献",
      description:
        "レビュー視点を持ち、チーム全体のコード品質を底上げ",
      kind: "mind",
    },
    {
      title: "長期視点",
      description:
        "中長期の保守・運用を見据えた実装判断",
      kind: "mind",
    },
  ] as const satisfies readonly Strength[],
} as const;
