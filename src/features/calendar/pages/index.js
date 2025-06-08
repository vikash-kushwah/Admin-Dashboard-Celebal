import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { EventCalendar } from '../components/event-calendar';
import { events as initialEvents } from '../../../data/dummy-data';
import { useNotifications } from '../../../contexts/notifications';

export default function CalendarPage() {
	const { addNotification } = useNotifications();
	const [events, setEvents] = useState(() => {
		const savedEvents = localStorage.getItem('calendar_events');
		return savedEvents ? JSON.parse(savedEvents) : initialEvents;
	});

	useEffect(() => {
		localStorage.setItem('calendar_events', JSON.stringify(events));
	}, [events]);

	const handleEventUpdate = (updatedEvents) => {
		setEvents(updatedEvents);
		addNotification({
			title: 'Calendar Updated',
			message: 'Your calendar has been updated successfully',
			type: 'success',
			duration: 3000
		});
	};

	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
				<p className="text-muted-foreground">
					Schedule and manage your events
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
				<div className="col-span-2 lg:col-span-3">
					<EventCalendar events={events} onEventUpdate={handleEventUpdate} />
				</div>
				<div>
					<Card>
						<CardHeader>
							<CardTitle>Upcoming Events</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{events
									.filter(event => new Date(event.start) >= new Date())
									.sort((a, b) => new Date(a.start) - new Date(b.start))
									.slice(0, 5)
									.map((event) => (
										<div key={event.id} className="flex items-start space-x-3">
											<div className="mt-1">
												<CalendarIcon className="h-4 w-4 text-primary" />
											</div>
											<div className="space-y-1">
												<p className="font-medium leading-none">{event.title}</p>
												<p className="text-sm text-muted-foreground">
													{format(new Date(event.start), 'PPP')}
												</p>
											</div>
										</div>
									))}
								{events.filter(event => new Date(event.start) >= new Date()).length === 0 && (
									<p className="text-sm text-muted-foreground">No upcoming events</p>
								)}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};