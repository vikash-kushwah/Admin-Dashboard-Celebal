import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
      <Link
        to="/"
        className="flex items-center hover:text-gray-700 dark:hover:text-gray-300"
      >
        <Home className="h-4 w-4" />
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={to}>
            <ChevronRight className="h-4 w-4" />
            <Link
              to={to}
              className={`${
                isLast
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs; 