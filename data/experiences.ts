export type ExperienceType = {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  priority: {
    default: number; // 1-12 (1が最優先)
    csharp: number;  // C#企業向けの優先度
    typescript: number; // TypeScript企業向けの優先度
  };
  isMainProject: {
    default: boolean;
    csharp: boolean;
    typescript: boolean;
  };
  tags: string[]; // フィルタリング用タグ
};

export const experiences: ExperienceType[] = [
  {
    id: 'erp-real-estate',
    company: '大手不動産会社のERPシステム',
    position: 'システムエンジニア（設計・開発・テスト）',
    period: '2024年9月 - 2025年8月',
    description: 'マイクロサービスアーキテクチャとERP（固定資産）システムの開発。チーム16名（MSA:5名、ERP:11名）体制で、後から参画したメンバーへのカウンターパート対応や分社化・全社化対応を担当。',
    achievements: [
      '電子保存番号の付与による伝票から証憑への逆検索機能を実装',
      '後から加わったメンバー2名へのカウンターパート対応（資料作成、環境構築支援、ドメイン解説など）',
      '分社化・全社化対応により、会計コード統一とグループ会社のシステム利用を実現',
      '固定資産台帳のCSV編集、WebAPI権限チェック追加、マスター再計算バッチの不整合検出など多数の機能改善',
      'Xunitによるテストコードの作成で品質向上',
    ],
    technologies: ['C#', 'PL/SQL', 'VBA', 'TypeScript', 'CSS-in-JS', 'ASP.NET Core', 'React', 'Atomic Design', 'SQL Server', 'Oracle 11g', 'Github', 'Xunit', 'Jira', 'Azure', 'Visual Studio 2022', 'draw.io', 'Mermaid'],
    priority: {
      default: 1,
      csharp: 1,
      typescript: 1,
    },
    isMainProject: {
      default: true,
      csharp: true,
      typescript: true,
    },
    tags: ['C#', 'TypeScript', 'React', 'フルスタック', 'マイクロサービス', 'DDD', 'エンタープライズ'],
  },
  {
    id: 'ict-colocation',
    company: '大手ICTサービス提供会社のコロケーション（ITインフラ）業務支援システム',
    position: 'システムエンジニア（システム要件定義）',
    period: '2024年1月 - 2024年8月',
    description: '大手3社の検討会でシステム要件定義書を執筆・発表。チーム7名（PM/1名、PL/1名、責任者/1名、要件定義チーム/4名）体制。',
    achievements: [
      '機能追加15件のシステム要件定義を作成',
      'セキュリティ対応5件の要件定義を実施',
      '大手3社の検討会で発言・発表を行い、要件の合意形成に貢献',
    ],
    technologies: ['C#', 'WebForms', 'SQL Server', 'Teams'],
    priority: {
      default: 2,
      csharp: 2,
      typescript: 8,
    },
    isMainProject: {
      default: true,
      csharp: true,
      typescript: false,
    },
    tags: ['C#', '要件定義', 'エンタープライズ'],
  },
  {
    id: 'accounting-security',
    company: '大手ソフトウェア開発・ITサービス会社の連結会計システムセキュリティ対応',
    position: 'システムエンジニア（開発・各種テスト）',
    period: '2023年9月 - 2023年12月',
    description: '関連子会社の収支決算をまとめるグループ決算システムのセキュリティ強化プロジェクト。高速開発によりセキュリティ対策とテスト自動化を4ヶ月で完了。チーム5名（PM/1名、PL/1名、PG/3名）体制で、権限昇格攻撃対応とAPI調査を担当。',
    achievements: [
      'セキュリティ脆弱性の解消：権限昇格攻撃を防ぐため、API側に包括的な権限チェック処理を実装し、システム全体のセキュリティレベルを向上',
      'テスト自動化によるQA効率化：TypeScript/Jestによる自動テストコードを作成し、継続的な品質保証体制を構築',
      '多角的なテスト実施：結合テスト、パフォーマンステスト、モンキーテストを実施し、システムの安定性を確認',
      'API仕様の可視化：全APIの調査と呼び出し元の特定を行い、保守性向上のための詳細な仕様書を作成',
    ],
    technologies: ['TypeScript', 'C#', 'Razor Pages', 'Visual Studio 2018', 'SQL Server', 'Git', 'Teams', 'DevOps', 'AWS S3', 'Jest', 'Knockout.js', 'jquery.gridster.js', 'Axios'],
    priority: {
      default: 3,
      csharp: 6,
      typescript: 3,
    },
    isMainProject: {
      default: true,
      csharp: false,
      typescript: true,
    },
    tags: ['TypeScript', 'C#', 'セキュリティ', 'テスト', 'アジャイル'],
  },
  {
    id: 'automotive-aws',
    company: '大手自動車メーカーの分析用データ作成システム',
    position: 'システムエンジニア（見積もり・開発・運用設計・結合テスト）',
    period: '2023年7月 - 2023年8月',
    description: '販売会社や自動車メーカー間での販売状況などの分析用システムのAWSへの近代化プロジェクト。短期集中型の開発体制で、2ヶ月間でレガシーシステムのクラウド移行とセキュリティ強化を完遂。チーム4名（PM/1名、PL/1名、PG/2名）体制。',
    achievements: [
      '短期間で開発ツール5本を開発完了（VBAツール4本、WPFツール1本：標準モジュール判定・エクスポートツール、VBAフォーム識別ツールなど）',
      'RDS/SQLServer接続用WebServiceの設計・開発（ASP.NET）',
      'AWS環境のゼロからの構築：EC2サーバPOC環境（IIS、WebDav、WebService、OpenSSH設定）を迅速にセットアップ',
      'セキュリティ強化を同時並行で実施：HTTP→HTTPS接続変更、SQLインジェクション対策、FTP→SFTP化を完了',
      '運用・移行設計書の作成から各資源のデプロイまで一貫して担当',
    ],
    technologies: ['VBA', 'VB.NET', 'JavaScript', 'HTML', 'Classic ASP', 'ASP.NET', 'WPF', 'AWS (ALB, EC2, RDS)', 'Windows Server 2019', 'IIS', 'SQL Server', 'WebDAV', 'Teams'],
    priority: {
      default: 4,
      csharp: 3,
      typescript: 9,
    },
    isMainProject: {
      default: true,
      csharp: true,
      typescript: false,
    },
    tags: ['VB.NET', 'AWS', 'インフラ', 'セキュリティ', '運用設計'],
  },
  {
    id: 'hosting-service',
    company: 'ITインフラ提供会社のホスティングサービス',
    position: 'システムエンジニア（基本設計・見積り・開発・結合テスト）',
    period: '2022年11月 - 2023年6月',
    description: 'BtoB、BtoC向けServerレンタルなどのホスティングサービス。Angular+.NET5.0によるアジャイル開発。チーム7名（PM/1名、PL/1名、PG/5名）体制。',
    achievements: [
      '新規受注追加の一連の画面の改修',
      '入金登録の一連の5画面（顧客検索・入金情報入力・請求検索・確認・完了）とAPI開発',
      '入金詳細（基本情報編集・明細編集・入金ログテーブル表示など）画面とAPI開発',
      'Angularの非同期処理や状態管理（NgRx）、コンポーネント指向の技術を活用',
      '複数のAPI開発・修正、API設計書作成、見積もりを実施',
      'Linq to SQLの生クエリ化調査を実施',
    ],
    technologies: ['Angular', 'TypeScript', 'C#', 'ASP.NET MVC', 'Visual Studio 2016', 'SQL Server', 'Entity Framework', 'Git (Backlog)', 'Swagger', 'SSMS', 'A5M2', 'Teams'],
    priority: {
      default: 5,
      csharp: 7,
      typescript: 2,
    },
    isMainProject: {
      default: true,
      csharp: false,
      typescript: true,
    },
    tags: ['Angular', 'TypeScript', 'C#', 'フルスタック', 'アジャイル', 'API'],
  },
  {
    id: 'energy-retail',
    company: '大手エネルギー事業会社の電気小売り事業システム',
    position: 'システムエンジニア（基本設計）',
    period: '2022年5月 - 2022年10月',
    description: '電気小売り事業システムの基本設計を担当。チーム7名（PM/1名、PL/1名、PG/5名）体制。',
    achievements: [
      '外部API調査を実施',
      '画面設計、ストアドプロシージャ設計、バッチ設計、内部API設計を実施',
      'テーブル定義書の作成',
    ],
    technologies: ['C#', 'ASP.NET MVC', 'Visual Studio 2016', 'SQL Server', 'Gitlab', 'Tocaro', 'A5M2'],
    priority: {
      default: 6,
      csharp: 5,
      typescript: 10,
    },
    isMainProject: {
      default: false,
      csharp: true,
      typescript: false,
    },
    tags: ['C#', '基本設計', 'API'],
  },
  {
    id: 'gis-infrastructure',
    company: '社会インフラ領域システム開発会社の地理情報システム',
    position: 'システムエンジニア（開発・単体テスト・結合テスト）',
    period: '2021年10月 - 2022年4月',
    description: '自治体向け業務GIS（地理情報システム）と住民向け災害情報配信GISアプリケーションの改修。GISのタブレット対応やOracleマイグレーション（11g→19g）を実施。チーム2名（PG/2名）体制。',
    achievements: [
      '自治体向け業務GISアプリケーションの改修（水道・下水道、道路、土地・建物財産管理の効率化）',
      '住民向け災害情報・公共施設情報配信GISアプリケーションの改修',
      'GISのタブレット対応を実施',
      '文教系システムのOracleマイグレーション（11g→19c、.NETマネージド対応）を実施',
    ],
    technologies: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'Django', 'Python', 'C#', 'ASP.NET', 'IIS', 'SQL Server', 'Oracle', 'MapQuest GISエンジン', 'Visual Studio 2008', 'VSCode', 'SSMS'],
    priority: {
      default: 7,
      csharp: 8,
      typescript: 5,
    },
    isMainProject: {
      default: false,
      csharp: false,
      typescript: true,
    },
    tags: ['JavaScript', 'Python', 'C#', 'Oracle移行', 'GIS'],
  },
  {
    id: 'printing-systems',
    company: '大手印刷会社の印刷システム、基盤システム',
    position: 'システムエンジニア（見積もり・基本設計・詳細設計・単体テスト・結合テスト・納品）/ バッチ開発PL',
    period: '2018年4月 - 2021年9月',
    description: '3年半の期間中に約20案件を担当した印刷システムおよび基盤システムの開発。C#、VB6、VB.NET、PowerShellを使用し、WinXP→Win10延命対応やOracleマイグレーション（10g→19c）を実施。バッチ開発PLとして、チーム体制はPM/1名、PL/1名、PG/2~5名。',
    achievements: [
      'C#による保険証券・チケットなど様々な印刷システムの改修',
      '伝送基盤バッチのマスタ配置アプリケーション改修',
      'VB6→VB.NETへのWinXP→Win10延命対応',
      'Oracle接続方式変更（oo4o→ODP.NET）、10g→19cマイグレーション',
      'Oracle統計情報取得、実行計画の確認とチューニング、オプティマイザに関する初期化パラメータ変更、表領域拡張、SQL*Loader制御ファイルの修正',
      'MDB接続方式変更（Jet→ACE、ADODB→ADO.NET）、最適化（DAO）',
      'PowerShellによるマスタ伝送基盤のバッチ新規開発（振分、配置、配置結果集約、拠点識別情報付与）',
    ],
    technologies: ['C#', 'VB.NET', 'PowerShell', 'VB6', 'ASP.NET Core', 'Windows Forms', 'WPF', 'Visual Studio 2005~2018', 'Oracle (10g~19c)', 'TortoiseSVN', 'Visual SourceSafe', 'Jenkins', 'Redmine', 'Teams', 'Zabbix', 'WinMerge'],
    priority: {
      default: 8,
      csharp: 2,
      typescript: 11,
    },
    isMainProject: {
      default: false,
      csharp: true,
      typescript: false,
    },
    tags: ['C#', 'VB.NET', 'PowerShell', 'PL経験', 'Oracle移行', 'システム延命'],
  },
  {
    id: 'sonar-system',
    company: '大手IT企業の護衛艦ソナーシステム',
    position: 'システムエンジニア（単体テスト・結合テスト）/ テストチーム内リーダー',
    period: '2017年8月 - 2018年3月',
    description: '訓練用シミュレーター機能追加のテスト実施。チーム8名（PM/1名、PL/1名、PG/4名、テスター/3名）体制で、テストチーム内リーダーを担当。',
    achievements: [
      'テストケース作成、スタブ作成',
      'テスト用プログラムのコンパイル、実行、ログ出力などのコマンド投入（make、gdbなど）',
      'テスト実施およびエビデンス作成',
      'バグ検出、および不具合事象の解析',
      'C++ソースファイルのコメントアウトを制御するVBAツール作成',
      'Astahでシーケンス図作成',
      'メンバーのスケジュール管理・進捗管理',
    ],
    technologies: ['C++', 'Excel VBA', 'Linux (CentOS)', 'Teraterm', 'TortoiseSVN', 'WinMerge', 'Eclipse', 'Astah', 'SakuraEditor', 'ドメイン駆動設計'],
    priority: {
      default: 9,
      csharp: 9,
      typescript: 6,
    },
    isMainProject: {
      default: false,
      csharp: false,
      typescript: false,
    },
    tags: ['C++', 'テスト', 'リーダー経験', '組み込み'],
  },
  {
    id: 'reservation-system',
    company: '予約管理システム初期開発',
    position: 'システムエンジニア（基本設計・開発・テスト）',
    period: '2017年1月 - 2017年7月',
    description: '予約管理システムの初期開発。チーム3名（PL/1名、PG/2名）体制。環境構築からセキュリティ対策まで幅広く担当。',
    achievements: [
      '環境構築、DBやテーブル作成',
      '予約フォーム、予約確認画面、予約詳細画面、予約管理画面の開発',
      'ログイン画面、パスワード変更画面、パスワードリカバリ機能の開発',
      'セキュリティ対策（クロスサイトリクエストフォージェリ、クロスサイト・スクリプティング、セッション・ハイジャック）',
      '画面設計、DB設計',
    ],
    technologies: ['PHP', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'LAMP (Linux, Apache, MySQL, PHP)', 'Composer', 'Bit Bucket', 'SourceTree', 'Slack', 'Bootstrap', 'MySQL'],
    priority: {
      default: 10,
      csharp: 10,
      typescript: 4,
    },
    isMainProject: {
      default: false,
      csharp: false,
      typescript: true,
    },
    tags: ['PHP', 'フルスタック', 'セキュリティ', 'LAMP'],
  },
  {
    id: 'travel-billing',
    company: '大手旅行会社の課金基幹システム',
    position: 'システムエンジニア（運用保守）',
    period: '2016年7月 - 2016年12月',
    description: '大手旅行会社の課金基幹システムの運用・保守を担当。チーム2名体制。',
    achievements: [
      '各支店の売り上げ等集計・差分チェックの運用',
      'トラブルシューティング、ログ確認、Javaパッチ作成',
      '特定日付範囲内の特定条件の件数調査依頼によるSQL実行',
    ],
    technologies: ['Java', 'VBA', 'Eclipse', 'Oracle'],
    priority: {
      default: 11,
      csharp: 11,
      typescript: 7,
    },
    isMainProject: {
      default: false,
      csharp: false,
      typescript: false,
    },
    tags: ['Java', '運用保守'],
  },
  {
    id: 'training',
    company: '研修',
    position: '新人研修（3ヶ月間の集中トレーニング）',
    period: '2016年4月 - 2016年6月',
    description: 'プログラミング基礎からインフラ、チーム開発まで幅広く学ぶ3ヶ月間の実践的な研修プログラム。座学だけでなく、ペアプログラミング、チーム開発、本番環境へのデプロイまで実施。',
    achievements: [
      'C++によるオブジェクト指向プログラミング基礎の習得',
      'HTML5、CSS、JavaScriptによるフロントエンド開発スキルの習得',
      'PHP + MySQL（LAMP環境）でのバックエンド開発とWebアプリケーション構築',
      'Oracle(11g)データベース基礎、PL/SQLプログラミング（CRUD操作、ストアドプロシージャ）の習得',
      'Linux(CentOS)オペレーション、Shell(bash)プログラミング、Vimエディタ操作の習得',
      'VirtualBox、Vagrantによる仮想環境構築とサーバ基礎学習',
      'NginxによるWebサーバ構築と設定',
      'ネットワーク実機操作：ルーター、ファイアウォールの設定実習',
      'ペアプログラミングによる協働開発の実践',
      'Git/GitHubを使用したチーム開発の実践（3〜4名チーム）',
      '休日もくもく会への積極的な参加（自主学習・質問対応）',
      'さくらレンタルサーバへのWebアプリケーションデプロイ実践',
    ],
    technologies: ['C++', 'HTML5', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Oracle 11g', 'SQL', 'PL/SQL', 'Linux (CentOS)', 'Shell (bash)', 'Nginx', 'VirtualBox', 'Vagrant', 'Git', 'GitHub', 'Vim', 'TeraTerm', 'さくらレンタルサーバ'],
    priority: {
      default: 12,
      csharp: 12,
      typescript: 12,
    },
    isMainProject: {
      default: false,
      csharp: false,
      typescript: false,
    },
    tags: ['研修', 'フルスタック', 'チーム開発', 'インフラ'],
  },
];

// バリアント別にフィルタリングする関数
export const getExperiencesByVariant = (variant: 'default' | 'csharp' | 'typescript') => {
  return [...experiences].sort((a, b) => a.priority[variant] - b.priority[variant]);
};

export const getMainProjects = (variant: 'default' | 'csharp' | 'typescript') => {
  return experiences.filter(exp => exp.isMainProject[variant]);
};

export const getOtherExperiences = (variant: 'default' | 'csharp' | 'typescript') => {
  return experiences.filter(exp => !exp.isMainProject[variant]);
};
