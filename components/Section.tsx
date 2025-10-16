import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Section({ title, icon, children }: SectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        {icon && <div className="text-blue-600">{icon}</div>}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ml-4"></div>
      </div>
      {children}
    </section>
  );
}
