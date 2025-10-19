export type PersonalProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: '開発中' | '完成' | 'リリース済み';
  highlights?: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    id: 'ec-site',
    title: '商品紹介サイト（職人型ECサイト）',
    description: 'Atomic Designで構築した職人型ECサイト。Next.jsとASP.NET Coreによるフルスタック開発。Dockerで環境構築し、PostgreSQLでデータ管理。',
    technologies: ['React', 'Docker', 'C#', 'ASP.NET Core', 'PostgreSQL', 'Atomic Design', 'TypeScript'],
    category: 'フルスタック',
    status: '開発中',
    highlights: [
      'Atomic Designによるコンポーネント設計',
      'Docker環境での開発',
      'ASP.NET Core APIとの連携',
    ],
  },
  {
    id: 'estimation-service',
    title: '見積もり精度向上支援サービス',
    description: 'タイムボックス法・プランニングファラシーを取り入れた見積もり精度向上支援Webアプリケーション。',
    technologies: ['TypeScript', 'React', 'C#', 'ASP.NET Core'],
    category: 'Webアプリ',
    status: 'リリース済み',
    highlights: [
      'タイムボックス法の実装',
      'プランニングファラシー対策機能',
    ],
  },
  {
    id: 'learning-app',
    title: '学習系Webアプリ',
    description: 'Angular + C# MVCによる学習支援Webアプリケーション。環境構築から実装まで一貫して担当。',
    technologies: ['TypeScript', 'Angular', 'C#', 'ASP.NET MVC', 'npm', 'Angular CLI', '.NET CLI'],
    category: 'Webアプリ',
    status: '完成',
  },
  {
    id: 'reservation-site',
    title: '予約サイト',
    description: 'LAMP環境で構築した予約管理システム。Linux環境の構築から実装まで担当。',
    technologies: ['Linux', 'Apache', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Composer'],
    category: 'Webアプリ',
    status: '完成',
    highlights: [
      'LAMP環境の構築',
      'セキュリティ対策の実装',
    ],
  },
  {
    id: 'health-app',
    title: '健康系アプリ',
    description: 'Windows FormsによるデスクトップアプリケーシON。T-SQLでデータベース操作を実装。',
    technologies: ['C#', 'Windows Forms', 'T-SQL', 'SQL Server'],
    category: 'デスクトップアプリ',
    status: '完成',
  },
  {
    id: '3d-game',
    title: '3Dゲーム',
    description: 'UnityとC#による3Dゲーム開発。ゲーム開発の基礎を学習。',
    technologies: ['Unity', 'C#'],
    category: 'ゲーム',
    status: '完成',
  },
  {
    id: 'mobile-app',
    title: 'モバイルアプリ',
    description: 'Flutterによるクロスプラットフォームモバイルアプリケーション開発。',
    technologies: ['Flutter', 'Dart', 'Flutter CLI'],
    category: 'モバイルアプリ',
    status: '完成',
  },
];

export const getPersonalProjectsByCategory = (category: string) => {
  return personalProjects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return personalProjects.filter(project =>
    project.status === 'リリース済み' || project.status === '開発中'
  );
};
