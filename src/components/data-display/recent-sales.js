import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const recentSales = [
  {
    id: 1,
    name: 'Ananya Sharma',
    email: 'ananya.s@email.in',
    amount: '₹34,499',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Ananya'
  },
  {
    id: 2,
    name: 'Raj Patel',
    email: 'raj.patel@email.in',
    amount: '₹21,999',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Raj'
  },
  {
    id: 3,
    name: 'Meera Desai',
    email: 'meera.d@email.in',
    amount: '₹49,999',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Meera'
  },
  {
    id: 4,
    name: 'Arjun Kumar',
    email: 'arjun.k@email.in',
    amount: '₹39,499',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Arjun'
  },
  {
    id: 5,
    name: 'Priya Verma',
    email: 'priya.v@email.in',
    amount: '₹74,999',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Priya'
  }
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      {recentSales.map((sale) => (
        <div key={sale.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatarUrl} alt={sale.name} />
            <AvatarFallback>
              {sale.name.split(' ').map((n) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">
              {sale.email}
            </p>
          </div>
          <div className="ml-auto font-medium">
            {sale.amount}
          </div>
        </div>
      ))}
    </div>
  );
}
