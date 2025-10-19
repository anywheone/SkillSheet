export type Skill = {
  name: string;
  level: number; // 1-5
};

export type SkillCategoryType = {
  title: string;
  skills: Skill[];
  order: number; // 表示順序
};

export type ProfileVariant = 'default' | 'csharp' | 'typescript';

// デフォルト版（モダンな印象に更新）
const defaultSkills: SkillCategoryType[] = [
  {
    title: 'フロントエンド',
    skills: [
      { name: 'TypeScript 5.x', level: 5 },
      { name: 'React 18 / Next.js 14+', level: 5 },
      { name: 'Angular 16+', level: 4 },
      { name: 'HTML5 / CSS3', level: 5 },
      { name: 'CSS-in-JS / Tailwind', level: 5 },
      { name: 'Atomic Design', level: 5 },
    ],
    order: 1,
  },
  {
    title: 'バックエンド',
    skills: [
      { name: '.NET Core / .NET 6-8', level: 5 },
      { name: 'ASP.NET Core', level: 5 },
      { name: 'C# 10-12', level: 5 },
      { name: 'Entity Framework Core', level: 5 },
      { name: 'Node.js / Express', level: 3 },
      { name: 'PHP', level: 4 },
    ],
    order: 2,
  },
  {
    title: 'アーキテクチャ・設計',
    skills: [
      { name: 'マイクロサービス', level: 5 },
      { name: 'ドメイン駆動設計 (DDD)', level: 5 },
      { name: 'クリーンアーキテクチャ', level: 4 },
      { name: 'CQRS パターン', level: 4 },
      { name: 'REST / GraphQL API', level: 5 },
    ],
    order: 3,
  },
  {
    title: 'データベース',
    skills: [
      { name: 'SQL Server', level: 5 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'Oracle', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'Redis', level: 3 },
    ],
    order: 4,
  },
  {
    title: 'クラウド / DevOps',
    skills: [
      { name: 'Azure (App Service, Functions)', level: 4 },
      { name: 'AWS (EC2, RDS, Lambda, S3)', level: 4 },
      { name: 'Docker / コンテナ', level: 4 },
      { name: 'CI/CD (GitHub Actions, Jenkins)', level: 4 },
      { name: 'Vercel / Netlify', level: 3 },
    ],
    order: 5,
  },
  {
    title: 'テスト・品質',
    skills: [
      { name: 'Jest / Vitest', level: 5 },
      { name: 'xUnit / NUnit', level: 5 },
      { name: 'Testing Library', level: 5 },
      { name: 'TDD / テスト自動化', level: 4 },
      { name: 'ESLint / Prettier', level: 5 },
    ],
    order: 6,
  },
  {
    title: '開発ツール・その他',
    skills: [
      { name: 'Git / GitHub / GitLab', level: 5 },
      { name: 'VSCode', level: 5 },
      { name: 'Visual Studio 2022', level: 5 },
      { name: 'アジャイル / スクラム', level: 4 },
      { name: 'Jira / Azure Boards', level: 4 },
    ],
    order: 7,
  },
];

// C#企業向け（バックエンドを最優先に）
const csharpSkills: SkillCategoryType[] = [
  {
    title: 'バックエンド（.NET）',
    skills: [
      { name: '.NET Core / .NET 6-8', level: 5 },
      { name: 'ASP.NET Core', level: 5 },
      { name: 'C# 10-12', level: 5 },
      { name: 'Entity Framework Core', level: 5 },
      { name: 'Dapper', level: 4 },
      { name: 'ASP.NET MVC', level: 4 },
      { name: 'PowerShell', level: 4 },
    ],
    order: 1,
  },
  {
    title: 'アーキテクチャ・設計',
    skills: [
      { name: 'マイクロサービス', level: 5 },
      { name: 'ドメイン駆動設計 (DDD)', level: 5 },
      { name: 'クリーンアーキテクチャ', level: 4 },
      { name: 'CQRS パターン', level: 4 },
      { name: 'REST API 設計', level: 5 },
      { name: 'イベント駆動設計', level: 4 },
    ],
    order: 2,
  },
  {
    title: 'データベース',
    skills: [
      { name: 'SQL Server', level: 5 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'Oracle', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'Redis', level: 3 },
    ],
    order: 3,
  },
  {
    title: 'フロントエンド',
    skills: [
      { name: 'TypeScript', level: 5 },
      { name: 'React', level: 5 },
      { name: 'Next.js', level: 4 },
      { name: 'Angular', level: 4 },
      { name: 'HTML5 / CSS3', level: 4 },
    ],
    order: 4,
  },
  {
    title: 'クラウド / DevOps',
    skills: [
      { name: 'Azure (App Service, Functions)', level: 4 },
      { name: 'AWS (EC2, RDS, Lambda)', level: 4 },
      { name: 'Docker / コンテナ', level: 4 },
      { name: 'CI/CD (Azure DevOps, Jenkins)', level: 4 },
      { name: 'IIS / Kestrel', level: 4 },
    ],
    order: 5,
  },
  {
    title: 'テスト・品質',
    skills: [
      { name: 'xUnit / NUnit', level: 5 },
      { name: 'Moq / FluentAssertions', level: 4 },
      { name: 'TDD / BDD', level: 4 },
      { name: 'Jest (TypeScript)', level: 4 },
    ],
    order: 6,
  },
  {
    title: 'ツール・その他',
    skills: [
      { name: 'Visual Studio 2022', level: 5 },
      { name: 'Git / GitHub / Azure DevOps', level: 5 },
      { name: 'Jira / Azure Boards', level: 4 },
      { name: 'Swagger / OpenAPI', level: 4 },
    ],
    order: 7,
  },
];

// TypeScript企業向け（フロントエンドを最優先に）
const typescriptSkills: SkillCategoryType[] = [
  {
    title: 'フロントエンド',
    skills: [
      { name: 'TypeScript 5.x', level: 5 },
      { name: 'React 18 / Next.js 14+', level: 5 },
      { name: 'Angular 16+', level: 4 },
      { name: 'HTML5 / CSS3', level: 5 },
      { name: 'CSS-in-JS / Tailwind', level: 5 },
      { name: 'Atomic Design', level: 5 },
      { name: 'Vite / Webpack', level: 4 },
    ],
    order: 1,
  },
  {
    title: '状態管理・ライブラリ',
    skills: [
      { name: 'React Hooks / Context', level: 5 },
      { name: 'NgRx / RxJS', level: 4 },
      { name: 'React Query / SWR', level: 4 },
      { name: 'Zustand / Jotai', level: 3 },
    ],
    order: 2,
  },
  {
    title: 'バックエンド',
    skills: [
      { name: 'C# / ASP.NET Core', level: 5 },
      { name: 'Node.js / Express', level: 3 },
      { name: 'REST / GraphQL API', level: 5 },
      { name: 'Entity Framework', level: 4 },
    ],
    order: 3,
  },
  {
    title: 'テスト・品質',
    skills: [
      { name: 'Jest / Vitest', level: 5 },
      { name: 'Testing Library', level: 5 },
      { name: 'Playwright / Cypress', level: 3 },
      { name: 'TDD / テスト自動化', level: 4 },
      { name: 'ESLint / Prettier', level: 5 },
    ],
    order: 4,
  },
  {
    title: 'DevOps / デプロイ',
    skills: [
      { name: 'Vercel / Netlify', level: 4 },
      { name: 'AWS (S3, CloudFront)', level: 4 },
      { name: 'Azure', level: 4 },
      { name: 'Docker', level: 3 },
      { name: 'GitHub Actions / CI/CD', level: 4 },
    ],
    order: 5,
  },
  {
    title: 'データベース',
    skills: [
      { name: 'PostgreSQL', level: 4 },
      { name: 'SQL Server', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'Prisma / TypeORM', level: 3 },
    ],
    order: 6,
  },
  {
    title: '開発手法・ツール',
    skills: [
      { name: 'Git / GitHub', level: 5 },
      { name: 'VSCode', level: 5 },
      { name: 'アジャイル / スクラム', level: 4 },
      { name: 'コードレビュー文化', level: 5 },
      { name: 'ドメイン駆動設計', level: 4 },
    ],
    order: 7,
  },
];

export const skillsByVariant: Record<ProfileVariant, SkillCategoryType[]> = {
  default: defaultSkills,
  csharp: csharpSkills,
  typescript: typescriptSkills,
};

export const getSkillsByVariant = (variant: ProfileVariant): SkillCategoryType[] => {
  return [...skillsByVariant[variant]].sort((a, b) => a.order - b.order);
};
