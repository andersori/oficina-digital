/**
 * Component: DayView
 * Context: Daily timeline view with appointment cards
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 timeline with appointment cards
 * @see .github/copilot-instructions.md
 */

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  useTheme,
  Stack,
} from '@mui/material';
import {
  DirectionsCar,
  Build,
  Schedule,
  Person,
} from '@mui/icons-material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useAppContext } from '../../contexts/AppContext';
import type { Appointment, AppointmentStatus } from '../../types';

export const DayView: React.FC = () => {
  const { appointments, selectedDate, filters } = useAppContext();
  const theme = useTheme();

  const dayStr = format(selectedDate, 'yyyy-MM-dd');
  const workingHours = Array.from({ length: 11 }, (_, i) => 8 + i); // 08:00 to 18:00

  const filterAppointments = (apps: Appointment[]) => {
    return apps.filter((app) => {
      if (filters.branch !== 'todos' && app.branch !== filters.branch) return false;
      if (filters.service !== 'todos' && app.service !== filters.service) return false;
      if (filters.status !== 'todos' && app.status !== filters.status) return false;
      return true;
    });
  };

  const dayAppointments = filterAppointments(
    appointments.filter((app) => app.date === dayStr)
  );

  const getStatusColor = (status: AppointmentStatus) => {
    switch (status) {
      case 'agendado':
        return theme.palette.warning.main;
      case 'em-andamento':
        return theme.palette.primary.main;
      case 'atrasado':
        return theme.palette.error.main;
      case 'concluido':
        return theme.palette.success.main;
      case 'cancelado':
        return theme.palette.error.dark;
      default:
        return theme.palette.grey[500];
    }
  };

  const getStatusLabel = (status: AppointmentStatus) => {
    const labels: Record<AppointmentStatus, string> = {
      'agendado': 'Agendado',
      'em-andamento': 'Em Andamento',
      'atrasado': 'Atrasado',
      'concluido': 'Concluído',
      'cancelado': 'Cancelado',
    };
    return labels[status];
  };

  const getAppointmentForHour = (hour: number): Appointment | null => {
    const timeStr = `${hour.toString().padStart(2, '0')}:00`;
    return dayAppointments.find((app) => app.time === timeStr) || null;
  };

  const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => (
    <Card
      sx={{
        borderLeft: `4px solid ${getStatusColor(appointment.status)}`,
        transition: 'all 0.2s',
        '&:hover': {
          transform: 'translateX(4px)',
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Schedule sx={{ color: 'text.secondary', fontSize: 20 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {appointment.time}
            </Typography>
          </Box>
          <Chip
            label={getStatusLabel(appointment.status)}
            size="small"
            sx={{
              bgcolor: getStatusColor(appointment.status),
              color: 'white',
              fontWeight: 600,
              minHeight: 28,
            }}
          />
        </Box>

        <Stack spacing={1.5}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Person sx={{ color: 'text.secondary', fontSize: 20 }} />
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {appointment.client}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DirectionsCar sx={{ color: 'text.secondary', fontSize: 20 }} />
            <Typography variant="body2" color="text.secondary">
              {appointment.vehicle}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Build sx={{ color: 'text.secondary', fontSize: 20 }} />
            <Typography variant="body2" color="text.secondary">
              {appointment.service}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Duração: {appointment.duration} min
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Filial: {appointment.branch}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );

  const EmptySlot: React.FC<{ hour: number }> = ({ hour }) => (
    <Card
      variant="outlined"
      sx={{
        borderStyle: 'dashed',
        bgcolor: 'action.hover',
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
          bgcolor: 'action.selected',
          borderColor: 'primary.main',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.6 }}>
          <Schedule sx={{ fontSize: 20 }} />
          <Typography variant="body1">
            {hour.toString().padStart(2, '0')}:00 - Horário disponível
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        {format(selectedDate, "EEEE, d 'de' MMMM", { locale: ptBR })}
      </Typography>

      <Stack spacing={2}>
        {workingHours.map((hour) => {
          const appointment = getAppointmentForHour(hour);
          return (
            <Box key={hour}>
              {appointment ? (
                <AppointmentCard appointment={appointment} />
              ) : (
                <EmptySlot hour={hour} />
              )}
            </Box>
          );
        })}
      </Stack>

      {dayAppointments.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: `1px dashed ${theme.palette.divider}`,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Nenhum agendamento para este dia
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Todos os horários estão disponíveis
          </Typography>
        </Box>
      )}
    </Box>
  );
};
