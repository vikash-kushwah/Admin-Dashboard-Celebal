import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

export function EventForm({ event, selectedDate, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: event?.title || '',
    description: event?.description || '',
    start: event?.start ? format(new Date(event.start), "yyyy-MM-dd'T'HH:mm") : 
          selectedDate ? format(selectedDate, "yyyy-MM-dd'T'HH:mm") : '',
    end: event?.end ? format(new Date(event.end), "yyyy-MM-dd'T'HH:mm") : 
         selectedDate ? format(selectedDate, "yyyy-MM-dd'T'HH:mm") : '',
    type: event?.type || 'meeting'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      id: event?.id || Date.now().toString(),
      start: new Date(formData.start).toISOString(),
      end: new Date(formData.end).toISOString()
    };
    onSubmit(submissionData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="title">
          Event Title
        </label>
        <input
          id="title"
          type="text"
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter event title"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Add event description"
          rows={3}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="start">
            Start Time
          </label>
          <input
            id="start"
            type="datetime-local"
            className="w-full rounded-md border border-input bg-background px-3 py-2"
            value={formData.start}
            onChange={(e) => setFormData({ ...formData, start: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="end">
            End Time
          </label>
          <input
            id="end"
            type="datetime-local"
            className="w-full rounded-md border border-input bg-background px-3 py-2"
            value={formData.end}
            onChange={(e) => setFormData({ ...formData, end: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="type">
          Event Type
        </label>
        <select
          id="type"
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="meeting">Meeting</option>
          <option value="call">Call</option>
          <option value="deadline">Deadline</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {event ? 'Update Event' : 'Create Event'}
        </button>
      </div>
    </form>
  );
}

EventForm.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    type: PropTypes.string,
  }),
  selectedDate: PropTypes.instanceOf(Date),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};