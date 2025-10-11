/**
 * Component: AddServiceDialog
 * Context: Dialog for registering walk-in services
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 Dialog with form
 * @see .github/copilot-instructions.md
 */

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { format } from 'date-fns';

interface AddServiceDialogProps {
  open: boolean;
  onClose: () => void;
  selectedDate: Date;
  selectedTime?: string;
}

export const AddServiceDialog: React.FC<AddServiceDialogProps> = ({
  open,
  onClose,
  selectedDate,
  selectedTime = '',
}) => {
  const [formData, setFormData] = useState({
    client: '',
    vehicle: '',
    service: '',
    time: selectedTime,
    branch: 'Centro',
    duration: 30,
  });

  const handleChange = (field: string) => (event: any) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = () => {
    // TODO: Integrate with backend API
    console.log('Novo serviço registrado:', {
      ...formData,
      date: format(selectedDate, 'yyyy-MM-dd'),
      status: 'agendado',
    });
    
    // Reset form and close
    setFormData({
      client: '',
      vehicle: '',
      service: '',
      time: '',
      branch: 'Centro',
      duration: 30,
    });
    onClose();
  };

  const handleClose = () => {
    // Reset form
    setFormData({
      client: '',
      vehicle: '',
      service: '',
      time: selectedTime,
      branch: 'Centro',
      duration: 30,
    });
    onClose();
  };

  const isFormValid = formData.client && formData.vehicle && formData.service && formData.time;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Registrar Serviço
          <IconButton onClick={handleClose} sx={{ minWidth: 48, minHeight: 48 }}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <TextField
            fullWidth
            label="Nome do Cliente"
            value={formData.client}
            onChange={handleChange('client')}
            required
            placeholder="Ex: João Silva"
          />

          <TextField
            fullWidth
            label="Veículo e Placa"
            value={formData.vehicle}
            onChange={handleChange('vehicle')}
            required
            placeholder="Ex: Honda Civic - ABC-1234"
          />

          <FormControl fullWidth required>
            <InputLabel>Tipo de Serviço</InputLabel>
            <Select
              value={formData.service}
              label="Tipo de Serviço"
              onChange={handleChange('service')}
            >
              <MenuItem value="Troca de óleo">Troca de óleo</MenuItem>
              <MenuItem value="Revisão completa">Revisão completa</MenuItem>
              <MenuItem value="Alinhamento e balanceamento">Alinhamento e balanceamento</MenuItem>
              <MenuItem value="Troca de pastilhas de freio">Troca de pastilhas de freio</MenuItem>
              <MenuItem value="Diagnóstico elétrico">Diagnóstico elétrico</MenuItem>
              <MenuItem value="Troca de bateria">Troca de bateria</MenuItem>
              <MenuItem value="Troca de pneus">Troca de pneus</MenuItem>
              <MenuItem value="Revisão de suspensão">Revisão de suspensão</MenuItem>
              <MenuItem value="Troca de filtro de ar">Troca de filtro de ar</MenuItem>
              <MenuItem value="Revisão de freios">Revisão de freios</MenuItem>
              <MenuItem value="Outro">Outro</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth required>
              <InputLabel>Horário</InputLabel>
              <Select
                value={formData.time}
                label="Horário"
                onChange={handleChange('time')}
              >
                {Array.from({ length: 11 }, (_, i) => 8 + i).map((hour) => (
                  <MenuItem key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                    {hour.toString().padStart(2, '0')}:00
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth required>
              <InputLabel>Duração (min)</InputLabel>
              <Select
                value={formData.duration}
                label="Duração (min)"
                onChange={handleChange('duration')}
              >
                <MenuItem value={20}>20 min</MenuItem>
                <MenuItem value={30}>30 min</MenuItem>
                <MenuItem value={45}>45 min</MenuItem>
                <MenuItem value={60}>1 hora</MenuItem>
                <MenuItem value={90}>1h 30min</MenuItem>
                <MenuItem value={120}>2 horas</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <FormControl fullWidth>
            <InputLabel>Filial</InputLabel>
            <Select
              value={formData.branch}
              label="Filial"
              onChange={handleChange('branch')}
            >
              <MenuItem value="Centro">Centro</MenuItem>
              <MenuItem value="Zona Sul">Zona Sul</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 2 }}>
        <Button onClick={handleClose} sx={{ minHeight: 48 }}>
          Cancelar
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!isFormValid}
          sx={{ minHeight: 48, px: 4 }}
        >
          Registrar Serviço
        </Button>
      </DialogActions>
    </Dialog>
  );
};
