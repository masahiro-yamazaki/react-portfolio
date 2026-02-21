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
├── components/
│   ├── IntroSection.tsx … Hero + About 統合セクション（Tailwind）
│   ├── layout/          … Container
│   └── ui/              … Chip, Card, SectionTitle, Segmented
├── sections/       … Stack / ProjectSummary（CSS Modules）
├── data/           … 差し替え用データ
│   ├── profile.ts  … 名前・キャッチコピー(8個)・強み・自己紹介文・締め
│   ├── stack.ts    … 技術スタック（visible で表示/非表示）
│   └── projects.ts … 案件概要（3 案件分）
└── styles/
    ├── theme.css   … カラー・フォント・余白の変数
    └── globals.css … リセット＋ベーススタイル
```

## 文言の差し替え場所

| ファイル | 内容 | 変更ポイント |
|---|---|---|
| `data/profile.ts` | IntroSection の全データ | 下記参照 |
| `data/stack.ts` | 技術スタック | `visible: false` で非表示にできる |
| `data/projects.ts` | 案件概要 | 1 案件 = 1 オブジェクト。追加は配列に push |

### `data/profile.ts` の中身

| プロパティ | 説明 |
|---|---|
| `name` | 名前 |
| `title` | 肩書き |
| `catchCopies` | キャッチコピー候補の配列（8 個） |
| `strengths` | 左カラムの強み 3 つ |
| `summaryParagraphs` | 右カラムの自己紹介文（段落ごとの配列） |
| `closingLine` | 締めの一文 |

## キャッチコピー切替方法

IntroSection の下部にセレクトボックスがあり、
`profile.ts` の `catchCopies` 配列からリアルタイムに切り替えられる。
配列にパターンを追加すればセレクトの選択肢も自動で増える。

## 技術スタック

React 19 + TypeScript + Vite + Tailwind CSS v4 + CSS Modules
