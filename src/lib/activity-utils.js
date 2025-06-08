import { formatDistanceToNow } from 'date-fns';

/**
 * Utility functions for handling dashboard activity items
 */

/**
 * Generates a unique ID for a new activity item
 * @returns {number} A unique ID based on timestamp
 */
export function generateActivityId() {
  return Date.now();
}

/**
 * Formats a date for display in the activity feed
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string (Today, Yesterday, or MM/DD/YYYY)
 */
export function formatActivityDate(date) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const activityDate = new Date(date);
  const activityDay = new Date(activityDate.getFullYear(), activityDate.getMonth(), activityDate.getDate());
  
  if (activityDay.getTime() === today.getTime()) {
    return activityDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  } else if (activityDay.getTime() === yesterday.getTime()) {
    return 'Yesterday';
  } else {
    return activityDate.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' });
  }
}

/**
 * Creates a new activity item with the given description
 * @param {string} description - The activity description
 * @returns {Object} A new activity item object
 */
export function createActivity(description) {
  const now = new Date();
  return {
    id: generateActivityId(),
    time: formatActivityDate(now),
    timestamp: now.getTime(),
    description,
    read: false
  };
}

/**
 * Sorts activities by timestamp (newest first)
 * @param {Array} activities - Array of activity items
 * @returns {Array} Sorted array of activity items
 */
export function sortActivitiesByTime(activities) {
  return [...activities].sort((a, b) => {
    // If we have timestamp property, use it
    if (a.timestamp && b.timestamp) {
      return b.timestamp - a.timestamp;
    }
    // Otherwise try to compare based on the time string
    return a.time === b.time ? 0 : a.time === 'Yesterday' ? 1 : -1;
  });
}

/**
 * Formats a timestamp to a time-ago string (e.g., "3 minutes ago")
 * @param {number} timestamp - The timestamp to format
 * @returns {string} Formatted time-ago string
 */
export function formatTimeAgo(timestamp) {
  try {
    const date = new Date(timestamp);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    console.error('Error formatting time:', error);
    return 'Invalid date';
  }
}