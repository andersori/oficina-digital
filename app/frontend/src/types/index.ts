/**
 * Types for Oficina Digital Dashboard
 * Context: Type definitions for appointments, filters, and user data
 * @see .ai/context.md
 */

export type AppointmentStatus = 
  | 'agendado'      // Scheduled
  | 'em_andamento'  // In progress
  | 'concluido'     // Completed
  | 'cancelado';    // Cancelled

export interface Appointment {
  id: string;
  serviceName: string;
  customerName: string;
  vehiclePlate: string;
  vehicleModel: string;
  scheduledDate: Date;
  duration: number; // in minutes
  status: AppointmentStatus;
  branchId: string;
  notes?: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
}

export interface ShopOwner {
  id: string;
  name: string;
  shopName: string;
  branches: Branch[];
}

export interface Filters {
  status: AppointmentStatus[];
  branchIds: string[];
  serviceNames: string[];
}

export type ViewMode = 'week' | 'day';
