import React, { useState, useRef, useEffect } from 'react';
import { Bell, Check, X } from 'lucide-react';
import { notifications } from '../../data/dummy-data';
import { Badge } from './badge';
import { formatTimeAgo } from '../../lib/notification-utils';

export const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(notifications);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = unreadNotifications.filter(n => !n.read).length;

  const handleNotificationClick = (id) => {
    setUnreadNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllRead = () => {
    setUnreadNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleDismiss = (id) => {
    setUnreadNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="relative rounded-full p-2 hover:bg-accent"
        aria-label="Notifications"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
          >
            {unreadCount}
          </Badge>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-96 rounded-lg border bg-card p-4 text-card-foreground shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Notifications</h3>
            {unreadCount > 0 && (
              <button
                className="text-xs text-muted-foreground hover:text-foreground"
                onClick={handleMarkAllRead}
              >
                Mark all as read
              </button>
            )}
          </div>
          <div className="space-y-1 max-h-[400px] overflow-auto">
            {unreadNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${!notification.read ? 'notification-unread' : ''}`}
                onClick={() => handleNotificationClick(notification.id)}
              >
                <div className="notification-icon">
                  {React.createElement(notification.icon || Bell, {
                    className: 'h-4 w-4 text-primary',
                  })}
                </div>
                <div className="notification-content">
                  <p className="notification-title">{notification.title}</p>
                  <p className="notification-message">{notification.message}</p>
                  <p className="notification-time">
                    {formatTimeAgo(new Date(notification.timestamp))}
                  </p>
                  <div className="notification-actions">
                    <button 
                      className="notification-action-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNotificationClick(notification.id);
                      }}
                    >
                      <Check className="h-3 w-3 mr-1 inline" />
                      Mark as read
                    </button>
                    <button 
                      className="notification-action-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDismiss(notification.id);
                      }}
                    >
                      <X className="h-3 w-3 mr-1 inline" />
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {unreadNotifications.length === 0 && (
              <p className="text-center text-sm text-muted-foreground py-4">
                No notifications
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
