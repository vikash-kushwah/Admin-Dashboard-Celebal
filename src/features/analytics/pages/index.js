import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { AnalyticsChart } from '../../../components/charts/analytics-chart';
import { RegionalPerformance } from '../../../components/data-display/regional-performance';
import { StatsCard } from '../../../components/data-display/stats-card';
import { IndianRupee, Users, LineChart, CreditCard } from 'lucide-react'; // Import icons

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center gap-4">
          <select className="rounded-md border p-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="px-4 py-2 bg-primary text-white rounded-md">
            Download Report
          </button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard 
          title="Total Revenue"
          value="₹0.87Cr"
          changeValue={15.8}
          icon={IndianRupee}
          trend="up"
        />
        <StatsCard 
          title="Total Users"
          value="1,25,750"
          changeValue={12.3}
          icon={Users}
          trend="up"
        />
        <StatsCard 
          title="Average Order"
          value="₹6,950"
          changeValue={-2.1}
          icon={LineChart}
          trend="down"
        />
        <StatsCard 
          title="Conversion Rate"
          value="3.8%"
          changeValue={8.1}
          icon={CreditCard}
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Region</CardTitle>
          </CardHeader>
          <CardContent>
            <RegionalPerformance />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <AnalyticsChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
