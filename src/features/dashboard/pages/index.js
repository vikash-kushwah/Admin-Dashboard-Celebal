import React from 'react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '../../../components/ui/card';
import { StatsCard } from '../../../components/data-display/stats-card';
import { AnalyticsChart } from '../../../components/charts/analytics-chart';
import { SamplePieChart } from '../../../components/charts/sample-pie-chart';
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/ui/avatar';
import { statsCards, activities } from '../../../data/dummy-data';
import { ActivityTimeline } from '../../../components/data-display/activity-timeline';

const salesData = [
	{ name: 'Jan', sales: 4500000, customers: 24000, orders: 18000 },
	{ name: 'Feb', sales: 3000000, customers: 13980, orders: 28000 },
	{ name: 'Mar', sales: 2000000, customers: 98000, orders: 32000 },
	{ name: 'Apr', sales: 2780000, customers: 39080, orders: 25000 },
	{ name: 'May', sales: 1890000, customers: 48000, orders: 21000 },
	{ name: 'Jun', sales: 2390000, customers: 38000, orders: 28000 },
];

const recentSales = [
	{
		id: 1,
		name: 'Sarah Thompson',
		email: 'sarah.t@example.com',
		amount: 459.99,
		avatar: 'https://i.pravatar.cc/150?u=sarah',
	},
	{
		id: 2,
		name: 'Mike Johnson',
		email: 'mike.j@example.com',
		amount: 299.0,
		avatar: 'https://i.pravatar.cc/150?u=mike',
	},
	{
		id: 3,
		name: 'Lisa Anderson',
		email: 'lisa.a@example.com',
		amount: 749.5,
		avatar: 'https://i.pravatar.cc/150?u=lisa',
	},
	{
		id: 4,
		name: 'David Wilson',
		email: 'david.w@example.com',
		amount: 529.99,
		avatar: 'https://i.pravatar.cc/150?u=david',
	},
	{
		id: 5,
		name: 'Emma Davis',
		email: 'emma.d@example.com',
		amount: 879.99,
		avatar: 'https://i.pravatar.cc/150?u=emma',
	},
];

const paymentMethods = [
	{ name: 'UPI', value: 45, color: '#4F46E5' },
	{ name: 'Credit Card', value: 25, color: '#10B981' },
	{ name: 'Debit Card', value: 15, color: '#F43F5E' },
	{ name: 'Net Banking', value: 10, color: '#EAB308' },
	{ name: 'Wallets', value: 5, color: '#A855F7' },
];

export default function Dashboard() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
				<p className="text-muted-foreground">
					Your business analytics and overview
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
				{statsCards.map((stat, index) => (
					<StatsCard
						key={stat.id}
						{...stat}
						className={`animate-fade-in ${stat.className}`}
						style={{
							animationDelay: `${index * 100}ms`,
						}}
					/>
				))}
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Card className="md:col-span-4">
					<CardHeader>
						<CardTitle>Revenue Analytics</CardTitle>
						<CardDescription>
							Monthly revenue and order trends
						</CardDescription>
					</CardHeader>
					<CardContent>
						<AnalyticsChart
							data={salesData}
							categories={['sales', 'orders']}
							valueFormatter={(value) =>
								value >= 1000000
									? `₹${(value / 1000000).toFixed(1)}M`
									: `₹${(value / 1000).toFixed(1)}K`
							}
							className="h-[350px]"
						/>
					</CardContent>
				</Card>

				<Card className="md:col-span-3">
					<CardHeader>
						<CardTitle>Payment Methods</CardTitle>
						<CardDescription>
							Distribution of payment types
						</CardDescription>
					</CardHeader>
					<CardContent>
						<SamplePieChart
							data={paymentMethods}
							valueFormatter={(value) => `${value}%`}
							className="h-[350px]"
						/>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Card className="md:col-span-4">
					<CardHeader>
						<CardTitle>Recent Sales</CardTitle>
						<CardDescription>
							You made 265 sales this month
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-6">
							{recentSales.map((sale) => (
								<div key={sale.id} className="flex items-center">
									<Avatar className="h-9 w-9">
										<AvatarImage
											src={sale.avatar}
											alt={sale.name}
										/>
										<AvatarFallback>
											{sale.name
												.split(' ')
												.map((n) => n[0])
												.join('')}
										</AvatarFallback>
									</Avatar>
									<div className="ml-4 space-y-1">
										<p className="text-sm font-medium leading-none">
											{sale.name}
										</p>
										<p className="text-sm text-muted-foreground">
											{sale.email}
										</p>
									</div>
									<div className="ml-auto font-medium">
										+₹{sale.amount.toLocaleString('en-IN', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				<Card className="md:col-span-3">
					<CardHeader>
						<CardTitle>Recent Activity</CardTitle>
						<CardDescription>
							Latest actions and updates
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ActivityTimeline activities={activities} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}