/**
 * Component: Dashboard
 * Context: Main dashboard for shop owner to view and manage appointments
 * Users: Mechanics (low-tech familiarity)
 * @see .ai/context.md
 */

import { useState } from 'react';
import type { ViewMode, Filters, AppointmentStatus } from '../../types';
import { mockAppointments, mockShopOwner, mockBranches, getUniqueServiceNames } from '../../data/mockData';
import { applyFilters, getStatusLabel } from '../../utils/filterUtils';
import { getWeekStart, addDays, addWeeks, formatDate } from '../../utils/dateUtils';
import { WeekView } from '../WeekView/WeekView';
import { DayView } from '../DayView/DayView';
import './Dashboard.css';

export function Dashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false); // Should start closed
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    status: [],
    branchIds: [],
    serviceNames: []
  });

  const filteredAppointments = applyFilters(mockAppointments, filters);
  const weekStartDate = getWeekStart(currentDate);

  const handlePrevious = () => {
    if (viewMode === 'week') {
      setCurrentDate(addWeeks(currentDate, -1));
    } else {
      setCurrentDate(addDays(currentDate, -1));
    }
  };

  const handleNext = () => {
    if (viewMode === 'week') {
      setCurrentDate(addWeeks(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, 1));
    }
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    if (!isNaN(newDate.getTime())) {
      setCurrentDate(newDate);
      setShowDatePicker(false);
    }
  };

  const handleDayClick = (date: Date) => {
    setCurrentDate(date);
    setViewMode('day');
  };

  const formatInputDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getDateRangeText = (): string => {
    if (viewMode === 'week') {
      const weekEnd = addDays(weekStartDate, 6);
      return `${formatDate(weekStartDate)} - ${formatDate(weekEnd)}`;
    } else {
      return formatDate(currentDate);
    }
  };

  const allStatuses: AppointmentStatus[] = ['agendado', 'em_andamento', 'concluido', 'cancelado'];
  const serviceNames = getUniqueServiceNames();

  const handleStatusToggle = (status: AppointmentStatus) => {
    const newStatuses = filters.status.includes(status)
      ? filters.status.filter(s => s !== status)
      : [...filters.status, status];
    setFilters({ ...filters, status: newStatuses });
  };

  const handleBranchToggle = (branchId: string) => {
    const newBranches = filters.branchIds.includes(branchId)
      ? filters.branchIds.filter(id => id !== branchId)
      : [...filters.branchIds, branchId];
    setFilters({ ...filters, branchIds: newBranches });
  };

  const handleServiceToggle = (serviceName: string) => {
    const newServices = filters.serviceNames.includes(serviceName)
      ? filters.serviceNames.filter(s => s !== serviceName)
      : [...filters.serviceNames, serviceName];
    setFilters({ ...filters, serviceNames: newServices });
  };

  const handleClearFilters = () => {
    setFilters({
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
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-top">
          <div className="dashboard-branding">
            <button 
              className="btn-toggle-filters"
              onClick={() => setShowFilterSidebar(!showFilterSidebar)}
              aria-label="Abrir filtros"
            >
              ☰
            </button>
            <h1 className="dashboard-title">Oficina Digital</h1>
          </div>
          
          {/* User Profile & Theme Toggle */}
          <div className="header-actions">
            <button 
              className="btn-theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div className="user-profile">
              <span className="user-name">{mockShopOwner.name}</span>
              <div className="user-avatar">
                <span className="user-initials">{mockShopOwner.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Left Sidebar with Filters */}
      {showFilterSidebar && (
        <div className="filter-sidebar-overlay" onClick={() => setShowFilterSidebar(false)} />
      )}
      
      <aside className={`filter-sidebar-left ${showFilterSidebar ? 'open' : ''}`}>
        <div className="filter-sidebar-header">
          <h2 className="filter-sidebar-title">Filtros</h2>
          <button 
            className="btn-close-sidebar"
            onClick={() => setShowFilterSidebar(false)}
            aria-label="Fechar filtros"
          >
            ✕
          </button>
        </div>

        <div className="filter-sidebar-content">
          {/* Calendar Section */}
          <div className="filter-section">
            <h3 className="filter-section-title">Calendário</h3>
            <div className="calendar-wrapper">
              <input
                type="month"
                value={`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`}
                onChange={(e) => {
                  const [year, month] = e.target.value.split('-');
                  const newDate = new Date(parseInt(year), parseInt(month) - 1, 1);
                  setCurrentDate(newDate);
                }}
                className="calendar-month-picker"
              />
              <input
                type="date"
                value={formatInputDate(currentDate)}
                onChange={handleDateChange}
                className="calendar-date-picker"
              />
            </div>
          </div>

          {hasActiveFilters && (
            <button className="btn-clear-filters-sidebar" onClick={handleClearFilters}>
              Limpar Todos os Filtros
            </button>
          )}

          {/* Status Filter */}
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

          {/* Branch Filter */}
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

          {/* Service Filter */}
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

      {/* Navigation Controls */}
      <div className="dashboard-controls">
        <div className="view-toggle">
          <button
            className={`view-toggle-btn ${viewMode === 'week' ? 'active' : ''}`}
            onClick={() => setViewMode('week')}
          >
            Semana
          </button>
          <button
            className={`view-toggle-btn ${viewMode === 'day' ? 'active' : ''}`}
            onClick={() => setViewMode('day')}
          >
            Dia
          </button>
        </div>

        <div className="date-navigation">
          <button className="nav-btn" onClick={handlePrevious} aria-label="Anterior">
            ◀ Anterior
          </button>
          
          <div className="date-display-wrapper">
            <button 
              className="date-display"
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              📅 {getDateRangeText()}
            </button>
            {showDatePicker && (
              <div className="date-picker-dropdown">
                <input
                  type="date"
                  value={formatInputDate(currentDate)}
                  onChange={handleDateChange}
                  className="date-picker-input"
                />
              </div>
            )}
          </div>

          <button className="nav-btn" onClick={handleNext} aria-label="Próximo">
            Próximo ▶
          </button>
          
          <button className="btn-today" onClick={handleToday}>
            Hoje
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="dashboard-content">
        {viewMode === 'week' ? (
          <WeekView 
            weekStartDate={weekStartDate}
            appointments={filteredAppointments}
            onDayClick={handleDayClick}
          />
        ) : (
          <DayView 
            date={currentDate}
            appointments={filteredAppointments}
          />
        )}
      </main>
    </div>
  );
}
