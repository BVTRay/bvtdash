export enum TaskStatus {
  URGENT = 'urgent',
  WARNING = 'warning',
  NORMAL = 'normal',
}

export interface WorkflowStep {
  label: string;
  status: 'completed' | 'current' | 'upcoming';
}

// Discriminator for different task data types
export type TaskData = 
  | { type: 'new_project_form' }
  | { type: 'initiation'; budget: string; client: string; cycle: string }
  | { type: 'update'; changeField: string; oldValue: string; newValue: string; reason: string }
  | { type: 'team_setup'; requiredRoles: { role: string; candidate?: string; status: 'filled' | 'empty' }[] }
  | { type: 'finance'; amount: string; usage: string; bankAccount: string }
  // New Finance Module Types
  | { type: 'contract_review'; amount: string; partyB: string; riskLevel: 'Low' | 'Medium' | 'High' }
  | { type: 'procurement'; vendor: string; items: string[]; total: string; urgency: string }
  | { type: 'liquidation'; projectId: string; finalMargin: string; variance: string }
  | { type: 'reimbursement'; employee: string; amount: string; category: string; department: string };

export interface TaskItem {
  id: string;
  category: string;
  projectTitle: string;
  description: string;
  statusLabel: string;
  statusType: TaskStatus;
  steps: WorkflowStep[];
  data: TaskData;
}