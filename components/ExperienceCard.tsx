import React from 'react';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceCard({
  company,
  position,
  period,
  description,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-blue-600 last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{position}</h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{company}</p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        {achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">主な実績:</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
