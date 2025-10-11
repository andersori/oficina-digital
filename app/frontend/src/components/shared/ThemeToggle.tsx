/**
 * Component: ThemeToggle
 * Context: Toggle between light and dark theme
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 IconButton with brand theming
 * @see .github/copilot-instructions.md
 */

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAppContext } from '../../contexts/AppContext';

export const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <Tooltip title={darkMode ? "Modo claro" : "Modo escuro"}>
      <IconButton
        onClick={toggleDarkMode}
        color="inherit"
        sx={{ minWidth: 48, minHeight: 48 }}
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};
