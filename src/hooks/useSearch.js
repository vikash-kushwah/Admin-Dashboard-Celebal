import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  // Debounce search
  const debouncedSearch = useCallback(
    (searchQuery) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsPending(true);
      // Simulate API call with timeout
      setTimeout(() => {
        // This is where you would typically make an API call
        // For now, we'll just filter some mock data
        const mockResults = [
          { id: 1, title: 'Dashboard', path: '/dashboard', type: 'page' },
          { id: 2, title: 'Users', path: '/users', type: 'page' },
          { id: 3, title: 'Settings', path: '/settings', type: 'page' },
          { id: 4, title: 'Analytics', path: '/analytics', type: 'page' },
        ].filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        setResults(mockResults);
        setIsPending(false);
      }, 300);
    },
    []
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
          searchInput.focus();
        }
      }
      // Escape to clear search
      if (e.key === 'Escape') {
        setQuery('');
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
          searchInput.blur();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (value) => {
    setQuery(value);
  };

  const handleResultClick = (result) => {
    navigate(result.path);
    setQuery('');
  };

  return {
    query,
    results,
    isPending,
    handleSearch,
    handleResultClick,
  };
}
