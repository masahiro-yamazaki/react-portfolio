---
name: react
description: 要件テキストからプロジェクト規約に沿った React コンポーネントを自動生成する
argument-hint: "<要件>"
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - "Bash(npx tsc *)"
  - "Bash(npx vite *)"
  - "Bash(ls *)"
---

# React コンポーネント生成スキル

要件テキスト `$ARGUMENTS` を解析し、既存プロジェクトの規約に沿った React コンポーネント（TSX + CSS Module）を生成する。

## 動的コンテキスト

### ファイルツリー
```
!find src -type f | sort
```

### テーマ変数
```
!cat src/styles/theme.css
```

### App 構造
```
!cat src/app/App.tsx
```

### データ層
```
!ls src/data/
```

## 手順

### 1. 要件分析

`$ARGUMENTS` を解析し、以下を判断してユーザーに提示する:

- **生成タイプ**: 以下のいずれか
  - `section` — ページのセクション（`src/sections/` に配置、`Container` + `SectionTitle` を使用）
  - `ui` — 再利用可能な UI 部品（`src/components/ui/` に配置）
  - `layout` — レイアウトコンポーネント（`src/components/layout/` に配置）
  - `feature` — 機能コンポーネント（`src/components/` に配置）
- **コンポーネント名**: PascalCase
- **生成ファイル一覧**: TSX, CSS Module, データファイル（必要時）
- **App.tsx への統合が必要か**

ユーザーの承認を得てから次のステップに進む。

### 2. データ層作成（必要な場合）

表示データがある場合、`src/data/` にデータファイルを作成する。

```typescript
// src/data/example.ts
export interface ExampleItem {
  // フィールド定義
}

export const exampleData: ExampleItem[] = [
  // データ
];
```

### 3. コンポーネント生成

TSX と CSS Module をペアで作成する。

#### section タイプの場合のテンプレート:

```typescript
// src/sections/Example.tsx
import { Container } from "../components/layout/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import styles from "./Example.module.css";

interface ExampleProps {
  // Props（不要なら省略可）
}

export function Example() {
  return (
    <section className={styles.section} id="example">
      <Container>
        <SectionTitle>Example</SectionTitle>
        {/* コンテンツ */}
      </Container>
    </section>
  );
}
```

```css
/* src/sections/Example.module.css */
.section {
  padding: var(--space-section) 0;
}

/* -- レスポンシブ -- */
@media (max-width: 768px) {
  /* モバイル対応 */
}
```

#### ui / layout / feature タイプの場合:

配置先ディレクトリに応じて適切に作成する。`Container` や `SectionTitle` の使用はセクションタイプのみ。

### 4. App.tsx 統合（section タイプの場合）

`src/app/App.tsx` に import を追加し、適切な位置に JSX を配置する。配置位置はユーザーに確認する。

### 5. 型チェック

```bash
npx tsc -b --noEmit
```

エラーがあれば修正して再検証する。

### 6. ビルド確認

```bash
npx vite build
```

エラーがあれば修正して再検証する。

### 7. 結果報告

生成・変更したファイル一覧を報告する。コミットはこのスキルでは行わない。

## コーディング規約（厳守）

### ファイル構成
- TSX と CSS Module は必ずペアで作成する
- ファイル名は PascalCase（例: `ContactForm.tsx`, `ContactForm.module.css`）

### TypeScript
- `export function` による名前付きエクスポートのみ（`export default` 禁止）
- Props は `interface` で定義する（`type` ではなく `interface`）
- 型のインポートには `import type` を使う（`verbatimModuleSyntax` 対応）

### CSS
- CSS Modules + CSS 変数のみ使用（Tailwind 不使用）
- 色・余白・フォントサイズは `theme.css` の変数を使う（ハードコード禁止）
- レスポンシブ対応必須（ブレークポイント: `768px`）

### セクション固有
- `Container` で幅を制約する
- `SectionTitle` で見出しを表示する
- セクションのルート要素は `<section>` タグ + `id` 属性

### 禁止事項
- このスキル内で `git commit` を実行しない
- `export default` を使わない
- 色やサイズのハードコード（テーマ変数を使う）
