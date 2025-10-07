/**
 * Component: WeekView
 * Context: Weekly calendar view showing 7 days with appointment counts
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 Card grid with brand theming
 * @see .github/copilot-instructions.md
 */

import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useAppContext } from '../../contexts/AppContext';
import type { Appointment } from '../../types';

export const WeekView: React.FC = () => {
  const { appointments, selectedDate, setSelectedDate, setViewMode, filters } = useAppContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const weekStart = startOfWeek(selectedDate, { locale: ptBR });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const filterAppointments = (apps: Appointment[]) => {
    return apps.filter((app) => {
      if (filters.branch !== 'todos' && app.branch !== filters.branch) return false;
      if (filters.service !== 'todos' && app.service !== filters.service) return false;
      if (filters.status !== 'todos' && app.status !== filters.status) return false;
      return true;
    });
  };

  const getAppointmentsForDay = (day: Date) => {
    const dayStr = format(day, 'yyyy-MM-dd');
    const dayAppointments = appointments.filter((app) => app.date === dayStr);
    return filterAppointments(dayAppointments);
  };

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
    setViewMode('day');
  };

  const isToday = (day: Date) => isSameDay(day, new Date());

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <Grid container spacing={isMobile ? 1 : 2} sx={{ minWidth: isMobile ? 'auto' : 800 }}>
        {weekDays.map((day, index) => {
          const dayAppointments = getAppointmentsForDay(day);
          const appointmentCount = dayAppointments.length;
          const today = isToday(day);

          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                onClick={() => handleDayClick(day)}
                sx={{
                  cursor: 'pointer',
                  border: today ? `2px solid ${theme.palette.primary.main}` : 'none',
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="caption"
                      sx={{
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: today ? 'primary.main' : 'text.secondary',
                      }}
                    >
                      {format(day, 'EEE', { locale: ptBR })}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        my: 1,
                        color: today ? 'primary.main' : 'text.primary',
                      }}
                    >
                      {format(day, 'd')}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {format(day, 'MMM', { locale: ptBR })}
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      {appointmentCount > 0 ? (
                        <Chip
                          label={`${appointmentCount} agendamento${appointmentCount > 1 ? 's' : ''}`}
                          color="primary"
                          size="small"
                          sx={{ fontWeight: 600, minHeight: 32 }}
                        />
                      ) : (
                        <Chip
                          label="Sem agendamentos"
                          variant="outlined"
                          size="small"
                          sx={{ minHeight: 32 }}
                        />
                      )}
                    </Box>

                    {/* Status breakdown */}
                    {appointmentCount > 0 && (
                      <Box sx={{ mt: 2, display: 'flex', gap: 0.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {dayAppointments.filter((a) => a.status === 'agendado').length > 0 && (
                          <Chip
                            label={dayAppointments.filter((a) => a.status === 'agendado').length}
                            size="small"
                            sx={{
                              bgcolor: theme.palette.warning.light,
                              color: theme.palette.warning.contrastText,
                              minWidth: 24,
                              height: 20,
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                        {dayAppointments.filter((a) => a.status === 'em-andamento').length > 0 && (
                          <Chip
                            label={dayAppointments.filter((a) => a.status === 'em-andamento').length}
                            size="small"
                            sx={{
                              bgcolor: theme.palette.primary.light,
                              color: theme.palette.primary.contrastText,
                              minWidth: 24,
                              height: 20,
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                        {dayAppointments.filter((a) => a.status === 'atrasado').length > 0 && (
                          <Chip
                            label={dayAppointments.filter((a) => a.status === 'atrasado').length}
                            size="small"
                            sx={{
                              bgcolor: theme.palette.error.light,
                              color: theme.palette.error.contrastText,
                              minWidth: 24,
                              height: 20,
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
