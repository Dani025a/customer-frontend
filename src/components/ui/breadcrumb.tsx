import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex text-sm text-muted-foreground">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <span className="mx-2">&gt;</span>}
            <a
              href={item.href}
              className={index === items.length - 1 ? "font-medium text-foreground" : "hover:text-foreground"}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

