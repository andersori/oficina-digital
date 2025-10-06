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
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-top">
          <div className="dashboard-branding">
            <h1 className="dashboard-title">Oficina Digital</h1>
          </div>
          
          {/* User Profile */}
          <div className="user-profile">
            <span className="user-name">{mockShopOwner.name}</span>
            <div className="user-avatar">
              <span className="user-initials">{mockShopOwner.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="filter-group">
            <label className="filter-label">Status:</label>
            <div className="filter-options-inline">
              {allStatuses.map(status => (
                <button
                  key={status}
                  className={`filter-chip ${filters.status.includes(status) ? 'active' : ''}`}
                  onClick={() => handleStatusToggle(status)}
                >
                  {getStatusLabel(status)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Filial:</label>
            <div className="filter-options-inline">
              {mockBranches.map(branch => (
                <button
                  key={branch.id}
                  className={`filter-chip ${filters.branchIds.includes(branch.id) ? 'active' : ''}`}
                  onClick={() => handleBranchToggle(branch.id)}
                >
                  {branch.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Serviço:</label>
            <div className="filter-options-inline">
              {serviceNames.slice(0, 5).map(serviceName => (
                <button
                  key={serviceName}
                  className={`filter-chip ${filters.serviceNames.includes(serviceName) ? 'active' : ''}`}
                  onClick={() => handleServiceToggle(serviceName)}
                >
                  {serviceName}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <button className="btn-clear-filters" onClick={handleClearFilters}>
              Limpar Filtros
            </button>
          )}
        </div>
      </header>

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
