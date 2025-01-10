import React from 'react';

interface PageHeaderProps {
  heading: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  heading,
  text,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
      {text && <p className="text-muted-foreground">{text}</p>}
      {children}
    </div>
  );
}

