/**
 * Component: Header
 * Context: Top navigation bar with branding and user info
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 AppBar with brand theming
 * @see .github/copilot-instructions.md
 */

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, useTheme, useMediaQuery } from '@mui/material';
import { Build } from '@mui/icons-material';
import { useAppContext } from '../../contexts/AppContext';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const { owner } = useAppContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" elevation={2}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Build sx={{ fontSize: 32 }} />
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Oficina Digital
            </Typography>
            {!isMobile && (
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                {owner.shop}
              </Typography>
            )}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ThemeToggle />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {owner.name}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {owner.role}
                </Typography>
              </Box>
            )}
            <Avatar
              alt={owner.name}
              sx={{
                bgcolor: theme.palette.secondary.main,
                width: 40,
                height: 40,
                fontSize: '1.25rem',
              }}
            >
              {owner.name.charAt(0)}
            </Avatar>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
