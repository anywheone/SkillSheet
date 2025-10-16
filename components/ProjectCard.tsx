import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  period: string;
  technologies: string[];
  highlights: string[];
}

export default function ProjectCard({
  title,
  description,
  role,
  period,
  technologies,
  highlights,
}: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
          {period}
        </span>
      </div>
      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-3">{role}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      {highlights.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ハイライト:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
