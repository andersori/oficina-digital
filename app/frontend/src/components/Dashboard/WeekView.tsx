/**
 * Component: WeekView
 * Context: Weekly calendar view showing 7 days with appointment counts
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 Card grid with brand theming
 * @see .github/copilot-instructions.md
 */

import React, { useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { format, startOfWeek, addDays, isSameDay, addMinutes } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useAppContext } from '../../contexts/AppContext';
import type { Appointment } from '../../types';

export const WeekView: React.FC = () => {
  const { appointments, selectedDate, setSelectedDate, setViewMode, filters } = useAppContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const weekStart = startOfWeek(selectedDate, { locale: ptBR });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  // Time slots: 30-minute slots from 08:00 to 17:30 (inclusive)
  const startHour = 8;
  const endHour = 18; // exclusive end hour
  const slotCount = (endHour - startHour) * 2; // 2 slots per hour
  const slots = Array.from({ length: slotCount }, (_, i) => {
    const minutes = i * 30;
    const date = addMinutes(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), startHour, 0), minutes);
    return date;
  });

  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const openDetails = (app: Appointment) => {
    setSelectedAppointment(app);
    setDetailsOpen(true);
  };

  const closeDetails = () => {
    setDetailsOpen(false);
    setSelectedAppointment(null);
  };

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
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Grid header: first column for time labels, then 7 day headers */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(7, 1fr)',
          alignItems: 'center',
          gap: 1,
          pb: 1,
          position: 'sticky',
          top: 0,
          zIndex: (theme) => (theme.zIndex.appBar || 1200) + 2,
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
          borderTopLeftRadius: (theme) => `${Number(theme.shape.borderRadius) * 1.5}px`,
          borderTopRightRadius: (theme) => `${Number(theme.shape.borderRadius) * 1.5}px`,
          overflow: 'hidden',
          boxShadow: (theme) => theme.shadows?.[1] || 'none',
        }}
      >
        <Box sx={{ position: 'sticky', left: 0, zIndex: (theme) => (theme.zIndex.appBar || 1200) + 1, backgroundColor: 'background.paper', borderRight: '1px solid', borderColor: 'divider', borderTopLeftRadius: (theme) => `${Number(theme.shape.borderRadius) * 1.5}px` }} />
        {weekDays.map((day, idx) => (
          <Box
            key={idx}
            sx={{
              textAlign: 'center',
              p: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleDayClick(day)}
            role="button"
            aria-label={`Ver dia ${format(day, "d 'de' MMMM", { locale: ptBR })}`}
          >
            <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 600, color: isToday(day) ? 'primary.main' : 'text.secondary' }}>
              {format(day, 'EEE', { locale: ptBR })}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {format(day, 'd')}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {format(day, 'MMM', { locale: ptBR })}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Grid body: time labels + cells for each day/slot */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(7, 1fr)',
          gap: 1,
          flex: 1,
          overflowY: 'auto',
        }}
      >
        {/* Time labels column (sticky) */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          pr: 1,
          position: 'sticky',
          left: 0,
          borderBottomLeftRadius: (theme) => `${Number(theme.shape.borderRadius) * 1.5}px`,
          top: (theme) => (typeof theme.mixins?.toolbar?.minHeight === 'number' ? `${theme.mixins.toolbar.minHeight}px` : (theme.mixins?.toolbar?.minHeight || '64px')),
          zIndex: (theme) => (theme.zIndex.appBar || 1200) + 1, backgroundColor: 'background.paper', borderRight: '1px solid', borderColor: 'divider'
        }}>
          {slots.map((slot, rowIndex) => (
            <Box key={rowIndex} sx={{ height: isMobile ? 56 : 72, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pr: 1 }}>
              <Typography variant="caption" color="text.secondary">
                {format(slot, 'HH:mm')}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Day x Slot cells */}
        {weekDays.map((day) => (
          <Box key={day.toISOString()} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {slots.map((slot, rowIndex) => {
              const slotLabel = format(slot, 'HH:mm');
              const dayAppointments = getAppointmentsForDay(day).filter((a) => a.time === slotLabel);

              // zebra background for empty slots
              const isEven = rowIndex % 2 === 0;
              const emptyBg = isEven ? 'background.default' : 'background.paper';

              return (
                <Box
                  key={`${day.toISOString()}-${slotLabel}`}
                  sx={{
                    minHeight: isMobile ? 56 : 72,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    p: 0.5,
                    bgcolor: dayAppointments.length > 0 ? 'action.hover' : emptyBg,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 0.25,
                  }}
                >
                  {dayAppointments.slice(0, 3).map((app) => (
                    <Box key={app.id} sx={{ mb: 0.25, cursor: 'pointer' }} onClick={() => openDetails(app)}>
                      <Typography variant="body2" noWrap sx={{ fontWeight: 600 }}>
                        {app.time} — {app.client}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {app.service}
                      </Typography>
                    </Box>
                  ))}

                  {dayAppointments.length > 3 && (
                    <Typography variant="caption" color="text.secondary">
                      +{dayAppointments.length - 3} outros
                    </Typography>
                  )}
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* Appointment details dialog */}
      <Dialog open={detailsOpen} onClose={closeDetails} fullWidth maxWidth="sm">
        <DialogTitle>Detalhes do Agendamento</DialogTitle>
        <DialogContent dividers>
          {selectedAppointment ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{selectedAppointment.client}</Typography>
              <Typography variant="body2">{selectedAppointment.vehicle}</Typography>
              <Typography variant="body2">Serviço: {selectedAppointment.service}</Typography>
              <Typography variant="body2">Horário: {selectedAppointment.time}</Typography>
              <Typography variant="body2">Filial: {selectedAppointment.branch}</Typography>
              <Typography variant="body2">Status: {selectedAppointment.status}</Typography>
              <Typography variant="body2">Duração: {selectedAppointment.duration} min</Typography>
            </Box>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDetails}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
