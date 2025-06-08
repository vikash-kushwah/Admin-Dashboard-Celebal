import React, { useState } from 'react';
import { Menu, Sun, Moon, Bell, Search } from 'lucide-react';
import { useTheme } from '../../contexts/theme';
import { useNotifications } from '../../contexts/notifications';
import { Button } from '../ui/button';
import { useSearch } from '../../hooks/useSearch';
import { SearchResults } from '../ui/search-results';
import { NotificationCenter } from '../ui/notification-center';

export function AppHeader({ isOpen, setIsOpen }) {
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { notifications } = useNotifications();
  const { 
    query, 
    results, 
    isPending, 
    handleSearch, 
    handleResultClick 
  } = useSearch();

  const handleClickOutside = () => {
    setIsNotificationsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="text-lg font-semibold">Admin Dashboard</span>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <form 
            className={`relative flex items-center w-full md:w-auto ${isSearchOpen ? 'flex' : 'hidden md:flex'}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative w-full md:w-64 lg:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="h-9 w-full rounded-md border bg-background pl-9 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              {query && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover shadow-md">
                  <SearchResults 
                    results={results} 
                    isLoading={isPending} 
                    onResultClick={handleResultClick} 
                  />
                </div>
              )}
            </div>
          </form>

          <nav className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Toggle search</span>
            </Button>
            
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {notifications.length}
                  </span>
                )}
                <span className="sr-only">Notifications</span>
              </Button>
              {isNotificationsOpen && (
                <>
                  <div className="fixed inset-0 z-50" onClick={handleClickOutside} />
                  <div className="absolute right-0 top-full z-50 mt-1 w-80 rounded-md border bg-popover p-4 shadow-md">
                    <NotificationCenter />
                  </div>
                </>
              )}
            </div>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}