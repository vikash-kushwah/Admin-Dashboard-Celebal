import { startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';

export function getMonthDays(date) {
  return eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });
}

export function getEventsForDay(events, date) {
  return events.filter(event => isSameDay(new Date(event.start), date));
}

export function sortEventsByTime(events) {
  return [...events].sort((a, b) => new Date(a.start) - new Date(b.start));
}

export function validateEventDates(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return startDate < endDate;
}

export function getEventDuration(start, end) {
  return (new Date(end) - new Date(start)) / (1000 * 60); // duration in minutes
}

export function getEventType(event) {
  const duration = getEventDuration(event.start, event.end);
  if (duration === 0) return 'deadline';
  if (duration <= 60) return 'quick';
  if (duration <= 180) return 'standard';
  return 'long';
}