import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../ui/card';
import { cn } from '../../lib/utils';

export function StatsCard({ 
  title, 
  value, 
  icon: Icon,
  trend = "neutral",
  changeValue,
  changeDuration = "vs. last month",
  className,
  ...props 
}) {
  const isPositive = changeValue > 0;
  const changeDisplay = Math.abs(changeValue).toFixed(1);

  return (
    <Card 
      className={cn("transition-all duration-200 ease-in-out", className)}
      {...props}
    >
      <div className="p-6 flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            {title}
          </span>
          {Icon && (
            <div className="p-2 rounded-full bg-background/50">
              <Icon className="h-4 w-4 text-foreground/80" />
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold tracking-tight">
            {value}
          </h2>
          {changeValue !== undefined && (
            <p className="flex items-center text-xs">
              <span className={cn(
                "inline-flex items-center gap-0.5",
                isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              )}>
                {isPositive ? "↑" : "↓"} {changeDisplay}%
              </span>
              <span className="text-muted-foreground ml-1">
                {changeDuration}
              </span>
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  trend: PropTypes.oneOf(['up', 'down', 'neutral']),
  changeValue: PropTypes.number,
  changeDuration: PropTypes.string,
  className: PropTypes.string,
};

// Legacy component removed as we're using the new StatsCard implementation
