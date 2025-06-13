import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'admin-dashboard-notifications';

const NotificationsContext = createContext({
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
  clearNotifications: () => {},
  markAsRead: () => {},
  markAllAsRead: () => {},
  getUnreadCount: () => 0,
});

export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = useState(() => {
    // Load notifications from localStorage on init
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
  }, [notifications]);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const markAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  }, []);

  const getUnreadCount = useCallback(() => {
    return notifications.filter((notification) => !notification.read).length;
  }, [notifications]);

  const addNotification = useCallback((notification) => {
    const id = uuidv4();
    const newNotification = {
      id,
      createdAt: new Date(),
      read: false,
      type: notification.type || 'info',
      ...notification,
    };

    setNotifications((prev) => [newNotification, ...prev]);

    // Auto dismiss after duration (if specified)
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration);
    }

    // Auto mark as read after a delay (if specified)
    if (notification.autoReadAfter) {
      setTimeout(() => {
        markAsRead(id);
      }, notification.autoReadAfter);
    }

    return id;
  }, [removeNotification, markAsRead]);

  // Group notifications by date
  const groupedNotifications = notifications.reduce((groups, notification) => {
    const date = new Date(notification.createdAt).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(notification);
    return groups;
  }, {});

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        groupedNotifications,
        addNotification,
        removeNotification,
        clearNotifications,
        markAsRead,
        markAllAsRead,
        getUnreadCount,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationsProvider');
  }
  return context;
};
