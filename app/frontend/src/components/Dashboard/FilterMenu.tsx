/**
 * Component: FilterMenu
 * Context: Lateral filter menu for appointments
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 Drawer with brand theming
 * @see .github/copilot-instructions.md
 */

import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Close, FilterList } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ptBR } from 'date-fns/locale';
import { useAppContext } from '../../contexts/AppContext';
import type { AppointmentStatus } from '../../types';

interface FilterMenuProps {
  open: boolean;
  onClose: () => void;
}

export const FilterMenu: React.FC<FilterMenuProps> = ({ open, onClose }) => {
  const { filters, setFilters } = useAppContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFilters({ selectedDate: date });
    }
  };

  const handleBranchChange = (branch: string) => {
    setFilters({ branch });
  };

  const handleServiceChange = (service: string) => {
    setFilters({ service });
  };

  const handleStatusChange = (status: AppointmentStatus | 'todos') => {
    setFilters({ status });
  };

  const activeFiltersCount = [
    filters.branch !== 'todos',
    filters.service !== 'todos',
    filters.status !== 'todos',
  ].filter(Boolean).length;

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: isMobile ? '100%' : 320,
          maxWidth: '100%',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FilterList />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Filtros
            </Typography>
            {activeFiltersCount > 0 && (
              <Chip
                label={activeFiltersCount}
                color="primary"
                size="small"
                sx={{ minWidth: 24, height: 24 }}
              />
            )}
          </Box>
          <IconButton onClick={onClose} sx={{ minWidth: 48, minHeight: 48 }}>
            <Close />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Calendar */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Data
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
            <DateCalendar
              value={filters.selectedDate}
              onChange={handleDateChange}
              sx={{ width: '100%' }}
            />
          </LocalizationProvider>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Branch Filter */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Filial</InputLabel>
          <Select
            value={filters.branch}
            label="Filial"
            onChange={(e) => handleBranchChange(e.target.value)}
          >
            <MenuItem value="todos">Todas</MenuItem>
            <MenuItem value="Centro">Centro</MenuItem>
            <MenuItem value="Zona Sul">Zona Sul</MenuItem>
          </Select>
        </FormControl>

        {/* Service Filter */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Serviço</InputLabel>
          <Select
            value={filters.service}
            label="Serviço"
            onChange={(e) => handleServiceChange(e.target.value)}
          >
            <MenuItem value="todos">Todos</MenuItem>
            <MenuItem value="Troca de óleo">Troca de óleo</MenuItem>
            <MenuItem value="Revisão completa">Revisão completa</MenuItem>
            <MenuItem value="Alinhamento e balanceamento">Alinhamento e balanceamento</MenuItem>
            <MenuItem value="Troca de pastilhas de freio">Troca de pastilhas de freio</MenuItem>
            <MenuItem value="Diagnóstico elétrico">Diagnóstico elétrico</MenuItem>
          </Select>
        </FormControl>

        {/* Status Filter */}
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={filters.status}
            label="Status"
            onChange={(e) => handleStatusChange(e.target.value as AppointmentStatus | 'todos')}
          >
            <MenuItem value="todos">Todos</MenuItem>
            <MenuItem value="agendado">Agendado</MenuItem>
            <MenuItem value="em-andamento">Em Andamento</MenuItem>
            <MenuItem value="atrasado">Atrasado</MenuItem>
            <MenuItem value="concluido">Concluído</MenuItem>
            <MenuItem value="cancelado">Cancelado</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Drawer>
  );
};
