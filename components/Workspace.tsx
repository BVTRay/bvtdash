import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, CheckCircle2, XCircle, FileText, Calendar, Wallet, 
  Building2, MessageSquare, ArrowRightLeft, Users, CreditCard, 
  Plus, UserCircle2, AlertCircle, Sparkles, Send,
  ScrollText, ShoppingCart, Calculator, Receipt, Download
} from 'lucide-react';
import { TaskItem, TaskData } from '../types';

interface WorkspaceProps {
  activeTask: TaskItem;
}

// --- 0. New Project Form (Project Incoming) ---
const NewProjectForm = () => {
  const businessSegments = [
    '内容制作', '后期制作', '新媒体', '活动执行', '品牌直播'
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Section 1: Basic Info */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-4 bg-violet-500 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">立项基本信息</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase">项目名称</label>
            <input type="text" placeholder="请输入项目名称" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all outline-none text-sm" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase">客户名称</label>
            <input type="text" placeholder="请输入客户全称" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all outline-none text-sm" />
          </div>
        </div>

        <div className="space-y-1.5 mb-6">
          <label className="text-xs font-bold text-slate-400 uppercase">业务板块</label>
          <div className="flex flex-wrap gap-2">
            {businessSegments.map((seg, i) => (
              <label key={i} className="cursor-pointer group">
                <input type="radio" name="segment" className="peer hidden" />
                <span className="inline-block px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium transition-all peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-violet-600 peer-checked:shadow-md group-hover:border-violet-300">
                  {seg}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase">启动日期</label>
            <input type="date" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all outline-none text-sm text-slate-700" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-400 uppercase">需求概述</label>
          <textarea placeholder="请简要描述项目背景及核心需求..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all outline-none text-sm h-24 resize-none"></textarea>
        </div>
      </section>

      <div className="h-px bg-slate-100 w-full" />

      {/* Section 2: Contract Info */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">签约信息</h3>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase">签约金额 (¥)</label>
            <input type="number" placeholder="0.00" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-sm font-mono" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase">增值税税率 (%)</label>
            <input type="number" placeholder="6" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-sm font-mono" />
          </div>
           <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase">居间费金额 (¥)</label>
            <input type="number" placeholder="0.00" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-sm font-mono" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
           <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase">净签约额 (¥)</label>
            <input type="number" disabled placeholder="自动计算" className="w-full px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 outline-none text-sm font-mono cursor-not-allowed" />
          </div>
           <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase">签约主体</label>
            <input type="text" placeholder="例如：上海不恭传媒有限公司" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none text-sm" />
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="pt-4 flex items-center gap-4">
         <button className="flex-1 py-3.5 px-6 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-violet-200 hover:text-violet-700 font-bold transition-all duration-200 flex items-center justify-center gap-2 text-sm">
          <FileText size={16} />
          修改项目信息
        </button>
        <button className="flex-[2] py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm">
          <Send size={16} />
          发起申请
        </button>
      </div>
    </div>
  );
};

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

// --- FINANCE MODULE CARDS ---

// 5. Contract Review Card
const ContractCard = ({ data }: { data: Extract<TaskData, { type: 'contract_review' }> }) => (
  <div className="p-8">
    <div className="flex gap-6 mb-8">
      <div className="flex-1 bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
        <p className="text-xs text-slate-400 font-bold uppercase mb-2">Counterparty</p>
        <div className="flex items-center gap-3">
          <Building2 className="text-emerald-500" size={24} />
          <p className="text-lg font-semibold text-slate-800">{data.partyB}</p>
        </div>
      </div>
      <div className="flex-1 bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
        <p className="text-xs text-slate-400 font-bold uppercase mb-2">Contract Value</p>
        <div className="flex items-center gap-3">
          <Wallet className="text-emerald-500" size={24} />
          <p className="text-lg font-mono font-bold text-slate-800">{data.amount}</p>
        </div>
      </div>
       <div className="flex-1 bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
        <p className="text-xs text-slate-400 font-bold uppercase mb-2">Risk Level</p>
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${data.riskLevel === 'High' ? 'bg-red-500' : data.riskLevel === 'Medium' ? 'bg-orange-400' : 'bg-green-500'}`}></span>
          <p className="text-lg font-medium text-slate-800">{data.riskLevel}</p>
        </div>
      </div>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-lg border border-slate-100">
           <ScrollText className="text-slate-400" size={20} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">Service_Agreement_Draft_v3.pdf</p>
          <p className="text-xs text-slate-400">2.4 MB • Uploaded by Legal Dept</p>
        </div>
      </div>
      <button className="text-emerald-600 text-sm font-medium hover:underline flex items-center gap-1">
        <Download size={14} /> Download
      </button>
    </div>

    <ApprovalActionArea label="Approve Contract" color="emerald" />
  </div>
);

// 6. Procurement Card
const ProcurementCard = ({ data }: { data: Extract<TaskData, { type: 'procurement' }> }) => (
  <div className="p-8">
     <div className="mb-6 flex items-center justify-between">
       <div className="flex items-center gap-2">
         <ShoppingCart className="text-orange-500" size={20} />
         <h3 className="text-lg font-bold text-slate-800">Purchase Order Details</h3>
       </div>
       <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase border border-orange-200">
         Urgency: {data.urgency}
       </div>
     </div>

     <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8">
       <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 grid grid-cols-12 text-xs font-bold text-slate-500 uppercase tracking-wider">
         <div className="col-span-8">Item Description</div>
         <div className="col-span-4 text-right">Vendor</div>
       </div>
       <div className="divide-y divide-slate-100">
         {data.items.map((item, i) => (
           <div key={i} className="px-6 py-4 grid grid-cols-12 items-center">
             <div className="col-span-8 font-medium text-slate-700">{item}</div>
             <div className="col-span-4 text-right text-slate-500 text-sm">{data.vendor}</div>
           </div>
         ))}
       </div>
       <div className="bg-orange-50/50 px-6 py-4 border-t border-orange-100 flex justify-between items-center">
         <span className="text-sm font-bold text-orange-800">Total Estimate</span>
         <span className="text-xl font-mono font-bold text-orange-600">{data.total}</span>
       </div>
     </div>
     
     <ApprovalActionArea label="Authorize Purchase" color="emerald" />
  </div>
);

// 7. Liquidation Card
const LiquidationCard = ({ data }: { data: Extract<TaskData, { type: 'liquidation' }> }) => (
  <div className="p-8">
    <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="relative z-10 flex justify-between items-end">
        <div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Project ID</p>
          <p className="font-mono text-emerald-200 mb-6">{data.projectId}</p>
          
          <div className="flex gap-8">
            <div>
              <p className="text-slate-400 text-xs mb-1">Final Margin</p>
              <p className="text-3xl font-bold text-white">{data.finalMargin}</p>
            </div>
             <div>
              <p className="text-slate-400 text-xs mb-1">Budget Variance</p>
              <p className="text-3xl font-bold text-red-400">{data.variance}</p>
            </div>
          </div>
        </div>
        <Calculator size={48} className="text-slate-700" />
      </div>
    </div>
    
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 text-yellow-800 text-sm flex gap-3">
      <AlertCircle size={20} className="shrink-0" />
      <p>This project has a negative variance on logistic costs. Please review the attached cost breakdown report before closing.</p>
    </div>

    <ApprovalActionArea label="Confirm Liquidation" color="emerald" />
  </div>
);

// 8. Reimbursement Card
const ReimbursementCard = ({ data }: { data: Extract<TaskData, { type: 'reimbursement' }> }) => (
  <div className="p-8">
    <div className="flex items-start gap-6 mb-8">
       <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 border-2 border-white shadow-lg">
          <UserCircle2 size={40} />
       </div>
       <div className="flex-1">
         <h3 className="text-xl font-bold text-slate-800">{data.employee}</h3>
         <p className="text-slate-500 text-sm mb-4">{data.department}</p>
         <div className="flex gap-2">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">
              {data.category}
            </span>
         </div>
       </div>
       <div className="text-right">
          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Total Amount</p>
          <p className="text-3xl font-mono font-bold text-slate-800">{data.amount}</p>
       </div>
    </div>
    
    <div className="grid grid-cols-4 gap-4 mb-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="aspect-[3/4] bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:border-violet-200 cursor-pointer transition-colors group">
           <Receipt size={24} className="mb-2 group-hover:text-violet-500" />
           <span className="text-xs">Receipt_0{i}.jpg</span>
        </div>
      ))}
    </div>

    <ApprovalActionArea label="Approve Reimbursement" color="emerald" />
  </div>
);


// Common Action Area Component
const ApprovalActionArea = ({ label, color = 'violet' }: { label: string, color?: 'violet' | 'emerald' }) => {
  const isEmerald = color === 'emerald';
  return (
    <div className="px-8 pb-8 pt-0">
      <label className="block text-sm font-medium text-slate-700 mb-3 flex items-center gap-2">
        <MessageSquare size={16} className="text-slate-400" />
        Remarks
      </label>
      <textarea 
        className={`w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-700 focus:ring-2 transition-all shadow-sm mb-6 resize-none h-24 text-sm placeholder:text-slate-400 ${isEmerald ? 'focus:ring-emerald-500/20 focus:border-emerald-500' : 'focus:ring-violet-500/20 focus:border-violet-500'}`}
        placeholder="Optional comments..."
      ></textarea>
      
      <div className="flex items-center gap-4">
        <button className={`flex-1 py-3 px-6 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm
          ${isEmerald 
            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-200 hover:shadow-emerald-300' 
            : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-violet-200 hover:shadow-violet-300'
          }`}>
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
};


const Workspace: React.FC<WorkspaceProps> = ({ activeTask }) => {
  return (
    <div className="flex-1 h-full flex flex-col bg-slate-50/50 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Top Navigation & Breadcrumbs */}
      <header className="px-8 py-6 flex items-center justify-between z-10">
        <nav className="flex items-center space-x-2 text-sm text-slate-500">
          <span className="hover:text-slate-800 cursor-pointer transition-colors">Workspace</span>
          <ChevronRight size={14} />
          <span className="hover:text-slate-800 cursor-pointer transition-colors font-medium text-slate-800">
            {activeTask.projectTitle.includes('：') ? activeTask.projectTitle.split('：')[0] : 'New'}
          </span>
          {activeTask.category && (
             <>
               <ChevronRight size={14} />
               <span className="text-slate-400">{activeTask.category}</span>
             </>
          )}
          <ChevronRight size={14} />
          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium text-xs border border-slate-200">
            {activeTask.statusLabel.replace(/[🔴🟠🔵🟢]/g, '').trim()}
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
              
              // Use different colors for different task groups (simple heuristic)
              const isFinance = ['contract_review', 'procurement', 'liquidation', 'reimbursement'].includes(activeTask.data.type);
              const activeColorClass = isFinance ? 'text-emerald-600 border-emerald-600' : 'text-violet-600 border-violet-600';
              const activeBgClass = isFinance ? 'bg-emerald-600' : 'bg-violet-600';
              const activeTextClass = isFinance ? 'text-emerald-700' : 'text-violet-700';

              return (
                <div key={index} className="flex flex-col items-center gap-2 bg-slate-50 px-2 z-10">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300
                    ${isCompleted ? 'bg-slate-700 border-slate-700 text-white' : ''}
                    ${isCurrent ? `bg-white ${activeColorClass} shadow-sm` : ''}
                    ${step.status === 'upcoming' ? 'bg-white border-slate-300 text-slate-300' : ''}
                  `}>
                    {isCompleted ? <CheckCircle2 size={16} /> : isCurrent ? <div className={`w-2.5 h-2.5 rounded-full ${activeBgClass}`} /> : <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />}
                  </div>
                  <span className={`text-xs font-medium whitespace-nowrap ${isCurrent ? activeTextClass : isCompleted ? 'text-slate-700' : 'text-slate-400'}`}>
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
                    ${activeTask.data.type === 'new_project_form' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                      activeTask.data.type === 'update' ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                      ['finance', 'liquidation', 'reimbursement'].includes(activeTask.data.type) ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                      'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
                    {activeTask.data.type === 'new_project_form' ? 'Project Entry' : activeTask.data.type.replace('_', ' ')}
                  </span>
                  <span className="text-slate-400 text-sm">Updated Just Now</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 leading-tight flex items-center gap-2">
                  {activeTask.projectTitle.includes('：') ? activeTask.projectTitle.split('：')[1] : activeTask.projectTitle}
                   {activeTask.data.type === 'new_project_form' && <Sparkles size={24} className="text-yellow-400" />}
                </h1>
                <p className="text-slate-500 mt-1">{activeTask.description}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <FileText size={20} />
              </button>
            </div>

            {/* Render Specific Content based on Data Type */}
            {activeTask.data.type === 'new_project_form' && <NewProjectForm />}
            {activeTask.data.type === 'initiation' && <InitiationCard data={activeTask.data} />}
            {activeTask.data.type === 'update' && <UpdateCard data={activeTask.data} />}
            {activeTask.data.type === 'team_setup' && <TeamSetupCard data={activeTask.data} />}
            {activeTask.data.type === 'finance' && <FinanceCard data={activeTask.data} />}
            
            {/* New Finance Modules */}
            {activeTask.data.type === 'contract_review' && <ContractCard data={activeTask.data} />}
            {activeTask.data.type === 'procurement' && <ProcurementCard data={activeTask.data} />}
            {activeTask.data.type === 'liquidation' && <LiquidationCard data={activeTask.data} />}
            {activeTask.data.type === 'reimbursement' && <ReimbursementCard data={activeTask.data} />}

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