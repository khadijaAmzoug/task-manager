import React from 'react';
import type {TaskFilterProps} from '../../types';


function TaskFilter ({onFilterChange}: TaskFilterProps) {
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        onFilterChange({status:e.target.value as any})
    };

    const handlePriorityChange= (e: React.ChangeEvent<HTMLSelectElement>)=> {
        onFilterChange({priority: e.target.value as any})
    };
    return(
         <div className="mb-4 p-4 bg-white rounded-lg shadow" >
      <h3 className="text-pink-700 font-semibold mb-2"  >Filter Tasks</h3>
  <div className="flex flex-wrap gap-4">
      <label className="flex flex-col text-sm text-gray-700" >
        Status:
        <select  className="mt-1 border border-gray-300 rounded px-2 py-1" onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label className="flex flex-col text-sm text-gray-700">
        Priority:
        <select className="mt-1 border border-gray-300 rounded px-2 py-1"  onChange={handlePriorityChange}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      </div>
    </div>
    )
}
export default TaskFilter;