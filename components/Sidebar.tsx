import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Search, Filter, LayoutGrid, ChevronRight, Sparkles, FolderKanban, Banknote } from 'lucide-react';
import { TaskItem, TaskStatus } from '../types';

interface SidebarProps {
  tasks: TaskItem[];
  activeTaskId: string;
  onSelectTask: (id: string) => void;
  currentModule: 'project' | 'finance';
  onSwitchModule: (module: 'project' | 'finance') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tasks, activeTaskId, onSelectTask, currentModule, onSwitchModule }) => {
  return (
    <div className="flex flex-col h-full w-80 bg-white/80 backdrop-blur-xl border-r border-slate-200 shadow-xl shadow-slate-200/50 z-20">
      {/* Sidebar Header */}
      <div className="p-6 pb-2">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 ${currentModule === 'project' ? 'from-violet-600 to-indigo-600 shadow-violet-200' : 'from-emerald-600 to-teal-600 shadow-emerald-200'}`}>
              B
            </div>
            <span className="font-bold text-lg text-slate-800 tracking-tight">不恭工作台</span>
          </div>
          
          {/* Module Switcher Button */}
          <div className="relative group">
             <button 
               onClick={() => onSwitchModule(currentModule === 'project' ? 'finance' : 'project')}
               className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 hover:border-slate-200 text-slate-500 hover:text-slate-800 transition-all shadow-sm active:scale-95"
               title="Switch Workspace"
             >
               <LayoutGrid size={18} />
             </button>
             {/* Tooltip hint */}
             <div className="absolute right-0 top-full mt-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
               Switch to {currentModule === 'project' ? 'Finance' : 'Projects'}
             </div>
          </div>
        </div>

        {/* Module Indicator / Title */}
        <div className="mb-4 flex items-center gap-2">
           {currentModule === 'project' ? (
             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-100">
               <FolderKanban size={12} /> Project Mgmt
             </span>
           ) : (
             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-100">
               <Banknote size={12} /> Finance Center
             </span>
           )}
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder={currentModule === 'project' ? "Search projects..." : "Search financial docs..."}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400"
          />
        </div>
        
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
          <span>{currentModule === 'project' ? 'Task Inbox' : 'Workflow Inbox'}</span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">
            <Filter size={12} />
            <span>Filter</span>
          </div>
        </div>
      </div>

      {/* Task List - Scrollable Area - FLATTENED */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-2">
        {tasks.map((task, index) => {
          const isActive = task.id === activeTaskId;
          // Simplified display logic
          const projectName = task.projectTitle.includes('：') 
            ? task.projectTitle.split('：')[1] 
            : task.projectTitle;
          const isSpecial = task.id === 'NEW';

          // Theme Color based on module
          const activeClass = currentModule === 'project' 
            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 shadow-indigo-300/40' 
            : 'bg-gradient-to-r from-emerald-600 to-teal-600 shadow-emerald-300/40';

          const specialClass = 'bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 text-amber-900';

          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              layoutId={isActive ? "active-glow" : undefined}
              onClick={() => onSelectTask(task.id)}
              className={`
                group relative px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 flex items-center gap-3
                ${isActive 
                  ? `${activeClass} text-white shadow-lg` 
                  : isSpecial 
                    ? specialClass
                    : 'bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 text-slate-700 shadow-sm'}
              `}
            >
                {/* Status Dot Indicator (Left) */}
                <div className={`
                  w-1.5 h-1.5 rounded-full shrink-0
                  ${isActive ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 
                    isSpecial ? 'bg-amber-500 animate-pulse' :
                    task.statusType === TaskStatus.URGENT ? 'bg-red-500' :
                    task.statusType === TaskStatus.WARNING ? 'bg-orange-400' : 'bg-blue-400'
                  }
                `} />

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className={`text-[10px] font-mono opacity-70 ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                      {isSpecial ? <Sparkles size={10} className="inline mr-1 text-amber-600" /> : null}
                      #{task.id} • {isSpecial ? 'Now' : '2h'}
                    </span>
                  </div>
                  <div className={`text-sm font-medium truncate leading-tight ${isActive ? 'text-white' : 'text-slate-700'}`}>
                      {projectName}
                  </div>
                  <div className={`text-[10px] truncate mt-1 ${isActive ? 'text-white/60' : 'text-slate-400'}`}>
                      {task.statusLabel}
                  </div>
                </div>
                
                {isActive && (
                  <ChevronRight size={14} className="text-white/80 animate-pulse" />
                )}
            </motion.div>
          );
        })}
      </div>
      
      {/* User Profile Footer */}
      <div className="p-4 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-tr flex items-center justify-center font-bold text-xs shadow-inner border border-white ${currentModule === 'project' ? 'from-violet-100 to-indigo-100 text-indigo-700' : 'from-emerald-100 to-teal-100 text-emerald-700'}`}>
            JD
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-700">Jane Doe</p>
            <p className="text-[10px] text-slate-400">Senior Producer</p>
          </div>
          <Layers size={14} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;