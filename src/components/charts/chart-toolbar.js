import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Calendar, ChevronDown, Download } from 'lucide-react';

const MENU_ITEMS = [
  { label: '7 Days', value: '7d' },
  { label: '30 Days', value: '30d' },
  { label: '3 Months', value: '3m' },
  { label: '1 Year', value: '1y' },
];

export function ChartToolbar({
  onTimeRangeChange,
  onDownload,
  timeRange = '7d',
  className,
}) {
  // Find the current time range label
  const currentRange = MENU_ITEMS.find((item) => item.value === timeRange) || MENU_ITEMS[0];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-sm font-medium"
          >
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="hidden sm:inline">{currentRange.label}</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          {MENU_ITEMS.map(({ label, value }) => (
            <DropdownMenuItem
              key={value}
              onClick={() => onTimeRangeChange?.(value)}
              className="text-sm"
            >
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {onDownload && (
        <Button
          variant="outline"
          size="sm"
          onClick={onDownload}
          className="h-8 gap-1.5 text-sm font-medium"
        >
          <Download className="h-4 w-4 text-muted-foreground" />
          <span className="hidden sm:inline">Download</span>
        </Button>
      )}
    </div>
  );
}

ChartToolbar.propTypes = {
  onTimeRangeChange: PropTypes.func,
  onDownload: PropTypes.func,
  timeRange: PropTypes.oneOf(['7d', '30d', '3m', '1y']),
  className: PropTypes.string,
};
