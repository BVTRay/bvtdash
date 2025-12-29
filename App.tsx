import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import { TASK_DATA } from './constants';

const App: React.FC = () => {
  // Default to the first task (Project A) as requested
  const [activeTaskId, setActiveTaskId] = useState<string>('A');

  const activeTask = TASK_DATA.find(t => t.id === activeTaskId) || TASK_DATA[0];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 font-sans text-slate-900 selection:bg-violet-200 selection:text-violet-900">
      <Sidebar 
        tasks={TASK_DATA} 
        activeTaskId={activeTaskId} 
        onSelectTask={setActiveTaskId} 
      />
      
      <Workspace activeTask={activeTask} />
    </div>
  );
};

export default App;
