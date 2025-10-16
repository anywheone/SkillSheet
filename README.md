# エンジニアスキルシート

Next.js + TypeScript + Tailwind CSSで作成した、モダンで美しいエンジニアスキルシートです。

## 特徴

- ✨ モダンで洗練されたデザイン
- 📱 完全レスポンシブ対応
- 🌓 ダークモード対応
- ⚡ Next.js 15 + TypeScript による高速なパフォーマンス
- 🎨 Tailwind CSSによる美しいグラデーションとアニメーション
- 📊 視覚的なスキルレベル表示
- 📝 編集しやすいコンポーネント構造

## セクション構成

1. **ヘッダー** - 名前、役職、連絡先情報
2. **プロフィール** - 自己紹介文
3. **技術スキル** - カテゴリ別のスキルと習熟度
4. **職務経歴** - タイムライン形式の職歴
5. **主要プロジェクト** - プロジェクトの詳細と成果
6. **学歴・資格** - 学歴と取得資格

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## カスタマイズ方法

### 個人情報の編集

`app/page.tsx` ファイルを開き、以下の部分を編集してください：

```tsx
<Header
  name="あなたの名前"
  title="あなたの職種"
  email="your.email@example.com"
  location="あなたの所在地"
  github="https://github.com/yourusername"
  linkedin="https://linkedin.com/in/yourusername"
/>
```

### プロフィール文の編集

`app/page.tsx` の「プロフィール」セクション内のテキストを編集してください。

### スキルの編集

`app/page.tsx` の「技術スキル」セクション内の `SkillCategory` コンポーネントを編集：

```tsx
<SkillCategory
  title="カテゴリ名"
  skills={[
    { name: 'スキル名', level: 5 }, // level は 1-5
    { name: '別のスキル', level: 4 },
  ]}
/>
```

### 職務経歴の編集

`ExperienceCard` コンポーネントを編集してあなたの経歴を反映させてください：

```tsx
<ExperienceCard
  company="会社名"
  position="役職"
  period="期間"
  description="説明文"
  achievements={[
    '実績1',
    '実績2',
  ]}
  technologies={['技術1', '技術2']}
/>
```

### プロジェクトの編集

`ProjectCard` コンポーネントを編集してあなたのプロジェクトを追加：

```tsx
<ProjectCard
  title="プロジェクト名"
  role="あなたの役割"
  period="期間"
  description="プロジェクトの説明"
  highlights={[
    'ハイライト1',
    'ハイライト2',
  ]}
  technologies={['技術1', '技術2']}
/>
```

## コンポーネント構造

- `components/Header.tsx` - ヘッダーコンポーネント
- `components/Section.tsx` - セクションタイトル用コンポーネント
- `components/SkillCategory.tsx` - スキルカテゴリ表示コンポーネント
- `components/ExperienceCard.tsx` - 職務経歴カードコンポーネント
- `components/ProjectCard.tsx` - プロジェクトカードコンポーネント

## デプロイ

### Vercel（推奨）

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com)でインポート
3. 自動的にデプロイされます

### その他のプラットフォーム

- Netlify
- AWS Amplify
- Cloudflare Pages

など、Next.jsをサポートする任意のプラットフォームにデプロイ可能です。

## PDF出力

ブラウザの印刷機能（Ctrl/Cmd + P）を使用してPDFとして保存できます。
印刷時の見た目も最適化されています。

## ライセンス

MIT

## 技術スタック

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
