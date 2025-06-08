import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

/**
 * Badge variants
 */
const badgeVariants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline: 'text-foreground border border-input hover:bg-accent hover:text-accent-foreground',
};

/**
 * Badge component for displaying status indicators
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Badge variant (default, secondary, destructive, outline, success, warning, info)
 * @param {Object} props.className - Additional CSS classes
 * @returns {JSX.Element} Badge component
 */
export function Badge({ children, className, variant = 'default', ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'secondary', 'destructive', 'outline']),
  className: PropTypes.string,
};

export { badgeVariants };