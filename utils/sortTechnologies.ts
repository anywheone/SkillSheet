export type TechVariant = 'default' | 'csharp' | 'typescript';

// C#関連技術の優先順位
const csharpPriority = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'ASP.NET MVC',
  'ASP.NET',
  'VB.NET',
  'VB6',
  'SQL Server',
  'Oracle',
  'PL/SQL',
  'Entity Framework',
  'Dapper',
  'PowerShell',
  'Windows Forms',
  'WPF',
  'Razor Pages',
  'WebForms',
  'VBA',
  'Excel VBA',
];

// TypeScript/フロントエンド関連技術の優先順位
const typescriptPriority = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Angular',
  'NgRx',
  'jQuery',
  'HTML',
  'HTML5',
  'CSS',
  'CSS3',
  'CSS-in-JS',
  'Atomic Design',
  'Jest',
  'Knockout.js',
  'Bootstrap',
];

/**
 * 技術タグをvariantに応じて並び替える
 */
export function sortTechnologies(technologies: string[], variant: TechVariant): string[] {
  if (variant === 'default') {
    return technologies;
  }

  const priorityList = variant === 'csharp' ? csharpPriority : typescriptPriority;

  // 優先リストに含まれる技術と含まれない技術に分ける
  const prioritized: string[] = [];
  const others: string[] = [];

  technologies.forEach((tech) => {
    const isInPriority = priorityList.some((priority) =>
      tech.toLowerCase().includes(priority.toLowerCase()) ||
      priority.toLowerCase().includes(tech.toLowerCase())
    );

    if (isInPriority) {
      prioritized.push(tech);
    } else {
      others.push(tech);
    }
  });

  // 優先リストの順序でソート
  prioritized.sort((a, b) => {
    const indexA = priorityList.findIndex((p) =>
      a.toLowerCase().includes(p.toLowerCase()) ||
      p.toLowerCase().includes(a.toLowerCase())
    );
    const indexB = priorityList.findIndex((p) =>
      b.toLowerCase().includes(p.toLowerCase()) ||
      p.toLowerCase().includes(b.toLowerCase())
    );
    return indexA - indexB;
  });

  return [...prioritized, ...others];
}
