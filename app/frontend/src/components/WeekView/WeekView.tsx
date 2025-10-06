/**
 * Component: WeekView
 * Context: Weekly calendar view showing appointments across 7 days
 * Users: Mechanics (low-tech familiarity)
 * @see .ai/context.md
 */

import type { Appointment } from '../../types';
import { getWeekDates, formatWeekDay, isSameDay, isToday } from '../../utils/dateUtils';
import { getStatusColor } from '../../utils/filterUtils';
import './WeekView.css';

interface WeekViewProps {
  weekStartDate: Date;
  appointments: Appointment[];
  onDayClick: (date: Date) => void;
}

export function WeekView({ weekStartDate, appointments, onDayClick }: WeekViewProps) {
  const weekDates = getWeekDates(weekStartDate);

  const getAppointmentsForDay = (date: Date): Appointment[] => {
    return appointments
      .filter(apt => isSameDay(apt.scheduledDate, date))
      .sort((a, b) => a.scheduledDate.getTime() - b.scheduledDate.getTime());
  };

  return (
    <div className="week-view">
      <div className="week-view-grid">
        {weekDates.map((date, index) => {
          const dayAppointments = getAppointmentsForDay(date);
          const dayIsToday = isToday(date);

          return (
            <div 
              key={index} 
              className={`week-day-card ${dayIsToday ? 'today' : ''}`}
              onClick={() => onDayClick(date)}
            >
              <div className="week-day-header">
                <span className="week-day-name">{formatWeekDay(date)}</span>
                <span className={`week-day-number ${dayIsToday ? 'today' : ''}`}>
                  {date.getDate()}
                </span>
              </div>

              <div className="week-day-appointments">
                {dayAppointments.length === 0 ? (
                  <div className="week-day-empty">
                    Sem agendamentos
                  </div>
                ) : (
                  <>
                    <div className="week-day-count">
                      {dayAppointments.length} agendamento{dayAppointments.length > 1 ? 's' : ''}
                    </div>
                    <div className="week-appointments-list">
                      {dayAppointments.map(apt => (
                        <div key={apt.id} className="week-appointment-item">
                          <div 
                            className="week-appointment-indicator"
                            style={{ backgroundColor: getStatusColor(apt.status) }}
                          />
                          <div className="week-appointment-info">
                            <p className="week-appointment-time">
                              {apt.scheduledDate.toLocaleTimeString('pt-BR', { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </p>
                            <p className="week-appointment-service">{apt.serviceName}</p>
                            <p className="week-appointment-customer">{apt.customerName}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
