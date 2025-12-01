// src/components/AmScBreadcrumbs.js
import React from 'react';
import Link from '@docusaurus/Link';

/**
 * items: [
 *   { label: 'Home', to: '/' },
 *   { label: 'Events', to: '/events' },
 *   { label: 'AmSC 2025 Workshop' } // last item, no link
 * ]
 */
export default function AmScBreadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav
      className="usa-breadcrumb amsc-breadcrumbs"
      aria-label="Breadcrumb"
    >
      <ol className="usa-breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li className="usa-breadcrumb__list-item" key={index}>
              {isLast || !item.to ? (
                <span className="usa-breadcrumb__link usa-current">
                  {item.label}
                </span>
              ) : (
                <Link className="usa-breadcrumb__link" to={item.to}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
