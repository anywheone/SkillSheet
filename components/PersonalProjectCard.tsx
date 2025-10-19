type PersonalProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  status: '開発中' | '完成' | 'リリース済み';
  highlights?: string[];
};

export default function PersonalProjectCard({
  title,
  description,
  technologies,
  status,
  highlights,
}: PersonalProjectCardProps) {
  const statusColors = {
    'リリース済み': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    '開発中': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    '完成': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {highlights && highlights.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
