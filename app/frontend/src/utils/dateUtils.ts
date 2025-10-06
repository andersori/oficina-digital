/**
 * Date utility functions for Oficina Digital Dashboard
 * Context: Helper functions for calendar and scheduling operations
 * @see .github/copilot-instructions.md
 */

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatWeekDay = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    weekday: 'short'
  });
};

export const formatWeekDayLong = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long'
  });
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const isToday = (date: Date): boolean => {
  return isSameDay(date, new Date());
};

export const getWeekStart = (date: Date): Date => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day; // Sunday as start
  return new Date(d.setDate(diff));
};

export const getWeekDates = (startDate: Date): Date[] => {
  const dates: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date);
  }
  return dates;
};

export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const addWeeks = (date: Date, weeks: number): Date => {
  return addDays(date, weeks * 7);
};

export const getMonthName = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    month: 'long'
  });
};
