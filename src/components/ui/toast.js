import React, { useEffect, useState } from 'react';
import { X, Check, AlertCircle, Info } from 'lucide-react';
import { useNotifications } from '../../contexts/notifications';

const ToastIcon = ({ type }) => {
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

export function Toast({ id, title, message, type = 'info', duration = 5000 }) {
  const { removeNotification } = useNotifications();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => removeNotification(id), 300); // Wait for exit animation
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, removeNotification]);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex items-start gap-3 rounded-lg border bg-background p-4 shadow-lg transition-all duration-300 ${
        isExiting ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
      }`}
    >
      <ToastIcon type={type} />
      <div className="flex-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(() => removeNotification(id), 300);
        }}
        className="ml-4 text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ToastContainer() {
  const { notifications } = useNotifications();
  const toasts = notifications.filter((n) => n.isToast);

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-4">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
} 