export interface CopySet {
  id: string;
  catchphrase: string;
}

/** キャッチコピー候補（10+） — copySets[index] で切替可能 */
export const copySets: CopySet[] = [
  {
    id: "improvement",
    catchphrase: "「作る」より「改善し続ける」を大切にしています",
  },
  {
    id: "e2e",
    catchphrase: "UIの設計から改善まで、一気通貫で担います",
  },
  {
    id: "readability",
    catchphrase: "読みやすく、変更に強いコードを書きます",
  },
  {
    id: "component",
    catchphrase: "共通化と責務分離で、保守性の高いUIを設計します",
  },
  {
    id: "longterm",
    catchphrase: "中長期の運用を見据えた実装判断をします",
  },
  {
    id: "team",
    catchphrase: "設計とレビューで、チーム全体のコード品質を底上げします",
  },
  {
    id: "self-driven",
    catchphrase: "一人称で設計から実装・レビューまで回せます",
  },
  {
    id: "migration",
    catchphrase: "レガシーからモダンへ、段階的な移行を得意としています",
  },
  {
    id: "product",
    catchphrase: "プロダクト視点でUIの構造と体験を改善します",
  },
  {
    id: "quiet",
    catchphrase: "静かに、確実に、コードベースを良くしていきます",
  },
  {
    id: "practical",
    catchphrase: "実務に根ざした設計力で、現場の課題を解決します",
  },
];

/** Hero右側の強みカード */
export const heroStrengths = [
  { label: "コンポーネント設計", description: "共通化・責務分離・再利用性を意識した設計" },
  { label: "可読性と保守性", description: "変更コストを抑える構造設計" },
  { label: "UI 改善", description: "プロダクト視点での継続的な改善" },
];

/** Hero表示名・肩書き */
export const heroProfile = {
  name: "Masahiro Yamazaki",
  title: "Frontend Engineer",
  subtitle: "React / TypeScript",
};
