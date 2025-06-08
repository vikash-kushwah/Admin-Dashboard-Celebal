import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Kanban, 
  BarChart2, 
  Settings, 
  Users, 
  Bell, 
  MessageSquare 
} from 'lucide-react';

export function AppSidebar({ isOpen, setIsOpen }) {
  const navItems = [
    {
      title: 'Overview',
      items: [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Analytics', path: '/analytics', icon: BarChart2 },
        { name: 'Users', path: '/users', icon: Users },
      ],
    },
    {
      title: 'Features',
      items: [
        { name: 'Calendar', path: '/calendar', icon: Calendar },
        { name: 'Kanban', path: '/kanban', icon: Kanban },
        { name: 'Messages', path: '/messages', icon: MessageSquare },
        { name: 'Notifications', path: '/notifications', icon: Bell },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { name: 'Settings', path: '/settings', icon: Settings },
      ],
    },
  ];

  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavItemClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <aside
      className={`fixed top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-64 -translate-x-full border-r bg-background transition-transform md:sticky md:translate-x-0 ${
        isOpen ? 'translate-x-0' : ''
      }`}
    >
      <div className="flex h-full flex-col">
        <nav className="flex-1 space-y-1 px-3 py-3">
          {navItems.map((section) => (
            <div key={section.title} className="py-2">
              <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavItemClick}
                    className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
                      currentPath === item.path 
                        ? 'bg-accent text-accent-foreground' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}