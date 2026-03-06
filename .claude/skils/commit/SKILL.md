---
name: commit
description: 変更内容を確認してgit add + commitを行う
argument-hint: "[message]"
allowed-tools:
  - "Bash(git *)"
disable-model-invocation: true
---

# Git Commit スキル

変更内容を自動で解析し、適切なコミットメッセージを日本語で生成してコミットする。

## 現在の変更状況

```
!git status
```

```
!git diff
```

```
!git diff --cached
```

```
!git log --oneline -5
```

## 手順

1. 上記の動的コンテキストで取得した `git status`、`git diff`、`git diff --cached` の結果を確認する
2. 変更がない場合は「コミットする変更がありません」と伝えて終了する
3. 変更対象のファイル一覧をユーザーに提示し、コミット対象として問題ないか確認する
4. コミットメッセージを生成する:
   - 引数 `$ARGUMENTS` が指定されている場合はそれをコミットメッセージとして使用する
   - 指定がない場合は、変更内容を分析して日本語で簡潔なコミットメッセージを自動生成する
   - 既存のコミットメッセージスタイル（`git log` の結果）に合わせる
   - 例: `施工事例詳細のギャラリー画像が小さい場合に枠サイズいっぱいに拡大されるよう調整`
5. 生成したコミットメッセージをユーザーに提示し、承認を得る
6. 承認後、`git add` で対象ファイルをステージングし、`git commit` を実行する
7. コミット結果を表示する

## ルール

- コミットメッセージは日本語で記述する
- 変更の目的・内容を簡潔に説明する（1行、長くても2行）
- `.env` やクレデンシャルなどの機密ファイルはコミット対象に含めない
- `git add -A` や `git add .` は使わず、対象ファイルを明示的に指定する
- コミットメッセージは HEREDOC 形式で渡す:

```
git commit -m "$(cat <<'EOF'
コミットメッセージ

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```
