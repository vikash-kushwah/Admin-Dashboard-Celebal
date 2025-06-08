import React from 'react';
import PropTypes from 'prop-types';
import { formatActivityDate } from '../../lib/activity-utils';

export function ActivityTimeline({ activities, className }) {
  return (
    <div className={`space-y-4 ${className || ''}`}>
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <div className="mt-1 rounded-full bg-primary/10 p-2">
            {React.createElement(activity.icon, {
              className: 'h-4 w-4 text-primary',
            })}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                {activity.user.name}{' '}
                <span className="text-muted-foreground">{activity.action}</span>{' '}
                {activity.target}
              </p>              <span className="text-xs text-muted-foreground">
                {formatActivityDate(activity.timestamp)}
              </span>
            </div>
            {activity.details && (
              <p className="text-sm text-muted-foreground mt-1">
                {activity.details}
              </p>
            )}
            {activity.metadata && (
              <div className="rounded-md bg-muted/50 p-2 mt-2">
                <pre className="text-xs">
                  {JSON.stringify(activity.metadata, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

ActivityTimeline.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      action: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      details: PropTypes.string,
      metadata: PropTypes.object,
    })
  ).isRequired,
  className: PropTypes.string,
};
