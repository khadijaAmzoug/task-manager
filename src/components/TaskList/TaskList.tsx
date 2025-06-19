import React, { useState } from 'react';
import type {Task, TaskStatus} from '../../types';
import TaskItem from '../TaskItem/TaskItem';
import TaskFilter from '../TaskFilter/TaskFilter';


function TaskList (){ 
      const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

const   [tasks, setTasks] = useState<Task[]>([
    {id:"1", title: "Task1",description: "Working on Lab1", status: "pending",  priority: 'high',  dueDate:"20/06/2025" },
    {id:"2", title: "Task2",description: "Working on Lab1", status: "in-progress",  priority: 'high',  dueDate:"20/06/2025" },
    {id:"3", title: "Task3",description: "Working on Lab1", status: "in-progress",  priority: 'high',  dueDate:"20/06/2025" }
]);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  }; 

  const handleDelete = (taskId: string) => {
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  setTasks(updatedTasks);
};


const filteredTasks = tasks.filter(task => {
    const statusMatches = !filters.status || task.status === filters.status;
    const priorityMatches = !filters.priority || task.priority === filters.priority;
    return statusMatches && priorityMatches;
  });

    return (
        <div className="bg-white rounded-xl p-6 shadow-lg" >
           <h2 className="text-2xl font-bold text-pink-700 mb-4" >Task List</h2>
      <div className="mb-6">
        <TaskFilter onFilterChange={setFilters} />
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onStatusChange={handleStatusChange} onDelete={handleDelete} />
        ))}
      </ul>
        </div>
    )
}
export default TaskList;