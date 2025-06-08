import { useState, useMemo } from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export function useCalendar(events = []) {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysInMonth = useMemo(() => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    return eachDayOfInterval({ start, end });
  }, [currentDate]);

  const eventsByDay = useMemo(() => {
    return events.reduce((acc, event) => {
      const date = new Date(event.start).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(event);
      return acc;
    }, {});
  }, [events]);

  return {
    currentDate,
    setCurrentDate,
    daysInMonth,
    eventsByDay,
  };
}