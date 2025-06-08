import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const regionalData = [
  {
    region: 'North India',
    metrics: {
      revenue: '₹85.4L',
      orders: '2,450',
      growth: '+12.5%',
    },
    topCategories: ['Electronics', 'Fashion', 'Home']
  },
  {
    region: 'South India',
    metrics: {
      revenue: '₹92.7L',
      orders: '2,780',
      growth: '+15.2%',
    },
    topCategories: ['Electronics', 'Groceries', 'Fashion']
  },
  {
    region: 'East India',
    metrics: {
      revenue: '₹68.3L',
      orders: '1,890',
      growth: '+8.7%',
    },
    topCategories: ['Fashion', 'Electronics', 'Books']
  },
  {
    region: 'West India',
    metrics: {
      revenue: '₹78.9L',
      orders: '2,340',
      growth: '+11.3%',
    },
    topCategories: ['Fashion', 'Electronics', 'Beauty']
  },
  {
    region: 'Central India',
    metrics: {
      revenue: '₹45.6L',
      orders: '1,560',
      growth: '+9.5%',
    },
    topCategories: ['Electronics', 'Home', 'Fashion']
  }
];

export function RegionalPerformance() {
  const data = {
    labels: regionalData.map(item => item.region),
    datasets: [
      {
        label: 'Revenue (Lakhs ₹)',
        data: regionalData.map(item => item.metrics.revenue.replace('₹', '').replace('L', '')),
        backgroundColor: 'rgb(99, 102, 241)',
        borderRadius: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.raw;
            return `Revenue: ₹${value}L`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function(value) {
            return `₹${value}L`;
          },
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Regional Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {regionalData.map((region) => (
            <div key={region.region} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div>
                <h3 className="font-medium">{region.region}</h3>
                <div className="mt-1 text-sm text-muted-foreground">
                  Top Categories: {region.topCategories.join(', ')}
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="text-right">
                  <div className="font-medium">{region.metrics.revenue}</div>
                  <div className="text-muted-foreground">Revenue</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{region.metrics.orders}</div>
                  <div className="text-muted-foreground">Orders</div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${
                    region.metrics.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {region.metrics.growth}
                  </div>
                  <div className="text-muted-foreground">Growth</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: '300px', marginTop: '24px' }}>
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
