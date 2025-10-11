/**
 * Type Definitions for Oficina Digital Dashboard
 * Context: Type safety for appointment management system
 * Users: Mechanics (low-tech familiarity)
 * @see .github/copilot-instructions.md
 */

export type AppointmentStatus = 'agendado' | 'em-andamento' | 'atrasado' | 'concluido' | 'cancelado';

export interface Appointment {
  id: number;
  time: string;
  client: string;
  vehicle: string;
  service: string;
  status: AppointmentStatus;
  branch: string;
  duration: number; // in minutes
  date: string; // ISO date string
}

export interface Owner {
  name: string;
  role: string;
  avatar: string;
  shop: string;
}

export interface FilterState {
  selectedDate: Date;
  branch: string;
  service: string;
  status: AppointmentStatus | 'todos';
}

export type ViewMode = 'week' | 'day';

export interface DashboardContextType {
  appointments: Appointment[];
  owner: Owner;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  filters: FilterState;
  setFilters: (filters: Partial<FilterState>) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}
