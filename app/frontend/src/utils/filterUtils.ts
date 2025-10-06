/**
 * Filter utility functions for Oficina Digital Dashboard
 * Context: Helper functions for filtering appointments
 * @see .ai/context.md
 */

import type { Appointment, Filters } from '../types';

export const applyFilters = (
  appointments: Appointment[],
  filters: Filters
): Appointment[] => {
  return appointments.filter((appointment) => {
    // Filter by status
    if (filters.status.length > 0 && !filters.status.includes(appointment.status)) {
      return false;
    }

    // Filter by branch
    if (filters.branchIds.length > 0 && !filters.branchIds.includes(appointment.branchId)) {
      return false;
    }

    // Filter by service name
    if (filters.serviceNames.length > 0 && !filters.serviceNames.includes(appointment.serviceName)) {
      return false;
    }

    return true;
  });
};

export const getStatusLabel = (status: string): string => {
  const labels: Record<string, string> = {
    agendado: 'Agendado',
    em_andamento: 'Em Andamento',
    concluido: 'Concluído',
    cancelado: 'Cancelado'
  };
  return labels[status] || status;
};

export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    agendado: 'var(--color-info)',
    em_andamento: 'var(--color-warning)',
    concluido: 'var(--color-success)',
    cancelado: 'var(--color-neutral-gray-medium)'
  };
  return colors[status] || 'var(--color-neutral-gray-medium)';
};
