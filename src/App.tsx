import React from 'react';
import TaskList from './components/TaskList/TaskList';

function App() {
return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">My Task App</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;

