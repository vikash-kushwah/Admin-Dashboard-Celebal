import React from 'react';
import { Command } from 'lucide-react';

export function SearchResults({ results, isLoading, onResultClick }) {
  if (results.length === 0 && !isLoading) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-2 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md">
      <div className="p-2">
        {isLoading ? (
          <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
            Searching...
          </div>
        ) : results.length === 0 ? (
          <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
            No results found
          </div>
        ) : (
          <div className="space-y-1">
            {results.map((result, index) => (
              <button
                key={index}
                className="flex w-full items-center gap-2 rounded-sm px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                onClick={() => onResultClick(result)}
              >
                <Command className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="font-medium">{result.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {result.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
