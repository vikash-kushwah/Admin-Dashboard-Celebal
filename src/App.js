import React, { useState } from 'react';
import { ThemeProvider } from './contexts/theme';
import { NotificationsProvider } from './contexts/notifications';
import { AppHeader } from './components/layout/app-header';
import { AppSidebar } from './components/layout/app-sidebar';
import AppRoutes from './routes/index';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <NotificationsProvider>
        <div className="relative min-h-screen bg-background font-sans antialiased">
          <AppHeader isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          
          <div className="flex">
            <AppSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            
            {/* Mobile sidebar backdrop */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
            
            <main className="flex-1 min-h-[calc(100vh-3.5rem)]">
              <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
                <AppRoutes />
              </div>
            </main>
          </div>
        </div>
      </NotificationsProvider>
    </ThemeProvider>
  );
}

export default App;
