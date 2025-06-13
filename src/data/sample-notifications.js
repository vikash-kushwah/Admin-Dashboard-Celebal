export const sampleNotifications = [
  {
    id: '1',
    title: 'Welcome to Admin Dashboard',
    message: 'Get started by exploring the features and customizing your dashboard.',
    type: 'info',
    createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    read: false,
  },
  {
    id: '2',
    title: 'New User Registration',
    message: 'John Doe has registered as a new user.',
    type: 'success',
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false,
  },
  {
    id: '3',
    title: 'System Update',
    message: 'Scheduled maintenance will occur tonight at 2 AM.',
    type: 'warning',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: true,
  },
  {
    id: '4',
    title: 'Error Report',
    message: 'Failed to sync user data. Please check the logs.',
    type: 'error',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    read: false,
  },
  {
    id: '5',
    title: 'New Feature Available',
    message: 'Check out the new analytics dashboard with advanced metrics.',
    type: 'info',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
  }
]; 