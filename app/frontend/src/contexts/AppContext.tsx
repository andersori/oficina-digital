/**
 * Context: Application state management for Dashboard
 * Purpose: Centralized state for appointments, filters, and theme
 * Users: Mechanics (low-tech familiarity)
 * @see .github/copilot-instructions.md
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { DashboardContextType, ViewMode, FilterState, Appointment, Owner } from '../types';
import { mockAppointments, mockOwner } from '../data/mockData';

const AppContext = createContext<DashboardContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appointments] = useState<Appointment[]>(mockAppointments);
  const [owner] = useState<Owner>(mockOwner);
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [filters, setFiltersState] = useState<FilterState>({
    selectedDate: new Date(),
    branch: 'todos',
    service: 'todos',
    status: 'todos',
  });

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const setFilters = (newFilters: Partial<FilterState>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  };

  const value: DashboardContextType = {
    appointments,
    owner,
    viewMode,
    setViewMode,
    selectedDate,
    setSelectedDate,
    filters,
    setFilters,
    darkMode,
    toggleDarkMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
