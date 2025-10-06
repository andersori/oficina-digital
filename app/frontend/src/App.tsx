/**
 * Main App Component for Oficina Digital
 * Context: Entry point for the dashboard application
 * @see .github/copilot-instructions.md
 */

import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  // Mock: User is already logged in
  // In production, this would check authentication status
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'var(--font-body)'
      }}>
        <p>Por favor, faça login para acessar o sistema.</p>
      </div>
    );
  }

  return <Dashboard />;
}

export default App;

