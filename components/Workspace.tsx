import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, CheckCircle2, XCircle, FileText, Calendar, Wallet, 
  Building2, MessageSquare, ArrowRightLeft, Users, CreditCard, 
  Plus, UserCircle2, AlertCircle 
} from 'lucide-react';
import { TaskItem, TaskData } from '../types';

interface WorkspaceProps {
  activeTask: TaskItem;
}

// --- Sub-components for specific cards ---

// 1. Initiation Card (Project A)
const InitiationCard = ({ data }: { data: Extract<TaskData, { type: 'initiation' }> }) => (
  <>
    <div className="grid grid-cols-3 gap-px bg-slate-100">
      <div className="bg-white p-6 hover:bg-slate-50/50 transition-colors group">
        <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm font-medium">
          <Wallet size={16} className="text-slate-400 group-hover:text-violet-500 transition-colors" />
          Budget Limit
        </div>
        <p className="text-xl font-semibold text-slate-800">{data.budget}</p>
      </div>
      <div className="bg-white p-6 hover:bg-slate-50/50 transition-colors group">
        <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm font-medium">
          <Building2 size={16} className="text-slate-400 group-hover:text-violet-500 transition-colors" />
          Client
        </div>
        <p className="text-xl font-semibold text-slate-800">{data.client}</p>
      </div>
      <div className="bg-white p-6 hover:bg-slate-50/50 transition-colors group">
        <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm font-medium">
          <Calendar size={16} className="text-slate-400 group-hover:text-violet-500 transition-colors" />
          Cycle
        </div>
        <p className="text-xl font-semibold text-slate-800">{data.cycle}</p>
      </div>
    </div>
    <ApprovalActionArea label="Confirm Project Initiation" />
  </>
);

// 2. Info Update Card (Project B)
const UpdateCard = ({ data }: { data: Extract<TaskData, { type: 'update' }> }) => (
  <div className="p-8">
    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6 flex gap-3 items-start">
      <AlertCircle className="text-amber-600 mt-0.5" size={18} />
      <div>
        <h4 className="text-sm font-bold text-amber-800 mb-1">Update Justification</h4>
        <p className="text-sm text-amber-700">{data.reason}</p>
      </div>
    </div>

    <div className="flex items-center gap-8 mb-8">
      <div className="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Original Value</div>
        <div className="text-lg font-mono text-slate-500 line-through">{data.oldValue}</div>
      </div>
      <ArrowRightLeft className="text-slate-300" size={24} />
      <div className="flex-1 p-4 rounded-xl bg-violet-50 border border-violet-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-1.5 bg-violet-100 rounded-bl-lg">
          <span className="text-[10px] font-bold text-violet-700 uppercase">New</span>
        </div>
        <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">Updated Value</div>
        <div className="text-lg font-mono font-bold text-violet-700">{data.newValue}</div>
      </div>
    </div>
    <div className="text-sm text-slate-500 mb-6">
      Field Changed: <span className="font-semibold text-slate-800">{data.changeField}</span>
    </div>
    <ApprovalActionArea label="Acknowledge Change" />
  </div>
);

// 3. Team Setup Card (Project C)
const TeamSetupCard = ({ data }: { data: Extract<TaskData, { type: 'team_setup' }> }) => (
  <div className="p-8">
    <div className="mb-6">
      <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
        <Users size={16} /> Core Members Assignment
      </h3>
      <div className="space-y-3">
        {data.requiredRoles.map((role, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-violet-200 hover:shadow-sm transition-all group">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${role.status === 'filled' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-400 dashed border-2 border-slate-300'}`}>
                <UserCircle2 size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{role.role}</p>
                <p className="text-xs text-slate-500">{role.status === 'filled' ? 'Assigned' : 'Pending Assignment'}</p>
              </div>
            </div>
            {role.status === 'filled' ? (
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
                {role.candidate}
              </div>
            ) : (
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:text-violet-600 hover:border-violet-200 transition-colors">
                <Plus size={14} /> Assign
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
    <ApprovalActionArea label="Confirm Team Composition" />
  </div>
);

// 4. Finance Request Card (Project D)
const FinanceCard = ({ data }: { data: Extract<TaskData, { type: 'finance' }> }) => (
  <div className="p-8">
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white mb-8 shadow-xl shadow-slate-200">
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Request Amount</p>
          <div className="text-3xl font-bold tracking-tight">{data.amount}</div>
        </div>
        <CreditCard className="text-slate-500" />
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-slate-500 text-xs mb-1">Usage Category</p>
          <p className="font-medium text-slate-200">{data.usage}</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs mb-1">Target Account</p>
          <p className="font-mono text-slate-200">{data.bankAccount}</p>
        </div>
      </div>
    </div>
    <ApprovalActionArea label="Approve Disbursement" />
  </div>
);

// Common Action Area Component
const ApprovalActionArea = ({ label }: { label: string }) => (
  <div className="px-8 pb-8 pt-0">
    <label className="block text-sm font-medium text-slate-700 mb-3 flex items-center gap-2">
      <MessageSquare size={16} className="text-slate-400" />
      Remarks
    </label>
    <textarea 
      className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-700 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all shadow-sm mb-6 resize-none h-24 text-sm placeholder:text-slate-400"
      placeholder="Optional comments..."
    ></textarea>
    
    <div className="flex items-center gap-4">
      <button className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm">
        <CheckCircle2 size={16} />
        {label}
      </button>
      
      <button className="flex-1 py-3 px-6 rounded-xl border border-slate-200 text-slate-600 hover:bg-white hover:border-red-200 hover:text-red-600 font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-transparent text-sm">
        <XCircle size={16} />
        Reject / Return
      </button>
    </div>
  </div>
);


const Workspace: React.FC<WorkspaceProps> = ({ activeTask }) => {
  return (
    <div className="flex-1 h-full flex flex-col bg-slate-50/50 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Top Navigation & Breadcrumbs */}
      <header className="px-8 py-6 flex items-center justify-between z-10">
        <nav className="flex items-center space-x-2 text-sm text-slate-500">
          <span className="hover:text-slate-800 cursor-pointer transition-colors">Projects</span>
          <ChevronRight size={14} />
          <span className="hover:text-slate-800 cursor-pointer transition-colors font-medium text-slate-800">
            {activeTask.projectTitle.split('：')[0]}
          </span>
          <ChevronRight size={14} />
          <span className="text-slate-400">{activeTask.category}</span>
          <ChevronRight size={14} />
          <span className="px-2 py-0.5 rounded-md bg-violet-100 text-violet-700 font-medium text-xs">
            {activeTask.statusLabel.replace(/[🔴🟠🔵]/g, '').trim()}
          </span>
        </nav>
        
        <div className="text-xs font-mono text-slate-400">ID: {activeTask.id}-2024-X92</div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-8 pb-12 z-10 scroll-smooth">
        
        {/* Dynamic Progress Stepper */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative flex items-center justify-between w-full">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-200 -z-10" />
            
            {activeTask.steps.map((step, index) => {
              const isCompleted = step.status === 'completed';
              const isCurrent = step.status === 'current';
              
              return (
                <div key={index} className="flex flex-col items-center gap-2 bg-slate-50 px-2 z-10">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300
                    ${isCompleted ? 'bg-green-500 border-green-500 text-white' : ''}
                    ${isCurrent ? 'bg-white border-violet-600 text-violet-600 shadow-[0_0_0_4px_rgba(124,58,237,0.2)]' : ''}
                    ${step.status === 'upcoming' ? 'bg-white border-slate-300 text-slate-300' : ''}
                  `}>
                    {isCompleted ? <CheckCircle2 size={16} /> : isCurrent ? <div className="w-2.5 h-2.5 rounded-full bg-violet-600" /> : <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />}
                  </div>
                  <span className={`text-xs font-medium whitespace-nowrap ${isCurrent ? 'text-violet-700' : isCompleted ? 'text-green-600' : 'text-slate-400'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Action Card - Dynamic Content */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeTask.id}
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
          >
            {/* Card Header */}
            <div className="px-8 py-8 border-b border-slate-100 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border 
                    ${activeTask.data.type === 'update' ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                      activeTask.data.type === 'finance' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                      'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
                    {activeTask.data.type.replace('_', ' ')}
                  </span>
                  <span className="text-slate-400 text-sm">Updated 2h ago</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 leading-tight">
                  {activeTask.projectTitle.split('：')[1]}
                </h1>
                <p className="text-slate-500 mt-1">{activeTask.description}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <FileText size={20} />
              </button>
            </div>

            {/* Render Specific Content based on Data Type */}
            {activeTask.data.type === 'initiation' && <InitiationCard data={activeTask.data} />}
            {activeTask.data.type === 'update' && <UpdateCard data={activeTask.data} />}
            {activeTask.data.type === 'team_setup' && <TeamSetupCard data={activeTask.data} />}
            {activeTask.data.type === 'finance' && <FinanceCard data={activeTask.data} />}

          </motion.div>
        </AnimatePresence>
        
        {/* Footer info */}
        <div className="max-w-4xl mx-auto mt-6 text-center text-xs text-slate-400">
          Last updated by System at 10:42 AM • 不恭工作台 v2.4
        </div>
      </main>
    </div>
  );
};

export default Workspace;