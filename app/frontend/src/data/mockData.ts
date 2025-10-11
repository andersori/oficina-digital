/**
 * Mock Data for Oficina Digital Dashboard
 * Context: Realistic test data for appointment management
 * Users: Mechanics (low-tech familiarity)
 * @see .github/copilot-instructions.md
 */

import type { Owner, Appointment } from '../types';

export const mockOwner: Owner = {
  name: "João Silva",
  role: "Proprietário",
  avatar: "/avatar.jpg",
  shop: "Oficina João - Centro"
};

export const mockAppointments: Appointment[] = [
  {
    id: 1,
    time: "08:00",
    client: "Maria Santos",
    vehicle: "Honda Civic - ABC-1234",
    service: "Troca de óleo",
    status: "agendado",
    branch: "Centro",
    duration: 30,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 2,
    time: "08:30",
    client: "Pedro Oliveira",
    vehicle: "Toyota Corolla - DEF-5678",
    service: "Revisão completa",
    status: "em-andamento",
    branch: "Centro",
    duration: 120,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 3,
    time: "09:00",
    client: "Ana Costa",
    vehicle: "Volkswagen Gol - GHI-9012",
    service: "Alinhamento e balanceamento",
    status: "agendado",
    branch: "Centro",
    duration: 60,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 4,
    time: "10:30",
    client: "Carlos Mendes",
    vehicle: "Fiat Uno - JKL-3456",
    service: "Troca de pastilhas de freio",
    status: "atrasado",
    branch: "Centro",
    duration: 90,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 5,
    time: "11:00",
    client: "Juliana Ferreira",
    vehicle: "Chevrolet Onix - MNO-7890",
    service: "Troca de óleo",
    status: "agendado",
    branch: "Zona Sul",
    duration: 30,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 6,
    time: "13:00",
    client: "Roberto Lima",
    vehicle: "Hyundai HB20 - PQR-2345",
    service: "Diagnóstico elétrico",
    status: "em-andamento",
    branch: "Centro",
    duration: 60,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 7,
    time: "14:00",
    client: "Fernanda Souza",
    vehicle: "Renault Sandero - STU-6789",
    service: "Troca de bateria",
    status: "concluido",
    branch: "Centro",
    duration: 30,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 8,
    time: "15:00",
    client: "Lucas Almeida",
    vehicle: "Ford Ka - VWX-0123",
    service: "Troca de pneus",
    status: "agendado",
    branch: "Zona Sul",
    duration: 45,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 9,
    time: "16:00",
    client: "Beatriz Rocha",
    vehicle: "Nissan March - YZA-4567",
    service: "Revisão de suspensão",
    status: "agendado",
    branch: "Centro",
    duration: 90,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 10,
    time: "08:00",
    client: "Marcos Paulo",
    vehicle: "Peugeot 208 - BCD-8901",
    service: "Troca de óleo",
    status: "agendado",
    branch: "Centro",
    duration: 30,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0] // Tomorrow
  },
  {
    id: 11,
    time: "09:30",
    client: "Patricia Dias",
    vehicle: "Jeep Renegade - EFG-2345",
    service: "Troca de filtro de ar",
    status: "agendado",
    branch: "Zona Sul",
    duration: 20,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0]
  },
  {
    id: 12,
    time: "10:00",
    client: "Ricardo Santos",
    vehicle: "Mitsubishi Lancer - HIJ-6789",
    service: "Revisão de freios",
    status: "agendado",
    branch: "Centro",
    duration: 60,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0]
  },
  {
    id: 13,
    time: "13:00",
    client: "Gabriela Martins",
    vehicle: "Citroën C3 - KLM-0123",
    service: "Troca de correia dentada",
    status: "agendado",
    branch: "Centro",
    duration: 120,
    date: new Date(Date.now() + 172800000).toISOString().split('T')[0] // Day after tomorrow
  },
  {
    id: 14,
    time: "14:30",
    client: "Thiago Barbosa",
    vehicle: "Honda Fit - NOP-4567",
    service: "Limpeza de bicos injetores",
    status: "agendado",
    branch: "Zona Sul",
    duration: 90,
    date: new Date(Date.now() + 172800000).toISOString().split('T')[0]
  },
  {
    id: 15,
    time: "16:00",
    client: "Camila Ribeiro",
    vehicle: "Volkswagen Fox - QRS-8901",
    service: "Troca de velas",
    status: "agendado",
    branch: "Centro",
    duration: 45,
    date: new Date(Date.now() + 259200000).toISOString().split('T')[0] // 3 days from now
  },
  {
    id: 16,
    time: "09:00",
    client: "Eduardo Nunes",
    vehicle: "Fiat Argo - TUV-2345",
    service: "Troca de amortecedores",
    status: "agendado",
    branch: "Centro",
    duration: 120,
    date: new Date(Date.now() + 345600000).toISOString().split('T')[0] // 4 days from now
  },
  {
    id: 17,
    time: "11:00",
    client: "Vanessa Lopes",
    vehicle: "Chevrolet Prisma - WXY-6789",
    service: "Regulagem de motor",
    status: "agendado",
    branch: "Zona Sul",
    duration: 60,
    date: new Date(Date.now() + 432000000).toISOString().split('T')[0] // 5 days from now
  },
  {
    id: 18,
    time: "14:00",
    client: "Rafael Cardoso",
    vehicle: "Toyota Etios - ZAB-0123",
    service: "Troca de filtro de combustível",
    status: "agendado",
    branch: "Centro",
    duration: 30,
    date: new Date(Date.now() + 518400000).toISOString().split('T')[0] // 6 days from now
  },
  {
    id: 19,
    time: "15:30",
    client: "Larissa Gomes",
    vehicle: "Renault Kwid - CDE-4567",
    service: "Revisão de 10.000 km",
    status: "agendado",
    branch: "Centro",
    duration: 90,
    date: new Date(Date.now() + 518400000).toISOString().split('T')[0]
  },
  {
    id: 20,
    time: "10:00",
    client: "Bruno Vieira",
    vehicle: "Hyundai Creta - FGH-8901",
    service: "Troca de óleo e filtros",
    status: "agendado",
    branch: "Zona Sul",
    duration: 45,
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0] // Yesterday
  }
];
