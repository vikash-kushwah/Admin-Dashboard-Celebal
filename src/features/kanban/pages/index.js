import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Plus } from 'lucide-react';
import { TaskForm } from '../components/task-form';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DroppableColumn } from '../components/droppable-column';

const initialColumns = [
	{
		id: 'todo',
		title: 'To Do',
		tasks: [
			{ id: '1', title: 'Research competitors', description: 'Analyze top 5 competitors', status: 'todo' },
			{ id: '2', title: 'Design system', description: 'Create a consistent design system', status: 'todo' },
			{ id: '3', title: 'User research', description: 'Conduct user interviews', status: 'todo' },
		],
	},
	{
		id: 'in-progress',
		title: 'In Progress',
		tasks: [
			{ id: '4', title: 'API integration', description: 'Integrate with backend API', status: 'in-progress' },
			{ id: '5', title: 'Documentation', description: 'Write technical documentation', status: 'in-progress' },
		],
	},
	{
		id: 'done',
		title: 'Done',
		tasks: [
			{ id: '6', title: 'Setup project', description: 'Initialize project structure', status: 'done' },
			{ id: '7', title: 'Authentication', description: 'Implement user authentication', status: 'done' },
			{ id: '8', title: 'Database design', description: 'Design database schema', status: 'done' },
		],
	},
];

const Kanban = () => {
	const [columns, setColumns] = useState(() => {
		const savedColumns = localStorage.getItem('kanbanColumns');
		return savedColumns ? JSON.parse(savedColumns) : initialColumns;
	});
	const [editingTask, setEditingTask] = useState(null);
	const [showTaskForm, setShowTaskForm] = useState(false);

	useEffect(() => {
		localStorage.setItem('kanbanColumns', JSON.stringify(columns));
	}, [columns]);

	const handleEditTask = (task) => {
		setEditingTask(task);
		setShowTaskForm(true);
	};

	const handleDeleteTask = (taskId) => {
		if (window.confirm('Are you sure you want to delete this task?')) {
			setColumns(columns.map(column => ({
				...column,
				tasks: column.tasks.filter(task => task.id !== taskId)
			})));
		}
	};

	const handleTaskSubmit = (task) => {
		if (editingTask) {
			// Update existing task
			setColumns(columns.map(column => ({
				...column,
				tasks: column.tasks.map(t => 
					t.id === task.id 
						? { ...task, status: task.status } 
						: t
				)
			})));
		} else {
			// Add new task
			setColumns(columns.map(column => {
				if (column.id === task.status) {
					return {
						...column,
						tasks: [...column.tasks, { ...task }]
					};
				}
				return column;
			}));
		}
		setShowTaskForm(false);
		setEditingTask(null);
	};

	const handleDrop = (taskId, newStatus) => {
		const updatedColumns = columns.map(column => {
			// Remove task from source column
			const updatedTasks = column.tasks.filter(task => task.id !== taskId);
			
			if (column.id === newStatus) {
				// Find the task from all columns
				const taskToMove = columns
					.flatMap(col => col.tasks)
					.find(task => task.id === taskId);
				
				if (taskToMove) {
					// Add task to target column with updated status
					return {
						...column,
						tasks: [...updatedTasks, { ...taskToMove, status: newStatus }]
					};
				}
			}
			
			return {
				...column,
				tasks: updatedTasks
			};
		});

		setColumns(updatedColumns);
	};

	return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Kanban Board</h2>
            <p className="text-muted-foreground">
              Manage your tasks and projects with drag and drop.
            </p>
          </div>
          <button
            onClick={() => setShowTaskForm(true)}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Add Task
          </button>
        </div>

        {showTaskForm && (
          <Card className="p-6">
            <CardHeader>
              <CardTitle>{editingTask ? 'Edit Task' : 'New Task'}</CardTitle>
            </CardHeader>
            <CardContent>
              <TaskForm
                task={editingTask}
                onSubmit={handleTaskSubmit}
                onCancel={() => {
                  setShowTaskForm(false);
                  setEditingTask(null);
                }}
              />
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <DroppableColumn
              key={column.id}
              column={column}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Kanban;