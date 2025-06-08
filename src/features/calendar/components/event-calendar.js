import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Plus, Edit2, Trash2, MoreVertical } from 'lucide-react';
import { Calendar } from '../../../components/ui/calendar';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { EventForm } from './event-form';

export const EventCalendar = ({ events, onEventUpdate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showEventActions, setShowEventActions] = useState(null);

  const selectedDayEvents = events.filter(event => {
    const eventDate = new Date(event.start);
    return (
      eventDate.getDate() === selectedDate.getDate() &&
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getFullYear() === selectedDate.getFullYear()
    );
  }).sort((a, b) => new Date(a.start) - new Date(b.start));

  const eventDates = events.map(event => new Date(event.start));

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setShowEventForm(true);
    setShowEventActions(null);
  };

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      onEventUpdate(events.filter(event => event.id !== eventId));
    }
    setShowEventActions(null);
  };

  const handleEventSubmit = (eventData) => {
    if (editingEvent) {
      onEventUpdate(events.map(e => e.id === editingEvent.id ? eventData : e));
    } else {
      onEventUpdate([...events, eventData]);
    }
    setShowEventForm(false);
    setEditingEvent(null);
  };

  const handleCloseForm = () => {
    setShowEventForm(false);
    setEditingEvent(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Calendar</h2>
        <button
          onClick={() => {
            setEditingEvent(null);
            setShowEventForm(true);
          }}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          Add Event
        </button>
      </div>

      {showEventForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingEvent ? 'Edit Event' : 'New Event'}</CardTitle>
          </CardHeader>
          <CardContent>
            <EventForm
              event={editingEvent}
              selectedDate={selectedDate}
              onSubmit={handleEventSubmit}
              onCancel={handleCloseForm}
            />
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="md:col-span-1 lg:col-span-5">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              modifiers={{
                event: eventDates,
              }}
              modifiersStyles={{
                event: { fontWeight: 'bold', color: 'var(--primary)' },
              }}
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Events for {format(selectedDate, 'PP')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedDayEvents.length === 0 ? (
                <p className="text-sm text-muted-foreground">No events scheduled</p>
              ) : (
                selectedDayEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group flex items-start justify-between space-x-4 rounded-md border p-3"
                  >
                    <div className="flex space-x-4">
                      <CalendarIcon className="mt-0.5 h-4 w-4 text-primary" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none">{event.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(event.start), 'p')} -{' '}
                          {format(new Date(event.end), 'p')}
                        </p>
                        {event.description && (
                          <p className="text-sm text-muted-foreground">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="relative opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        className="p-1 hover:bg-accent rounded-md"
                        onClick={() => setShowEventActions(event.id)}
                      >
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </button>
                      {showEventActions === event.id && (
                        <>
                          <div 
                            className="fixed inset-0" 
                            onClick={() => setShowEventActions(null)}
                          />
                          <div className="absolute right-0 top-full mt-1 z-50 bg-background border rounded-md shadow-md py-1 min-w-[120px]">
                            <button
                              className="w-full px-3 py-1.5 text-sm text-left hover:bg-accent flex items-center gap-2"
                              onClick={() => handleEditEvent(event)}
                            >
                              <Edit2 className="h-4 w-4" />
                              Edit
                            </button>
                            <button
                              className="w-full px-3 py-1.5 text-sm text-left text-destructive hover:bg-accent flex items-center gap-2"
                              onClick={() => handleDeleteEvent(event.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      description: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired,
  onEventUpdate: PropTypes.func.isRequired,
};