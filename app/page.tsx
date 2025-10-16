import Header from '@/components/Header';
import Section from '@/components/Section';
import SkillCategory from '@/components/SkillCategory';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header
          name="山田 太郎"
          title="フルスタックエンジニア"
          email="yamada.taro@example.com"
          location="東京, 日本"
          github="https://github.com/yamada-taro"
          linkedin="https://linkedin.com/in/yamada-taro"
        />

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <Section
            title="プロフィール"
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              8年以上のソフトウェア開発経験を持つフルスタックエンジニアです。
              React、TypeScript、Node.jsを中心としたモダンな技術スタックでの開発を得意としており、
              スケーラブルで保守性の高いアプリケーション設計に情熱を注いでいます。
              アジャイル開発環境でのチーム開発経験が豊富で、技術的なリーダーシップを発揮してきました。
            </p>
          </Section>
        </div>

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <Section
            title="技術スキル"
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCategory
                title="フロントエンド"
                skills={[
                  { name: 'React / Next.js', level: 5 },
                  { name: 'TypeScript', level: 5 },
                  { name: 'Vue.js', level: 4 },
                  { name: 'Tailwind CSS', level: 5 },
                  { name: 'HTML5 / CSS3', level: 5 },
                ]}
              />
              <SkillCategory
                title="バックエンド"
                skills={[
                  { name: 'Node.js', level: 5 },
                  { name: 'Express.js', level: 5 },
                  { name: 'Python / FastAPI', level: 4 },
                  { name: 'GraphQL', level: 4 },
                  { name: 'REST API', level: 5 },
                ]}
              />
              <SkillCategory
                title="データベース"
                skills={[
                  { name: 'PostgreSQL', level: 4 },
                  { name: 'MongoDB', level: 4 },
                  { name: 'Redis', level: 4 },
                  { name: 'MySQL', level: 4 },
                ]}
              />
              <SkillCategory
                title="DevOps / インフラ"
                skills={[
                  { name: 'Docker', level: 4 },
                  { name: 'AWS', level: 4 },
                  { name: 'CI/CD', level: 4 },
                  { name: 'Kubernetes', level: 3 },
                ]}
              />
              <SkillCategory
                title="ツール・その他"
                skills={[
                  { name: 'Git / GitHub', level: 5 },
                  { name: 'Figma', level: 4 },
                  { name: 'Jira', level: 4 },
                  { name: 'Slack API', level: 4 },
                ]}
              />
              <SkillCategory
                title="開発手法"
                skills={[
                  { name: 'アジャイル / スクラム', level: 5 },
                  { name: 'テスト駆動開発', level: 4 },
                  { name: 'ペアプログラミング', level: 4 },
                  { name: 'コードレビュー', level: 5 },
                ]}
              />
            </div>
          </Section>
        </div>

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <Section
            title="職務経歴"
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          >
            <div className="space-y-0">
              <ExperienceCard
                company="株式会社テックイノベーション"
                position="シニアフルスタックエンジニア / テックリード"
                period="2021年4月 - 現在"
                description="SaaS型業務管理プラットフォームの開発をリード。チーム5名のテクニカルリーダーとして、アーキテクチャ設計からコードレビュー、メンバー育成まで幅広く担当。"
                achievements={[
                  'マイクロサービスアーキテクチャへの移行を主導し、システムの可用性を99.9%に向上',
                  'CI/CDパイプラインの最適化により、デプロイ時間を70%削減',
                  '新機能開発のリードタイムを平均3週間から1週間に短縮',
                  'テスト自動化により、バグ検出率を40%向上',
                ]}
                technologies={['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL']}
              />
              <ExperienceCard
                company="株式会社デジタルソリューションズ"
                position="フルスタックエンジニア"
                period="2018年4月 - 2021年3月"
                description="Eコマースプラットフォームの開発・運用を担当。フロントエンドからバックエンド、インフラまで幅広い技術領域で貢献。"
                achievements={[
                  '決済システムの刷新により、決済処理速度を2倍に向上',
                  'レスポンシブデザインの実装で、モバイルコンバージョン率を25%向上',
                  '検索機能の最適化により、サイト滞在時間を30%延長',
                ]}
                technologies={['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS Lambda']}
              />
              <ExperienceCard
                company="株式会社ウェブクリエイト"
                position="フロントエンドエンジニア"
                period="2016年4月 - 2018年3月"
                description="企業向けWebアプリケーションのフロントエンド開発を担当。UI/UXの改善とパフォーマンス最適化に注力。"
                achievements={[
                  'SPAへの移行により、ページ遷移速度を3倍に向上',
                  'アクセシビリティ対応でWCAG 2.1 AA基準を達成',
                  'コンポーネントライブラリの構築で開発効率を40%向上',
                ]}
                technologies={['Vue.js', 'JavaScript', 'Sass', 'Webpack', 'Jest']}
              />
            </div>
          </Section>
        </div>

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <Section
            title="主要プロジェクト"
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="エンタープライズ業務管理システム"
                role="テックリード・アーキテクト"
                period="2022年1月 - 2024年12月"
                description="大規模企業向けの統合業務管理システムの設計・開発。10,000ユーザー以上が利用する基幹システムの構築をリード。"
                highlights={[
                  'マイクロサービスアーキテクチャによる拡張性の高いシステム設計',
                  'リアルタイムダッシュボードの実装（WebSocket使用）',
                  '複雑な権限管理システムの構築',
                  'マルチテナント対応',
                ]}
                technologies={['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS ECS', 'GraphQL']}
              />
              <ProjectCard
                title="モバイルファーストECサイト"
                role="フルスタック開発者"
                period="2020年6月 - 2021年12月"
                description="モバイルファーストを重視したEコマースサイトの開発。PWA対応により、アプリライクな体験を提供。"
                highlights={[
                  'PWA実装によるオフライン対応',
                  '画像最適化で初期表示速度を60%改善',
                  'Stripeを使用した決済システムの統合',
                  'SEO最適化でオーガニック流入を2倍に増加',
                ]}
                technologies={['Next.js', 'React', 'Stripe API', 'MongoDB', 'Vercel', 'Google Analytics']}
              />
              <ProjectCard
                title="リアルタイムコラボレーションツール"
                role="フロントエンド開発者"
                period="2019年3月 - 2020年5月"
                description="チーム向けのリアルタイムコラボレーションツールの開発。複数ユーザーの同時編集機能を実装。"
                highlights={[
                  'WebSocketを使用したリアルタイム同期機能',
                  'Operational Transformationアルゴリズムの実装',
                  'オフライン編集と自動同期機能',
                  'レスポンシブデザインによる全デバイス対応',
                ]}
                technologies={['React', 'TypeScript', 'Socket.io', 'Node.js', 'MongoDB', 'AWS']}
              />
              <ProjectCard
                title="データ分析ダッシュボード"
                role="フルスタック開発者"
                period="2018年8月 - 2019年2月"
                description="マーケティングデータを可視化するダッシュボードアプリケーションの開発。大量データの高速処理を実現。"
                highlights={[
                  '100万件以上のデータを扱う高速クエリ最適化',
                  'インタラクティブなグラフ・チャートの実装',
                  'カスタムレポート生成機能',
                  'PDFエクスポート機能',
                ]}
                technologies={['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis']}
              />
            </div>
          </Section>
        </div>

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <Section
            title="学歴・資格"
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
          >
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">東京工業大学</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">情報工学科 学士</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2012年4月 - 2016年3月</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">資格</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500">✓</span>
                    <span>AWS Certified Solutions Architect - Professional (2023年)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500">✓</span>
                    <span>応用情報技術者 (2017年)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500">✓</span>
                    <span>TOEIC 850点 (2022年)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        <footer className="text-center text-gray-500 dark:text-gray-400 mt-12 pb-8">
          <p className="text-sm">© 2024 山田 太郎 - エンジニアスキルシート</p>
          <p className="text-xs mt-2">Last Updated: 2024年10月</p>
        </footer>
      </div>
    </main>
  );
}
