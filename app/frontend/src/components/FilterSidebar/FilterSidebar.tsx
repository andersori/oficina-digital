/**
 * Component: FilterSidebar
 * Context: Sidebar with filters for appointment dashboard
 * Users: Mechanics (low-tech familiarity)
 * @see .github/copilot-instructions.md
 */

import type { AppointmentStatus, Filters } from '../../types';
import { mockBranches, getUniqueServiceNames } from '../../data/mockData';
import { getStatusLabel } from '../../utils/filterUtils';
import './FilterSidebar.css';

interface FilterSidebarProps {
  isOpen: boolean;
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onClose: () => void;
}

export function FilterSidebar({ isOpen, filters, onFilterChange, onClose }: FilterSidebarProps) {
  const allStatuses: AppointmentStatus[] = ['agendado', 'em_andamento', 'concluido', 'cancelado'];
  const serviceNames = getUniqueServiceNames();

  const handleStatusToggle = (status: AppointmentStatus) => {
    const newStatuses = filters.status.includes(status)
      ? filters.status.filter(s => s !== status)
      : [...filters.status, status];
    onFilterChange({ ...filters, status: newStatuses });
  };

  const handleBranchToggle = (branchId: string) => {
    const newBranches = filters.branchIds.includes(branchId)
      ? filters.branchIds.filter(id => id !== branchId)
      : [...filters.branchIds, branchId];
    onFilterChange({ ...filters, branchIds: newBranches });
  };

  const handleServiceToggle = (serviceName: string) => {
    const newServices = filters.serviceNames.includes(serviceName)
      ? filters.serviceNames.filter(s => s !== serviceName)
      : [...filters.serviceNames, serviceName];
    onFilterChange({ ...filters, serviceNames: newServices });
  };

  const handleClearFilters = () => {
    onFilterChange({
      status: [],
      branchIds: [],
      serviceNames: []
    });
  };

  const hasActiveFilters = 
    filters.status.length > 0 || 
    filters.branchIds.length > 0 || 
    filters.serviceNames.length > 0;

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="filter-sidebar-overlay" onClick={onClose} />}
      
      {/* Sidebar */}
      <aside className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="filter-sidebar-header">
          <h2 className="filter-sidebar-title">Filtros</h2>
          <button className="filter-sidebar-close" onClick={onClose} aria-label="Fechar filtros">
            ✕
          </button>
        </div>

        <div className="filter-sidebar-content">
          {/* Clear filters button */}
          {hasActiveFilters && (
            <button className="filter-clear-btn" onClick={handleClearFilters}>
              Limpar Filtros
            </button>
          )}

          {/* Status filter */}
          <div className="filter-section">
            <h3 className="filter-section-title">Status do Agendamento</h3>
            <div className="filter-options">
              {allStatuses.map(status => (
                <label key={status} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.status.includes(status)}
                    onChange={() => handleStatusToggle(status)}
                  />
                  <span className="filter-checkbox-label">{getStatusLabel(status)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Branch filter */}
          <div className="filter-section">
            <h3 className="filter-section-title">Filial</h3>
            <div className="filter-options">
              {mockBranches.map(branch => (
                <label key={branch.id} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.branchIds.includes(branch.id)}
                    onChange={() => handleBranchToggle(branch.id)}
                  />
                  <span className="filter-checkbox-label">{branch.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Service filter */}
          <div className="filter-section">
            <h3 className="filter-section-title">Tipo de Serviço</h3>
            <div className="filter-options">
              {serviceNames.map(serviceName => (
                <label key={serviceName} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.serviceNames.includes(serviceName)}
                    onChange={() => handleServiceToggle(serviceName)}
                  />
                  <span className="filter-checkbox-label">{serviceName}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
