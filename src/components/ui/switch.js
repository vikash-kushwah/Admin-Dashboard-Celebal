import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * Switch component for toggling between two states
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.checked - Whether the switch is checked
 * @param {Function} props.onChange - Function to handle change event
 * @param {Object} props.className - Additional CSS classes
 * @returns {JSX.Element} Switch component
 */
export function Switch({ 
  checked = false, 
  onCheckedChange, 
  disabled = false,
  size = 'default',
  className,
  ...props 
}) {
  const sizes = {
    sm: {
      switch: 'h-5 w-9',
      thumb: 'h-4 w-4',
      translate: 'translate-x-4',
    },
    default: {
      switch: 'h-6 w-11',
      thumb: 'h-5 w-5',
      translate: 'translate-x-5',
    },
    lg: {
      switch: 'h-7 w-[52px]',
      thumb: 'h-6 w-6',
      translate: 'translate-x-6',
    },
  };

  const sizeClass = sizes[size];

  return (
    <button
      role="switch"
      aria-checked={checked}
      data-state={checked ? 'checked' : 'unchecked'}
      disabled={disabled}
      onClick={() => onCheckedChange && onCheckedChange(!checked)}
      className={cn(
        'group relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        checked ? 'bg-primary' : 'bg-input',
        sizeClass.switch,
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
          'group-hover:scale-110',
          checked ? sizeClass.translate : 'translate-x-0',
          sizeClass.thumb
        )}
        style={{
          transform: `${checked ? `translateX(${parseInt(sizeClass.switch.split('w-')[1]) - parseInt(sizeClass.thumb.split('w-')[1]) - 4}px)` : 'translateX(2px)'}`,
        }}
      />
    </button>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  className: PropTypes.string,
};

export default Switch;