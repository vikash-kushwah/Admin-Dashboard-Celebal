import React from 'react';
import PropTypes from 'prop-types';
import { BaseChart } from './base-chart';

const DEFAULT_DATA = [
  { name: 'North', sales: 8540000, returns: 425000 },  // ₹85.4L, ₹4.25L
  { name: 'South', sales: 9270000, returns: 463500 },  // ₹92.7L, ₹4.63L
  { name: 'East', sales: 6830000, returns: 341500 },   // ₹68.3L, ₹3.41L
  { name: 'West', sales: 7890000, returns: 394500 },   // ₹78.9L, ₹3.94L
  { name: 'Central', sales: 4560000, returns: 228000 }, // ₹45.6L, ₹2.28L
];

export function SampleBarChart({
  title = 'Regional Sales Overview',
  description = 'Regional sales and returns breakdown',
  data = DEFAULT_DATA,
  categories = ['sales', 'returns'],
  isLoading,
  valueFormatter = (value) => {
    if (value >= 1000000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(1)}K`;
    }
    return `₹${value}`;
  },
  className,
  ...props
}) {
  return (
    <BaseChart
      title={title}
      description={description}
      data={data}
      type="bar"
      categories={categories}
      isLoading={isLoading}
      valueFormatter={valueFormatter}
      className={className}
      {...props}
    />
  );
}

SampleBarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  valueFormatter: PropTypes.func,
  className: PropTypes.string,
};