import React from 'react';
import { Search, FileText, Users, Settings, BarChart2 } from 'lucide-react';

const iconMap = {
  page: FileText,
  users: Users,
  settings: Settings,
  analytics: BarChart2,
};

export function SearchResults({ results, isLoading, onResultClick }) {
  if (isLoading) {
    return (
      <div className="p-4 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center space-x-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span>Searching...</span>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-4 text-center text-sm text-muted-foreground">
        <Search className="mx-auto h-6 w-6 mb-2" />
        <p>No results found</p>
      </div>
    );
  }

  return (
    <div className="py-2">
      {results.map((result) => {
        const Icon = iconMap[result.type] || FileText;
        return (
          <button
            key={result.id}
            onClick={() => onResultClick(result)}
            className="w-full px-4 py-2 text-left hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
          >
            <div className="flex items-center space-x-3">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="font-medium">{result.title}</div>
                <div className="text-xs text-muted-foreground">
                  {result.path}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
