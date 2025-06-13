import React from 'react';
import { Bell, Check, X, AlertCircle, Info } from 'lucide-react';
import { useNotifications } from '../../contexts/notifications';
import { formatDistanceToNow } from 'date-fns';

const NotificationIcon = ({ type }) => {
  switch (type) {
    case 'success':
      return <Check className="h-5 w-5 text-green-500" />;
    case 'error':
      return <X className="h-5 w-5 text-red-500" />;
    case 'warning':
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    default:
      return <Info className="h-5 w-5 text-blue-500" />;
  }
};

export function NotificationCenter() {
  const { notifications, removeNotification, clearNotifications } = useNotifications();

  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center">
        <Bell className="mx-auto h-8 w-8 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">No notifications</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <h3 className="font-semibold">Notifications</h3>
        <button
          onClick={clearNotifications}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Clear all
        </button>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start gap-3 border-b p-4 last:border-0 hover:bg-accent/50"
          >
            <NotificationIcon type={notification.type} />
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium">{notification.title}</p>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="ml-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">{notification.message}</p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
