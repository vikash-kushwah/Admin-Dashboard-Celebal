import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ChartToolbar } from './chart-toolbar';
import { Skeleton } from '../ui/skeleton';

const CHART_COLORS = [
  '#4F46E5', // Primary 
  '#06B6D4', // Secondary
  '#10B981', // Success
  '#F59E0B', // Warning
  '#EF4444', // Error
  '#8B5CF6', // Purple
  '#EC4899'  // Pink
];

const CustomTooltip = ({ active, payload, label, valueFormatter }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border bg-background p-3 shadow-md">
      <div className="mb-2 font-medium">{label}</div>
      <div className="grid gap-2">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-muted-foreground capitalize">
                {entry.dataKey}
              </span>
            </div>
            <span className="font-medium">
              {valueFormatter ? valueFormatter(entry.value) : entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-[350px] w-full" />
  </div>
);

export function BaseChart({
  title,
  description,
  data = [],
  type = 'line',
  categories = [],
  valueFormatter = (value) => {
    // Format large numbers in Indian format and handle currency
    if (typeof value === 'number') {
      if (value >= 10000000) { // Convert to Crores
        return `₹${(value / 10000000).toFixed(2)}Cr`;
      } else if (value >= 100000) { // Convert to Lakhs
        return `₹${(value / 100000).toFixed(2)}L`;
      } else if (value >= 1000) { // Format thousands
        return `₹${value.toLocaleString('en-IN')}`;
      }
    }
    return value;
  },
  className,
  isLoading = false,
  onTimeRangeChange,
  onDownload,
  timeRange,
  ...props
}) {
  if (isLoading) {
    return (
      <Card className={className} {...props}>
        <CardContent className="pt-6">
          <LoadingSkeleton />
        </CardContent>
      </Card>
    );
  }

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 20, right: 25, left: 25, bottom: 20 },
    };

    const axisProps = {
      tickLine: false,
      axisLine: { stroke: '#E5E7EB', strokeWidth: 1 },
      className: "text-xs text-muted-foreground",
      tickMargin: 10
    };

    switch (type) {
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" vertical={false} />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis {...axisProps} width={60} />
            <Tooltip 
              content={(props) => <CustomTooltip {...props} valueFormatter={valueFormatter} />}
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
            />
            <Legend 
              verticalAlign="bottom"
              height={36}
              formatter={(value) => <span className="text-sm capitalize">{value}</span>}
            />
            {categories.map((category, index) => (
              <Bar 
                key={category}
                dataKey={category}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
            ))}
          </BarChart>
        );

      case 'pie':
        return (
          <PieChart {...commonProps}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="80%"
              innerRadius="50%"
              dataKey="value"
              label={(entry) => entry.name}
              cornerRadius={4}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={entry.name} 
                  fill={entry.color || CHART_COLORS[index % CHART_COLORS.length]}
                  stroke="none" 
                />
              ))}
            </Pie>
            <Tooltip content={(props) => <CustomTooltip {...props} valueFormatter={valueFormatter} />} />
            <Legend 
              layout="vertical" 
              align="right"
              verticalAlign="middle"
              formatter={(value) => <span className="text-sm">{value}</span>}
              wrapperStyle={{ paddingLeft: '20px' }}
            />
          </PieChart>
        );

      case 'line':
      default:
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" vertical={false} />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis {...axisProps} width={60} />
            <Tooltip content={(props) => <CustomTooltip {...props} valueFormatter={valueFormatter} />} />
            <Legend 
              verticalAlign="bottom"
              height={36}
              formatter={(value) => <span className="text-sm capitalize">{value}</span>}
            />
            {categories.map((category, index) => (
              <Line
                key={category}
                type="monotone"
                dataKey={category}
                stroke={CHART_COLORS[index % CHART_COLORS.length]}
                strokeWidth={2.5}
                dot={false}
                activeDot={{
                  r: 6,
                  className: "fill-background stroke-2",
                }}
              />
            ))}
          </LineChart>
        );
    }
  };

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          {onTimeRangeChange && (
            <ChartToolbar
              onTimeRangeChange={onTimeRangeChange}
              onDownload={onDownload}
              timeRange={timeRange}
              className="mt-0"
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

BaseChart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.oneOf(['line', 'bar', 'pie']),
  categories: PropTypes.arrayOf(PropTypes.string),
  valueFormatter: PropTypes.func,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  onTimeRangeChange: PropTypes.func,
  onDownload: PropTypes.func,
  timeRange: PropTypes.string,
};
