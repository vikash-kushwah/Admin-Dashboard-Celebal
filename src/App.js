import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/theme';
import { NotificationsProvider } from './contexts/notifications';
import { SettingsProvider } from './contexts/settings';
import { AppHeader } from './components/layout/app-header';
import { AppSidebar } from './components/layout/app-sidebar';
import AppRoutes from './routes/index';
import Breadcrumbs from './components/Breadcrumbs';
import { ToastContainer } from './components/ui/toast';
import { sampleNotifications } from './data/sample-notifications';
import { useNotifications } from './contexts/notifications';

function AppContent() {
  const { addNotification } = useNotifications();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize sample notifications
  useEffect(() => {
    sampleNotifications.forEach((notification) => {
      addNotification({
        ...notification,
        duration: notification.type === 'error' ? 10000 : 5000,
      });
    });
  }, [addNotification]);

  return (
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
            <div className="mb-4">
              <Breadcrumbs />
            </div>
            <AppRoutes />
          </div>
        </main>
      </div>

      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <NotificationsProvider>
          <AppContent />
        </NotificationsProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}

export default App;
