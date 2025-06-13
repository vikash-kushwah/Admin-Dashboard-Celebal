import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'admin-dashboard-settings';

const defaultSettings = {
  theme: 'light',
  notifications: {
    enabled: true,
    sound: true,
    desktop: true,
    email: false,
  },
  display: {
    density: 'comfortable', // compact, comfortable, spacious
    fontSize: 'medium', // small, medium, large
    showBreadcrumbs: true,
    showNotifications: true,
  },
  privacy: {
    activityTracking: true,
    dataCollection: true,
    analytics: true,
  },
  language: 'en',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

const SettingsContext = createContext({
  settings: defaultSettings,
  updateSettings: () => {},
  resetSettings: () => {},
});

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings) => {
    setSettings((prev) => ({
      ...prev,
      ...newSettings,
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
}; 