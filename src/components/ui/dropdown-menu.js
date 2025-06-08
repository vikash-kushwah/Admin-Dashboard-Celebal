import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

/**
 * DropdownMenu component for displaying a dropdown menu
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Dropdown menu content
 * @param {Object} props.className - Additional CSS classes
 * @returns {JSX.Element} DropdownMenu component
 */
export function DropdownMenu({ children, className, ...props }) {
  return (
    <div className={cn('relative inline-block text-left', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * DropdownMenuTrigger component for triggering the dropdown menu
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Trigger content
 * @param {Function} props.onClick - Function to handle click event
 * @param {Object} props.className - Additional CSS classes
 * @returns {JSX.Element} DropdownMenuTrigger component
 */
export function DropdownMenuTrigger({ children, onClick, className, ...props }) {
  return (
    <button
      type="button"
      className={cn('inline-flex w-full justify-center', className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * DropdownMenuContent component for displaying the dropdown menu content
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Dropdown menu content
 * @param {boolean} props.isOpen - Whether the dropdown menu is open
 * @param {Function} props.onClose - Function to handle close event
 * @param {Object} props.className - Additional CSS classes
 * @returns {JSX.Element|null} DropdownMenuContent component
 */
export function DropdownMenuContent({ children, isOpen, onClose, className, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className={cn(
        'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        className
      )}
      {...props}
    >
      <div className="py-1">{children}</div>
    </div>
  );
}

/**
 * DropdownMenuItem component for displaying a dropdown menu item
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Menu item content
 * @param {Function} props.onClick - Function to handle click event
 * @param {Object} props.className - Additional CSS classes
 * @returns {JSX.Element} DropdownMenuItem component
 */
export function DropdownMenuItem({ children, onClick, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-gray-900',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * DropdownMenuLabel component for displaying a dropdown menu label
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Label content
 * @param {Object} props.className - Additional CSS classes
 * @returns {JSX.Element} DropdownMenuLabel component
 */
export function DropdownMenuLabel({ children, className, ...props }) {
  return (
    <span
      className={cn('block px-4 py-2 text-sm font-medium text-gray-700', className)}
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * Dropdown component that combines all dropdown components
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.trigger - Trigger content
 * @param {React.ReactNode} props.children - Dropdown content
 * @param {Object} props.className - Additional CSS classes
 * @returns {JSX.Element} Dropdown component
 */
export function Dropdown({ trigger, children, className, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu className={className} {...props}>
      <DropdownMenuTrigger onClick={toggleDropdown}>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent isOpen={isOpen} onClose={closeDropdown}>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}