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
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Chip,
} from '@mui/material';
import { format, startOfWeek, addDays, isSameDay, addMinutes } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useAppContext } from '../../contexts/AppContext';
import type { Appointment } from '../../types';

export const WeekView: React.FC = () => {
  const { appointments, selectedDate, setSelectedDate, setViewMode, filters } = useAppContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const inlineCount = isMobile ? 1 : 2;

  const getStatusMainColor = (status: string) => {
    switch (status) {
      case 'agendado':
        return theme.palette.primary.main;
      case 'em-andamento':
        return theme.palette.warning.main;
      case 'concluido':
        return theme.palette.success.main;
      case 'atrasado':
        return theme.palette.error.main;
      default:
        return theme.palette.text.primary;
    }
  };

  const weekStart = startOfWeek(selectedDate, { locale: ptBR });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const weekCols: (Date | null)[] = [null, ...weekDays];


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
  const [slotDialogOpen, setSlotDialogOpen] = useState(false);
  const [slotDialogAppointments, setSlotDialogAppointments] = useState<Appointment[] | null>(null);
  const [slotDialogTitle, setSlotDialogTitle] = useState<string>('');

  const openDetails = (app: Appointment) => {
    setSelectedAppointment(app);
    setDetailsOpen(true);
  };

  const closeDetails = () => {
    setDetailsOpen(false);
    setSelectedAppointment(null);
  };

  const openSlotDialog = (day: Date | null, slotLabel: string, apps: Appointment[]) => {
    if (!day) return;
    setSlotDialogTitle(`${format(day, "d 'de' MMMM", { locale: ptBR })} • ${slotLabel}`);
    setSlotDialogAppointments(apps);
    setSlotDialogOpen(true);
  };

  const closeSlotDialog = () => {
    setSlotDialogOpen(false);
    setSlotDialogAppointments(null);
    setSlotDialogTitle('');
  };

  const filterAppointments = (apps: Appointment[]) => {
    return apps.filter((app) => {
      if (filters.branch !== 'todos' && app.branch !== filters.branch) return false;
      if (filters.service !== 'todos' && app.service !== filters.service) return false;
      if (filters.status !== 'todos' && app.status !== filters.status) return false;
      return true;
    });
  };

  const getAppointmentsForDay = (day: Date | null) => {
    if (!day) return [];
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
        {/* Day x Slot cells */}
        {weekCols.map((day, idx) => (
          <Box key={day ? day.toISOString() : 'time-labels'} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

            {/* Grid header: first column for time labels, then 7 day headers */}
            <Box
              sx={{
                display: 'grid',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: (theme) => (theme.zIndex.appBar || 1200) + 2,
                overflow: 'hidden',
              }}
            >
              <Box sx={{
                position: 'sticky',
                left: 0,
                zIndex: (theme) => (theme.zIndex.appBar || 1200) + 1,
                borderRight: '1px solid',
                borderColor: 'divider',
                borderTopLeftRadius: (theme) => `${Number(theme.shape.borderRadius) * 1.5}px`
              }} />
              {idx === 0 ? (
                /* placeholder cell to align with time labels column (no day header) */
                <Box sx={{
                  position: 'sticky',
                  left: 0,
                  minHeight: isMobile ? 100 : 140,           /* garante altura mínima do cabeçalho */
                  zIndex: (theme) => (theme.zIndex.appBar || 1200) + 1,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }} />
              ) : (
                <Box
                  key={String(idx)}
                  sx={{
                    minHeight: isMobile ? 100 : 140,          /* garante altura mínima do cabeçalho */
                    textAlign: 'center',
                    p: 1,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  onClick={() => day && handleDayClick(day)}
                  role="button"
                  aria-label={day ? `Ver dia ${format(day, "d 'de' MMMM", { locale: ptBR })}` : undefined}
                >
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 600, color: day && isToday(day) ? 'primary.main' : 'text.secondary' }}>
                    {day ? format(day, 'EEE', { locale: ptBR }) : ''}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {day ? format(day, 'd') : ''}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {day ? format(day, 'MMM', { locale: ptBR }) : ''}
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Time labels column (sticky) - render only for first column */}
            {idx === 0 && slots.map((slot, rowIndex) => (
              <Box key={rowIndex} sx={{
                minHeight: isMobile ? 100 : 140,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <Typography variant="caption" color="text.secondary">
                  {format(slot, 'HH:mm')}
                </Typography>
              </Box>
            ))}

            {idx !== 0 && slots.map((slot, rowIndex) => {
              const slotLabel = format(slot, 'HH:mm');
              const dayAppointments = getAppointmentsForDay(day ? day : null).filter((a) => a.time === slotLabel);

              // zebra background for empty slots
              const isEven = rowIndex % 2 === 0;
              const emptyBg = isEven ? 'background.default' : 'background.paper';

              return (
                <Box
                  key={`${day ? day.toISOString() : ''}-${slotLabel}`}
                  sx={{
                    minHeight: isMobile ? 100 : 140,
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
                  {/* show up to 3 appointments as horizontal items (side-by-side) */}
                  {dayAppointments.slice(0, inlineCount).map((app) => (
                    <Chip
                      key={app.id}
                      label={`${app.time} — ${app.client}`}
                      onClick={() => openDetails(app)}
                      size={isMobile ? 'small' : 'medium'}
                      variant="outlined"
                      sx={{
                        maxWidth: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        borderColor: getStatusMainColor(app.status),
                        color: getStatusMainColor(app.status),
                        backgroundColor: (theme) => theme.palette.background.default,
                      }}
                    />
                  ))}

                  {/* if more than inlineCount, show a compact button to open a dialog listing all */}
                  {dayAppointments.length > inlineCount && (
                    <Box sx={{ mt: 0.25 }}>
                      <Button size="small" onClick={() => openSlotDialog(day ? day : null, slotLabel, dayAppointments)}>
                        Ver +{dayAppointments.length - inlineCount}
                      </Button>
                    </Box>
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
      {/* Slot appointments dialog */}
      <Dialog open={slotDialogOpen} onClose={closeSlotDialog} fullWidth maxWidth="sm">
        <DialogTitle>{slotDialogTitle}</DialogTitle>
        <DialogContent dividers>
          {slotDialogAppointments && (
            <List>
              {slotDialogAppointments.map((app) => (
                <ListItem key={app.id} alignItems="flex-start" sx={{ p: 0 }}>
                  <ListItemButton onClick={() => openDetails(app)}>
                    <ListItemText primary={`${app.time} — ${app.client}`} secondary={app.service} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSlotDialog}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
