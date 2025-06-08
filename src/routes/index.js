import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loading } from '../components/ui/loading';

// Lazy load pages for better performance
const Dashboard = React.lazy(() => import('../features/dashboard/pages'));
const Calendar = React.lazy(() => import('../features/calendar/pages'));
const Kanban = React.lazy(() => import('../features/kanban/pages'));
const Users = React.lazy(() => import('../features/users/pages'));
const Analytics = React.lazy(() => import('../features/analytics/pages'));
const Messages = React.lazy(() => import('../features/messages/pages'));
const Notifications = React.lazy(() => import('../features/notifications/pages'));
const Settings = React.lazy(() => import('../features/settings/pages'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex h-[50vh] items-center justify-center">
    <Loading className="h-8 w-8" />
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/users" element={<Users />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
