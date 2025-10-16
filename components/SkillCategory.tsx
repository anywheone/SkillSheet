import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: Array<{
    name: string;
    level: number; // 1-5
  }>;
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        {title}
      </h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}/5</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
