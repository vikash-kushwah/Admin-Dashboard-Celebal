import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Edit2, Trash2, MoreVertical } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';

export function KanbanCard({ task, onEdit, onDelete }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <Card className="cursor-move group relative">
      <div 
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <button className="p-1 hover:bg-accent rounded-md">
          <MoreVertical className="h-4 w-4 text-muted-foreground" />
        </button>
        {showActions && (
          <div className="absolute right-0 top-full mt-1 bg-background border rounded-md shadow-md py-1 min-w-[120px]">
            <button
              className="w-full px-3 py-1.5 text-sm text-left hover:bg-accent flex items-center gap-2"
              onClick={() => onEdit(task)}
            >
              <Edit2 className="h-4 w-4" />
              Edit
            </button>
            <button
              className="w-full px-3 py-1.5 text-sm text-left text-destructive hover:bg-accent flex items-center gap-2"
              onClick={() => onDelete(task.id)}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">
          {task.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xs text-muted-foreground">
        {task.description}
      </CardContent>
    </Card>
  );
}

KanbanCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
