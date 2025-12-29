import { TaskItem, TaskStatus } from './types';

export const TASK_DATA: TaskItem[] = [
  // 1. 立项阶段 (Initiation)
  {
    id: 'A',
    category: '立项阶段',
    projectTitle: 'A项目：城市宣传片',
    description: 'City Promo Video',
    statusLabel: '🔴 待财务确认',
    statusType: TaskStatus.URGENT,
    steps: [
      { label: '填写基本信息', status: 'completed' },
      { label: '提交立项', status: 'completed' },
      { label: '财务/股东确认', status: 'current' },
      { label: '立项成功', status: 'upcoming' },
    ],
    data: {
      type: 'initiation',
      budget: '¥500,000',
      client: 'City Tourism Bureau',
      cycle: '3 Months'
    }
  },
  {
    id: 'E',
    category: '立项阶段',
    projectTitle: 'E项目：跨年晚会直播',
    description: 'New Year Gala Live',
    statusLabel: '🔴 待内容审查',
    statusType: TaskStatus.URGENT,
    steps: [
      { label: '方案提交', status: 'completed' },
      { label: '内容审查', status: 'current' },
      { label: '立项审批', status: 'upcoming' },
    ],
    data: {
      type: 'initiation',
      budget: '¥1,200,000',
      client: 'TV Station',
      cycle: '1 Month'
    }
  },
  
  // 2. 信息更新 (Info Update)
  {
    id: 'B',
    category: '信息更新',
    projectTitle: 'B项目：夏季广告',
    description: 'Summer Campaign',
    statusLabel: '🟠 签约信息变更',
    statusType: TaskStatus.WARNING,
    steps: [
      { label: '修改信息', status: 'completed' },
      { label: '推送更新', status: 'completed' },
      { label: '财务/制片确认', status: 'current' },
      { label: '更新完成', status: 'upcoming' },
    ],
    data: {
      type: 'update',
      changeField: 'Contract Amount (First Installment)',
      oldValue: '¥150,000',
      newValue: '¥200,000',
      reason: 'Client requested expedited production schedule.'
    }
  },
  {
    id: 'F',
    category: '信息更新',
    projectTitle: 'F项目：春季摄影大赛',
    description: 'Spring Photo Contest',
    statusLabel: '🔵 延期申请',
    statusType: TaskStatus.NORMAL,
    steps: [
      { label: '提交申请', status: 'completed' },
      { label: '部门审批', status: 'current' },
      { label: '通知选手', status: 'upcoming' },
    ],
    data: {
      type: 'update',
      changeField: 'Submission Deadline',
      oldValue: '2024-03-31',
      newValue: '2024-04-15',
      reason: 'High volume of late entries.'
    }
  },

  // 3. 启动建组 (Team Setup)
  {
    id: 'C',
    category: '启动建组',
    projectTitle: 'C项目：纪录片《山河》',
    description: 'Documentary "River"',
    statusLabel: '🔵 委任核心成员',
    statusType: TaskStatus.NORMAL,
    steps: [
      { label: '委任项目负责人', status: 'completed' },
      { label: '制定生产预算', status: 'completed' },
      { label: '委任核心成员', status: 'current' },
      { label: '启动完成', status: 'upcoming' },
    ],
    data: {
      type: 'team_setup',
      requiredRoles: [
        { role: 'Director (导演)', candidate: 'Zhang Yimou', status: 'filled' },
        { role: 'Producer (制片主任)', status: 'empty' },
        { role: 'Post-Prod Lead (后期负责人)', status: 'empty' },
      ]
    }
  },
  {
    id: 'G',
    category: '启动建组',
    projectTitle: 'G项目：科幻短片《星际》',
    description: 'Sci-Fi Short "Interstellar"',
    statusLabel: '🔴 确认美术指导',
    statusType: TaskStatus.URGENT,
    steps: [
      { label: '导演确认', status: 'completed' },
      { label: '美术指导确认', status: 'current' },
      { label: '建组完毕', status: 'upcoming' },
    ],
    data: {
      type: 'team_setup',
      requiredRoles: [
        { role: 'Art Director (美术指导)', status: 'empty' },
        { role: 'VFX Supervisor (视效总监)', candidate: 'Li Wei', status: 'filled' },
      ]
    }
  },

  // 4. 筹备阶段 (Preparation)
  {
    id: 'D',
    category: '筹备阶段',
    projectTitle: 'D项目：微电影《回声》',
    description: 'Short Film "Echo"',
    statusLabel: '🟠 申请备用金',
    statusType: TaskStatus.WARNING,
    steps: [
      { label: '制定执行预算', status: 'completed' },
      { label: '申请备用金', status: 'current' },
      { label: '财务打款', status: 'upcoming' },
      { label: '筹备完成', status: 'upcoming' },
    ],
    data: {
      type: 'finance',
      amount: '¥50,000',
      usage: 'Location Scouting & Casting Logistics',
      bankAccount: 'ICBC **** 8892'
    }
  },
  {
    id: 'H',
    category: '筹备阶段',
    projectTitle: 'H项目：访谈节目《对话》',
    description: 'Talk Show "Dialogue"',
    statusLabel: '🔵 设备租赁申请',
    statusType: TaskStatus.NORMAL,
    steps: [
      { label: '设备清单确认', status: 'completed' },
      { label: '租赁资金申请', status: 'current' },
      { label: '设备出库', status: 'upcoming' },
    ],
    data: {
      type: 'finance',
      amount: '¥28,000',
      usage: 'Camera & Lighting Equipment Rental',
      bankAccount: 'CMB **** 1234'
    }
  },
];

export const CATEGORIES = [
  '立项阶段',
  '信息更新',
  '启动建组',
  '筹备阶段',
];