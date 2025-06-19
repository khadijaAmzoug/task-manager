import React from 'react';
import type {Task, TaskStatus} from '../../types';

type TaskItemProps = {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
};

const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case 'pending':
      return '#f6e58d'; 
    case 'in-progress':
      return '#74b9ff'; 
    case 'completed':
      return '#55efc4'; 
    default:
      return '#dfe6e9';
  }
};

const getPriorityColor = (priority: 'low' | 'medium' | 'high') => {
  switch (priority) {
    case 'low':
      return 'lightgreen';
    case 'medium':
      return 'orange';
    case 'high':
      return 'red';
  }
};


function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as TaskStatus;
    onStatusChange(task.id, newStatus);
  };

  return (
    <li className="bg-white rounded-lg p-4 mb-4 shadow-md border border-pink-200" >
      <h2 className="text-lg font-semibold text-pink-800 mb-1" >{task.title}</h2>
      <p className="text-sm text-gray-600 mb-2" >{task.description}</p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      > 
        <select value={task.status} onChange={handleStatusChange}  
          className="rounded px-2 py-1 text-sm font-medium border border-gray-300"  
           style={{ backgroundColor: getStatusColor(task.status) }} >
          <option value="pending" >Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
         <button onClick={() => onDelete(task.id)}  
             className="ml-auto text-sm font-semibold text-red-500 hover:underline"
         >Delete</button>
      </p>
      <p style={{ marginTop: '0.5rem', color: getPriorityColor(task.priority) }}>Priority: {task.priority} {' '} 
         <span className="text-gray-500 ml-4" >
          Due: {task.dueDate}
        </span>
      </p>

    </li>
  );
}

export default TaskItem;