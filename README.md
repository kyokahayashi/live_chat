# vue_live_chat

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### ブランチ命名規則

1. 基本的な命名規則
   種類をプレフィックスにする
   変更の種類に応じて、プレフィックスを付けるのが一般的です。

feature/: 新しい機能の追加
例: feature/add-login-page
bugfix/: バグ修正
例: bugfix/fix-header-responsive
hotfix/: 急ぎの修正
例: hotfix/fix-critical-error
refactor/: リファクタリング
例: refactor/improve-api-handling
test/: テスト関連
例: test/add-login-tests
release/: バージョン番号

2. タスク番号や Jira チケット番号を含める
   タスク管理ツールを使っている場合、チケット番号を含めると追跡が簡単です。

フォーマット例:
php
コードをコピーする
feature/<チケット番号>-<簡潔な説明>
bugfix/<チケット番号>-<簡潔な説明>
例:
feature/1234-add-dark-mode (チケット 1234: ダークモードの追加)
bugfix/5678-fix-navbar (チケット 5678: ナビゲーションバーの修正)
