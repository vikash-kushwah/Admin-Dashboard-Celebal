/**
 * Format a date relative to now (e.g., "2 hours ago")
 */
export function formatTimeAgo(date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  
  return `${Math.floor(months / 12)}y ago`;
}

/**
 * Format a date to a readable string
 */
export function formatDate(date, options = {}) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    ...options,
  });
}

/**
 * Group notifications by date
 */
export function groupNotificationsByDate(notifications) {
  return notifications.reduce((groups, notification) => {
    const date = new Date(notification.createdAt).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(notification);
    return groups;
  }, {});
}

/**
 * Filter notifications by type
 */
export function filterNotifications(notifications, type) {
  if (!type || type === 'all') return notifications;
  return notifications.filter(notification => notification.type === type);
}
