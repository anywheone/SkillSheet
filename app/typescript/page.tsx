import Header from '@/components/Header';
import Section from '@/components/Section';
import SkillCategory from '@/components/SkillCategory';
import ExperienceCard from '@/components/ExperienceCard';
import PersonalProjectCard from '@/components/PersonalProjectCard';
import { getMainProjects, getOtherExperiences } from '@/data/experiences';
import { profiles } from '@/data/profiles';
import { getSkillsByVariant } from '@/data/skills';
import { getFeaturedProjects } from '@/data/personalProjects';
import { selfAppeal } from '@/data/selfAppeal';
import { sortTechnologies } from '@/utils/sortTechnologies';
import { HEADER_INFO, FOOTER_INFO } from '@/data/personalInfo';

export default function TypeScriptPage() {
  const variant = 'typescript';
  const mainProjects = getMainProjects(variant);
  const otherExperiences = getOtherExperiences(variant);
  const profileParagraphs = profiles[variant];
  const skills = getSkillsByVariant(variant);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header
          name={HEADER_INFO.displayName}
          title="TypeScript / React エンジニア"
          email={HEADER_INFO.email}
          location={HEADER_INFO.location}
          nearestStation={HEADER_INFO.nearestStation}
          github={HEADER_INFO.github}
          linkedin={HEADER_INFO.linkedin}
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
            <div className="space-y-4">
              {profileParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
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
              {skills.map((category) => (
                <SkillCategory
                  key={category.title}
                  title={category.title}
                  skills={category.skills}
                />
              ))}
            </div>
          </Section>
        </div>

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <Section
            title="主要プロジェクト"
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          >
            <div className="space-y-0">
              {mainProjects.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  company={exp.company}
                  position={exp.position}
                  period={exp.period}
                  description={exp.description}
                  achievements={exp.achievements}
                  technologies={sortTechnologies(exp.technologies, 'typescript')}
                />
              ))}
            </div>
          </Section>
        </div>

        {otherExperiences.length > 0 && (
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <Section
              title="その他の経験"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            >
              <div className="space-y-6">
                {otherExperiences.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {exp.position} | {exp.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sortTechnologies(exp.technologies, 'typescript').slice(0, exp.id === 'training' ? undefined : 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <Section
            title="個人開発プロジェクト"
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getFeaturedProjects().map((project) => (
                <PersonalProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  status={project.status}
                  highlights={project.highlights}
                />
              ))}
            </div>
          </Section>
        </div>

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <Section
            title="自己PR・キャリアストーリー"
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
          >
            <div className="space-y-8">
              {selfAppeal.map((section, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <footer className="text-center text-gray-500 dark:text-gray-400 mt-12 pb-8">
          <p className="text-sm">© 2025 {FOOTER_INFO.copyright} - TypeScript / React エンジニア スキルシート</p>
          <p className="text-xs mt-2">Last Updated: {FOOTER_INFO.lastUpdated}</p>
        </footer>
      </div>
    </main>
  );
}
