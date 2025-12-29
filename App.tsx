import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import { TASK_DATA, FINANCE_DATA } from './constants';

const App: React.FC = () => {
  const [currentModule, setCurrentModule] = useState<'project' | 'finance'>('project');
  
  // Decide which dataset to use based on the current module
  const currentTasks = currentModule === 'project' ? TASK_DATA : FINANCE_DATA;

  // Default to the first task of the selected module
  const [activeTaskId, setActiveTaskId] = useState<string>(currentTasks[0].id);

  // When module switches, reset active task to the first one in the new list
  useEffect(() => {
    setActiveTaskId(currentTasks[0].id);
  }, [currentModule]);

  // Find the active task object
  const activeTask = currentTasks.find(t => t.id === activeTaskId) || currentTasks[0];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 font-sans text-slate-900 selection:bg-violet-200 selection:text-violet-900">
      <Sidebar 
        tasks={currentTasks} 
        activeTaskId={activeTaskId} 
        onSelectTask={setActiveTaskId}
        currentModule={currentModule}
        onSwitchModule={setCurrentModule}
      />
      
      <Workspace activeTask={activeTask} />
    </div>
  );
};

export default App;