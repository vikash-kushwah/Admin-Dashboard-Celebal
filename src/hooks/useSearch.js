import { useState, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    // Start transition for search to avoid UI blocking
    startTransition(() => {
      // Mock search results - replace with actual search logic
      const searchResults = [
        {
          type: 'page',
          title: 'Dashboard',
          path: '/',
          description: 'Main dashboard overview'
        },
        {
          type: 'page',
          title: 'Calendar',
          path: '/calendar',
          description: 'View and manage events'
        },
        {
          type: 'page',
          title: 'Kanban',
          path: '/kanban',
          description: 'Task management board'
        }
      ].filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(searchResults);
    });
  };

  const handleResultClick = (result) => {
    setQuery('');
    setResults([]);
    navigate(result.path);
  };

  return {
    query,
    results,
    isPending,
    handleSearch,
    handleResultClick
  };
}
