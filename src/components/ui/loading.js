import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const Loading = ({ 
  size = 'default', 
  variant = 'primary',
  className = '',
  text = 'Loading...',
  showText = false
}) => {
  const sizes = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    default: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const variants = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    white: 'border-white',
    black: 'border-black',
  };

  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    default: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      <div
        className={cn(
          'relative animate-spin rounded-full border-2',
          'border-t-transparent',
          sizes[size],
          variants[variant]
        )}
        style={{ 
          animationDuration: '0.6s',
          animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        role="status"
        aria-label="loading"
      >
        <svg 
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="50" cy="50" r="48" />
        </svg>
      </div>
      {showText && (
        <p className={cn(
          'text-muted-foreground animate-pulse',
          textSizes[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'default', 'lg', 'xl']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'white', 'black']),
  className: PropTypes.string,
  text: PropTypes.string,
  showText: PropTypes.bool,
};

export { Loading };