# Portfolio Mini LP

React 案件の面談用に画面共有で見せる、縦スクロール 1 枚ミニ LP。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開く。

## 構成

```
src/
├── app/            … App.tsx（全体構成）
├── sections/       … Hero / About / Stack / ProjectSummary
├── components/
│   ├── layout/     … Container
│   └── ui/         … Chip, Card, SectionTitle, Segmented
├── data/           … 差し替え用データ
│   ├── copy.ts     … キャッチコピー（11 候補）
│   ├── about.ts    … 自己紹介文（6 パターン）＋チップ・箇条書きデータ
│   ├── stack.ts    … 技術スタック（visible で表示/非表示）
│   └── projects.ts … 案件概要（3 案件分）
├── utils/
│   └── variants.ts … バリアント切替フック
└── styles/
    ├── theme.css   … カラー・フォント・余白の変数
    └── globals.css … リセット＋ベーススタイル
```

## データ差し替え

面談先に合わせて差し替えるには `src/data/` 配下を編集する。

| ファイル | 内容 | 変更ポイント |
|---|---|---|
| `copy.ts` | Hero のキャッチコピー | `copySets` 配列にオブジェクトを追加/編集 |
| `about.ts` | 自己紹介文 | `aboutTexts` 配列を編集。チップは `aboutChips` |
| `stack.ts` | 技術スタック | `visible: false` で非表示にできる |
| `projects.ts` | 案件概要 | 1 案件 = 1 オブジェクト。追加は配列に push |

## バリアント切替

画面上部のコントロールバーとセクション上の Segmented タブで、
表示内容をリアルタイムに切り替えられる。

- **Catch** — Hero キャッチコピーの選択
- **About文** — 自己紹介文のトーン選択
- **About レイアウト** — aboutA（短文＋チップ）/ aboutB（2 カラム）/ aboutC（箇条書き）
- **Project** — 表示する案件の切替

## 技術スタック

React 19 + TypeScript + Vite + CSS Modules
