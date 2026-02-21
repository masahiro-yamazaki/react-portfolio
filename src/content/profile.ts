export const profile = {
  name: "Masahiro Yamazaki",
  title: "Frontend Engineer",
  tagline: "ユーザー体験を考え抜くフロントエンドエンジニア",
  about:
    "React / TypeScript を中心に、パフォーマンスとアクセシビリティを重視した Web アプリケーション開発を行っています。設計・実装・レビューの全工程で品質にこだわり、チームの生産性向上にも貢献してきました。",
  strengths: [
    {
      title: "UI 設計力",
      description:
        "デザイナーとの協働経験を活かし、使いやすさと一貫性のある UI を構築",
    },
    {
      title: "パフォーマンス改善",
      description:
        "Core Web Vitals の改善やバンドルサイズ最適化の実績",
    },
    {
      title: "チーム開発",
      description:
        "コードレビュー文化の醸成やドキュメント整備による DX 向上",
    },
  ],
  contributions: [
    {
      title: "OSS コントリビューション",
      description:
        "React 関連ライブラリへのバグ修正 PR・ドキュメント改善",
    },
    {
      title: "社内勉強会",
      description:
        "フロントエンド技術の社内共有・モブプログラミングの推進",
    },
    {
      title: "技術記事",
      description: "実務で得た知見を Qiita・Zenn で発信",
    },
  ],
} as const;
