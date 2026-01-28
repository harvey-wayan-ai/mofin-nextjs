import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  className?: string;
  id?: string;
}

export const Section = ({
  title,
  children,
  background = 'white',
  className = '',
  id
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white text-gray-800',
    gray: 'bg-gray-100 text-gray-800',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
  };

  return (
    <section 
      id={id}
      className={`py-16 px-4 ${bgClasses[background]} ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <h2 
        id={id ? `${id}-title` : undefined}
        className="text-3xl font-bold text-center mb-12"
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
