/**
 * App: Main application component for Oficina Digital
 * Context: Entry point with theme and context providers
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 with Oficina Digital brand theming
 * @see .github/copilot-instructions.md
 */

import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProvider, useAppContext } from './contexts/AppContext';
import { lightTheme, darkTheme } from './theme/oficinaTheme';
import { Dashboard } from './components/Dashboard/Dashboard';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function AppContent() {
  const { darkMode } = useAppContext();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App
