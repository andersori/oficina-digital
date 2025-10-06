/**
 * Mock data for Oficina Digital Dashboard
 * Context: Sample appointments and user data for testing
 * @see .ai/context.md
 */

import type { Appointment, ShopOwner, Branch } from '../types';

// Mock branches
export const mockBranches: Branch[] = [
  {
    id: 'branch-1',
    name: 'Filial Centro',
    address: 'Rua Principal, 123 - Centro'
  },
  {
    id: 'branch-2',
    name: 'Filial Zona Sul',
    address: 'Av. das Américas, 456 - Zona Sul'
  }
];

// Mock shop owner (logged in user)
export const mockShopOwner: ShopOwner = {
  id: 'owner-1',
  name: 'João Silva',
  shopName: 'Oficina Digital Demo',
  branches: mockBranches
};

// Helper to generate dates
const getDate = (daysOffset: number, hour: number, minute: number = 0): Date => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  date.setHours(hour, minute, 0, 0);
  return date;
};

// Mock appointments
export const mockAppointments: Appointment[] = [
  // Today
  {
    id: 'apt-1',
    serviceName: 'Troca de Óleo',
    customerName: 'Maria Santos',
    vehiclePlate: 'ABC-1234',
    vehicleModel: 'Fiat Uno 2015',
    scheduledDate: getDate(0, 9, 0),
    duration: 60,
    status: 'concluido',
    branchId: 'branch-1',
    notes: 'Cliente preferencial'
  },
  {
    id: 'apt-2',
    serviceName: 'Alinhamento e Balanceamento',
    customerName: 'Pedro Costa',
    vehiclePlate: 'DEF-5678',
    vehicleModel: 'VW Gol 2018',
    scheduledDate: getDate(0, 10, 30),
    duration: 90,
    status: 'em_andamento',
    branchId: 'branch-1'
  },
  {
    id: 'apt-3',
    serviceName: 'Revisão Completa',
    customerName: 'Ana Paula',
    vehiclePlate: 'GHI-9012',
    vehicleModel: 'Honda Civic 2020',
    scheduledDate: getDate(0, 14, 0),
    duration: 120,
    status: 'agendado',
    branchId: 'branch-2'
  },
  
  // Tomorrow
  {
    id: 'apt-4',
    serviceName: 'Troca de Pastilhas de Freio',
    customerName: 'Carlos Oliveira',
    vehiclePlate: 'JKL-3456',
    vehicleModel: 'Toyota Corolla 2019',
    scheduledDate: getDate(1, 8, 0),
    duration: 90,
    status: 'agendado',
    branchId: 'branch-1'
  },
  {
    id: 'apt-5',
    serviceName: 'Diagnóstico Eletrônico',
    customerName: 'Fernanda Lima',
    vehiclePlate: 'MNO-7890',
    vehicleModel: 'Chevrolet Onix 2021',
    scheduledDate: getDate(1, 11, 0),
    duration: 60,
    status: 'agendado',
    branchId: 'branch-1'
  },
  {
    id: 'apt-6',
    serviceName: 'Troca de Óleo',
    customerName: 'Ricardo Mendes',
    vehiclePlate: 'PQR-1357',
    vehicleModel: 'Renault Sandero 2017',
    scheduledDate: getDate(1, 15, 30),
    duration: 60,
    status: 'agendado',
    branchId: 'branch-2'
  },
  
  // Day after tomorrow
  {
    id: 'apt-7',
    serviceName: 'Revisão de Suspensão',
    customerName: 'Juliana Rocha',
    vehiclePlate: 'STU-2468',
    vehicleModel: 'Ford Ka 2016',
    scheduledDate: getDate(2, 9, 30),
    duration: 120,
    status: 'agendado',
    branchId: 'branch-1'
  },
  {
    id: 'apt-8',
    serviceName: 'Troca de Bateria',
    customerName: 'Roberto Silva',
    vehiclePlate: 'VWX-3690',
    vehicleModel: 'Nissan March 2018',
    scheduledDate: getDate(2, 13, 0),
    duration: 45,
    status: 'agendado',
    branchId: 'branch-2'
  },
  
  // Next week
  {
    id: 'apt-9',
    serviceName: 'Alinhamento e Balanceamento',
    customerName: 'Marcos Antonio',
    vehiclePlate: 'YZA-4812',
    vehicleModel: 'Hyundai HB20 2020',
    scheduledDate: getDate(4, 10, 0),
    duration: 90,
    status: 'agendado',
    branchId: 'branch-1'
  },
  {
    id: 'apt-10',
    serviceName: 'Troca de Correia Dentada',
    customerName: 'Luciana Ferreira',
    vehiclePlate: 'BCD-5936',
    vehicleModel: 'Fiat Palio 2014',
    scheduledDate: getDate(5, 8, 30),
    duration: 150,
    status: 'agendado',
    branchId: 'branch-2'
  },
  {
    id: 'apt-11',
    serviceName: 'Revisão Completa',
    customerName: 'Thiago Alves',
    vehiclePlate: 'EFG-7159',
    vehicleModel: 'Volkswagen Fox 2019',
    scheduledDate: getDate(6, 14, 30),
    duration: 120,
    status: 'agendado',
    branchId: 'branch-1'
  },
  
  // Yesterday (completed)
  {
    id: 'apt-12',
    serviceName: 'Troca de Óleo',
    customerName: 'Patricia Souza',
    vehiclePlate: 'HIJ-8274',
    vehicleModel: 'Chevrolet Prisma 2017',
    scheduledDate: getDate(-1, 10, 0),
    duration: 60,
    status: 'concluido',
    branchId: 'branch-1'
  },
  {
    id: 'apt-13',
    serviceName: 'Troca de Pneus',
    customerName: 'Gabriel Martins',
    vehiclePlate: 'KLM-9386',
    vehicleModel: 'Jeep Renegade 2020',
    scheduledDate: getDate(-1, 15, 0),
    duration: 90,
    status: 'concluido',
    branchId: 'branch-2'
  },
  
  // Cancelled appointment
  {
    id: 'apt-14',
    serviceName: 'Diagnóstico Eletrônico',
    customerName: 'Amanda Costa',
    vehiclePlate: 'NOP-1593',
    vehicleModel: 'Mitsubishi Lancer 2016',
    scheduledDate: getDate(3, 11, 0),
    duration: 60,
    status: 'cancelado',
    branchId: 'branch-1',
    notes: 'Cliente cancelou por motivos pessoais'
  }
];

// Get unique service names for filter
export const getUniqueServiceNames = (): string[] => {
  const services = new Set(mockAppointments.map(apt => apt.serviceName));
  return Array.from(services).sort();
};
