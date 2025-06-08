import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { DraggableTaskCard } from './draggable-task-card';

export function DroppableColumn({ column, onEdit, onDelete, onDrop }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => onDrop(item.id, column.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`space-y-4 ${isOver ? 'bg-accent/50 rounded-lg p-2' : ''}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{column.title}</h3>
        <span className="text-muted-foreground text-sm">
          {column.tasks.length} tasks
        </span>
      </div>
      
      <div className="space-y-4 min-h-[100px]">
        {column.tasks.map((task) => (
          <DraggableTaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

DroppableColumn.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};
