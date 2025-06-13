import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function Select({ value, onValueChange, options, disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between rounded-md border px-3 py-2
          text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        `}
        disabled={disabled}
      >
        <span>{selectedOption?.label || 'Select...'}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-md">
          <div className="max-h-60 overflow-auto p-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onValueChange(option.value);
                  setIsOpen(false);
                }}
                className={`
                  w-full rounded-sm px-2 py-1.5 text-sm
                  hover:bg-accent hover:text-accent-foreground
                  ${value === option.value ? 'bg-accent text-accent-foreground' : ''}
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 