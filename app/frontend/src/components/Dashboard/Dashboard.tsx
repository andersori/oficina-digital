/**
 * Component: Dashboard
 * Context: Main dashboard for appointment management
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 layout with navigation controls
 * @see .github/copilot-instructions.md
 */

import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  Today,
  ViewWeek,
  ViewDay,
  FilterList,
} from '@mui/icons-material';
import { addWeeks, subWeeks, addDays, subDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useAppContext } from '../../contexts/AppContext';
import { Header } from '../shared/Header';
import { WeekView } from './WeekView';
import { DayView } from './DayView';
import { FilterMenu } from './FilterMenu';

export const Dashboard: React.FC = () => {
  const { viewMode, setViewMode, selectedDate, setSelectedDate } = useAppContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const handlePrevious = () => {
    if (viewMode === 'week') {
      setSelectedDate(subWeeks(selectedDate, 1));
    } else {
      setSelectedDate(subDays(selectedDate, 1));
    }
  };

  const handleNext = () => {
    if (viewMode === 'week') {
      setSelectedDate(addWeeks(selectedDate, 1));
    } else {
      setSelectedDate(addDays(selectedDate, 1));
    }
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  const handleViewModeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: 'week' | 'day' | null,
  ) => {
    if (newMode !== null) {
      setViewMode(newMode);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />

      <Container maxWidth="xl" sx={{ py: 3 }}>
        {/* Navigation Controls */}
        <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 2,
              alignItems: isMobile ? 'stretch' : 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Date Navigation */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <IconButton
                onClick={handlePrevious}
                sx={{ minWidth: 48, minHeight: 48 }}
                aria-label="Anterior"
              >
                <ChevronLeft />
              </IconButton>

              <Button
                variant="outlined"
                onClick={handleToday}
                startIcon={<Today />}
                sx={{ minHeight: 48, px: 3 }}
              >
                Hoje
              </Button>

              <IconButton
                onClick={handleNext}
                sx={{ minWidth: 48, minHeight: 48 }}
                aria-label="Próximo"
              >
                <ChevronRight />
              </IconButton>

              <Box sx={{ ml: 2, display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {viewMode === 'week'
                    ? format(selectedDate, "MMMM 'de' yyyy", { locale: ptBR })
                    : format(selectedDate, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </Typography>
              </Box>
            </Box>

            {/* View Mode Toggle and Filters */}
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
              <Button
                variant="outlined"
                onClick={() => setFilterMenuOpen(true)}
                startIcon={<FilterList />}
                sx={{ minHeight: 48 }}
              >
                Filtros
              </Button>

              <ToggleButtonGroup
                value={viewMode}
                exclusive
                onChange={handleViewModeChange}
                aria-label="Modo de visualização"
                sx={{ height: 48 }}
              >
                <ToggleButton value="week" aria-label="Visualização semanal">
                  <ViewWeek sx={{ mr: { xs: 0, sm: 1 } }} />
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Semana</Box>
                </ToggleButton>
                <ToggleButton value="day" aria-label="Visualização diária">
                  <ViewDay sx={{ mr: { xs: 0, sm: 1 } }} />
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Dia</Box>
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>

          {/* Mobile date display */}
          {isMobile && (
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600, textAlign: 'center' }}>
              {viewMode === 'week'
                ? format(selectedDate, "MMMM 'de' yyyy", { locale: ptBR })
                : format(selectedDate, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </Typography>
          )}
        </Paper>

        {/* Main Content */}
        <Box>{viewMode === 'week' ? <WeekView /> : <DayView />}</Box>
      </Container>

      {/* Filter Menu */}
      <FilterMenu open={filterMenuOpen} onClose={() => setFilterMenuOpen(false)} />
    </Box>
  );
};
