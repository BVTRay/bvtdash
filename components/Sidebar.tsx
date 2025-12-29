import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Search, Filter, BellDot, ChevronRight } from 'lucide-react';
import { TaskItem, TaskStatus } from '../types';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  tasks: TaskItem[];
  activeTaskId: string;
  onSelectTask: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tasks, activeTaskId, onSelectTask }) => {
  return (
    <div className="flex flex-col h-full w-80 bg-white/80 backdrop-blur-xl border-r border-slate-200 shadow-xl shadow-slate-200/50 z-20">
      {/* Sidebar Header */}
      <div className="p-6 pb-2">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-200">
              B
            </div>
            <span className="font-bold text-lg text-slate-800 tracking-tight">不恭工作台</span>
          </div>
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors">
            <BellDot size={18} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search tasks..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400"
          />
        </div>
        
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
          <span>Task Inbox</span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">
            <Filter size={12} />
            <span>Filter</span>
          </div>
        </div>
      </div>

      {/* Task List - Scrollable Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-6">
        {CATEGORIES.map((category, catIndex) => {
          const categoryTasks = tasks.filter(t => t.category === category);
          if (categoryTasks.length === 0) return null;

          return (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 pl-2 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                {category}
              </h3>
              <div className="space-y-1">
                {categoryTasks.map((task) => {
                  const isActive = task.id === activeTaskId;
                  // Simplified display logic
                  const projectName = task.projectTitle.split('：')[1] || task.projectTitle;
                  
                  return (
                    <motion.div
                      key={task.id}
                      layoutId={isActive ? "active-glow" : undefined}
                      onClick={() => onSelectTask(task.id)}
                      className={`
                        group relative px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 flex items-center gap-3
                        ${isActive 
                          ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-300/40' 
                          : 'bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 text-slate-700 shadow-sm'}
                      `}
                    >
                       {/* Status Dot Indicator (Left) */}
                       <div className={`
                         w-1.5 h-1.5 rounded-full shrink-0
                         ${isActive ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 
                           task.statusType === TaskStatus.URGENT ? 'bg-red-500' :
                           task.statusType === TaskStatus.WARNING ? 'bg-orange-400' : 'bg-blue-400'
                         }
                       `} />

                       <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center mb-0.5">
                            <span className={`text-[10px] font-mono opacity-70 ${isActive ? 'text-violet-200' : 'text-slate-400'}`}>
                              #{task.id} • 2h
                            </span>
                          </div>
                          <div className={`text-sm font-medium truncate leading-tight ${isActive ? 'text-white' : 'text-slate-700'}`}>
                             {projectName}
                          </div>
                          <div className={`text-[10px] truncate mt-1 ${isActive ? 'text-violet-100' : 'text-slate-400'}`}>
                             {task.statusLabel}
                          </div>
                       </div>
                       
                       {isActive && (
                         <ChevronRight size={14} className="text-violet-200 animate-pulse" />
                       )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* User Profile Footer */}
      <div className="p-4 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-100 to-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs shadow-inner border border-white">
            JD
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-700">Jane Doe</p>
            <p className="text-[10px] text-slate-400">Senior Producer</p>
          </div>
          <Layers size={14} className="text-slate-400 hover:text-indigo-500 transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;