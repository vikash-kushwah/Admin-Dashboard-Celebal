import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef(({ 
  className = '',
  variant = 'default',
  size = 'default',
  children,
  disabled,
  type = 'button',
  loading = false,
  ...props 
}, ref) => {
  const baseStyles = `
    inline-flex items-center justify-center rounded-md font-medium
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
    active:translate-y-[1px]
  `;
  
  const variants = {
    default: `
      bg-primary text-primary-foreground 
      hover:bg-primary/90 
      active:bg-primary/95
      shadow-sm hover:shadow
    `,
    destructive: `
      bg-destructive text-destructive-foreground 
      hover:bg-destructive/90 
      active:bg-destructive/95
      shadow-sm hover:shadow
    `,
    outline: `
      border border-input bg-background
      hover:bg-accent hover:text-accent-foreground
      active:bg-accent/90
    `,
    secondary: `
      bg-secondary text-secondary-foreground 
      hover:bg-secondary/80
      active:bg-secondary/90
    `,
    ghost: `
      hover:bg-accent hover:text-accent-foreground
      active:bg-accent/90
    `,
    link: `
      text-primary underline-offset-4 hover:underline
      active:text-primary/90
    `,
    success: `
      bg-success text-success-foreground 
      hover:bg-success/90
      active:bg-success/95
      shadow-sm hover:shadow
    `,
  };

  const sizes = {
    default: 'h-10 py-2 px-4 text-sm',
    xs: 'h-8 px-2 text-xs',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8 text-base',
    xl: 'h-12 px-10 text-lg',
    icon: 'h-10 w-10 p-2',
    'icon-sm': 'h-8 w-8 p-1.5',
    'icon-lg': 'h-12 w-12 p-2.5',
  };

  const loadingClass = loading ? 'relative text-transparent transition-none hover:text-transparent' : '';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${loadingClass} ${className}`}
      ref={ref}
      disabled={disabled || loading}
      {...props}
    >
      {children}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'success']),
  size: PropTypes.oneOf(['default', 'xs', 'sm', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg']),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.string,
};

export { Button };