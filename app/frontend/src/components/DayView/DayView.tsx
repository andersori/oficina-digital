/**
 * Component: DayView
 * Context: Daily schedule view showing appointments for a single day
 * Users: Mechanics (low-tech familiarity)
 * @see .github/copilot-instructions.md
 */

import type { Appointment } from '../../types';
import { formatTime, formatWeekDayLong, formatDate, isSameDay } from '../../utils/dateUtils';
import { getStatusLabel, getStatusColor } from '../../utils/filterUtils';
import './DayView.css';

interface DayViewProps {
  date: Date;
  appointments: Appointment[];
}

export function DayView({ date, appointments }: DayViewProps) {
  // Filter appointments for the selected date
  const dayAppointments = appointments
    .filter(apt => isSameDay(apt.scheduledDate, date))
    .sort((a, b) => a.scheduledDate.getTime() - b.scheduledDate.getTime());

  // Generate time slots (8:00 to 18:00)
  const timeSlots = Array.from({ length: 11 }, (_, i) => 8 + i);

  const getAppointmentForSlot = (hour: number): Appointment | undefined => {
    return dayAppointments.find(apt => apt.scheduledDate.getHours() === hour);
  };

  return (
    <div className="day-view">
      <div className="day-view-header">
        <h2 className="day-view-title">
          {formatWeekDayLong(date)}, {formatDate(date)}
        </h2>
        {dayAppointments.length > 0 ? (
          <p className="day-view-count">{dayAppointments.length} agendamento(s)</p>
        ) : (
          <p className="day-view-empty-subtitle">Nenhum agendamento para este dia</p>
        )}
      </div>

      <div className="day-view-timeline">
        {timeSlots.map(hour => {
          const appointment = getAppointmentForSlot(hour);
          const hasAppointment = !!appointment;

          return (
            <div key={hour} className="day-view-slot">
              <div className="day-view-time">
                {String(hour).padStart(2, '0')}:00
              </div>
              
              <div className="day-view-slot-content">
                {hasAppointment ? (
                  <div className="day-view-appointment">
                    <div 
                      className="appointment-status-indicator"
                      style={{ backgroundColor: getStatusColor(appointment.status) }}
                    />
                    <div className="appointment-info">
                      <div className="appointment-header">
                        <h3 className="appointment-service">{appointment.serviceName}</h3>
                        <span 
                          className="appointment-status-badge"
                          style={{ 
                            backgroundColor: getStatusColor(appointment.status),
                            color: 'white'
                          }}
                        >
                          {getStatusLabel(appointment.status)}
                        </span>
                      </div>
                      <p className="appointment-customer">
                        <strong>Cliente:</strong> {appointment.customerName}
                      </p>
                      <p className="appointment-vehicle">
                        <strong>Veículo:</strong> {appointment.vehicleModel} - {appointment.vehiclePlate}
                      </p>
                      <p className="appointment-time">
                        <strong>Horário:</strong> {formatTime(appointment.scheduledDate)} ({appointment.duration} min)
                      </p>
                      {appointment.notes && (
                        <p className="appointment-notes">
                          <strong>Obs:</strong> {appointment.notes}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="day-view-slot-empty">
                    Horário disponível
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
