import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * Switch component for toggling between two states
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.checked - Whether the switch is checked
 * @param {Function} props.onCheckedChange - Function to handle change event
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

  const handleClick = () => {
    if (!disabled && onCheckedChange) {
      onCheckedChange(!checked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-ring focus-visible:ring-offset-2
        ${checked ? 'bg-primary' : 'bg-input'}
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-background
          transition-transform
          ${checked ? 'translate-x-6' : 'translate-x-1'}
        `}
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