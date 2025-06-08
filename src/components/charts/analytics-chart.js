import React from 'react';
import PropTypes from 'prop-types';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

export function AnalyticsChart({ 
  title = 'Business Analytics',
  description = 'Performance metrics over time',
  data,
  categories = ['Revenue', 'Orders'],
  isLoading,
  valueFormatter,
  onTimeRangeChange,
  onDownload,
  timeRange,
  className,
  ...props 
}){
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const lineChartData = {
    labels: months,
    datasets: [
      {
        label: 'Revenue (in Lakhs ₹)',
        data: [54.2, 58.7, 62.3, 75.4, 82.1, 89.5],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2.5,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
      {
        label: 'Orders (in thousands)',
        data: [12.5, 14.2, 16.8, 19.5, 22.4, 25.8],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2.5,
        pointRadius: 0,
        pointHoverRadius: 6,
      }
    ],
  };

  const lineChartOptions = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
        borderColor: 'rgb(229, 231, 235)',
        borderWidth: 1,
        padding: 12,
        bodySpacing: 8,
        titleFont: {
          size: 13,
          weight: '600',
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 12,
          family: "'Inter', sans-serif"
        },
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value.toLocaleString()}`;
          }
        }
      }
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          callback: function(value) {
            return value.toLocaleString();
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  const pieChartData = {
    labels: ['UPI', 'Credit Card', 'Debit Card', 'Net Banking', 'Wallet'],
    datasets: [{
      data: [45, 25, 15, 10, 5],
      backgroundColor: [
        'rgb(99, 102, 241)',   // UPI - Indigo
        'rgb(34, 197, 94)',    // Credit Card - Green
        'rgb(244, 63, 94)',    // Debit Card - Rose
        'rgb(234, 179, 8)',    // Net Banking - Yellow
        'rgb(168, 85, 247)',   // Wallet - Purple
      ],
      borderWidth: 0,
      hoverOffset: 4
    }]
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        }
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
        borderColor: 'rgb(229, 231, 235)',
        borderWidth: 1,
        padding: 12,
        titleFont: {
          size: 13,
          weight: '600',
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 12,
          family: "'Inter', sans-serif"
        },
        callbacks: {
          label: function(context) {
            const value = context.raw;
            return `${context.label}: ${value}%`;
          }
        }
      }
    },
    cutout: '60%',
    radius: '90%'
  };

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="h-[300px] w-full">
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
      <div className="h-[300px] w-full">
        <Pie data={pieChartData} options={pieChartOptions} />
      </div>
    </div>
  );
}

AnalyticsChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  valueFormatter: PropTypes.func,
  onTimeRangeChange: PropTypes.func,
  onDownload: PropTypes.func,
  timeRange: PropTypes.string,
  className: PropTypes.string,
};
