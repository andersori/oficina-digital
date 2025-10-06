/**
 * Component: Dashboard
 * Context: Main dashboard for shop owner to view and manage appointments
 * Users: Mechanics (low-tech familiarity)
 * @see .ai/context.md
 */

import { useState } from 'react';
import type { ViewMode, Filters } from '../../types';
import { mockAppointments, mockShopOwner } from '../../data/mockData';
import { applyFilters } from '../../utils/filterUtils';
import { getWeekStart, addDays, addWeeks, formatDate } from '../../utils/dateUtils';
import { FilterSidebar } from '../FilterSidebar/FilterSidebar';
import { WeekView } from '../WeekView/WeekView';
import { DayView } from '../DayView/DayView';
import './Dashboard.css';

export function Dashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [showFilters, setShowFilters] = useState(false);
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

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-top">
          <div className="dashboard-branding">
            <h1 className="dashboard-title">Oficina Digital</h1>
            <p className="dashboard-subtitle">Bem-vindo, {mockShopOwner.name}</p>
          </div>
          <button 
            className="btn-filters"
            onClick={() => setShowFilters(true)}
            aria-label="Abrir filtros"
          >
            🔍 Filtros
          </button>
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

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={showFilters}
        filters={filters}
        onFilterChange={setFilters}
        onClose={() => setShowFilters(false)}
      />
    </div>
  );
}
