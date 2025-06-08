import React from 'react';
import PropTypes from 'prop-types';
import { BaseChart } from './base-chart';

const DEFAULT_DATA = [
  { name: 'UPI', value: 45, color: '#4F46E5' },           // Primary
  { name: 'Credit Card', value: 25, color: '#10B981' },   // Success
  { name: 'Debit Card', value: 15, color: '#F43F5E' },    // Rose
  { name: 'Net Banking', value: 10, color: '#EAB308' },   // Yellow
  { name: 'Wallets', value: 5, color: '#A855F7' }         // Purple
];

export function SamplePieChart({
  title = 'Payment Distribution',
  description = 'Distribution of transactions by payment method',
  data = DEFAULT_DATA,
  isLoading,
  valueFormatter = (value) => `${value}%`,
  className,
  ...props
}){
  return (
    <BaseChart
      title={title}
      description={description}
      data={data}
      type="pie"
      isLoading={isLoading}
      valueFormatter={valueFormatter}
      className={className}
      {...props}
    />
  );
}

SamplePieChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string
    })
  ),
  isLoading: PropTypes.bool,
  valueFormatter: PropTypes.func,
  className: PropTypes.string,
};

export default SamplePieChart;