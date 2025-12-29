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
  | { type: 'initiation'; budget: string; client: string; cycle: string }
  | { type: 'update'; changeField: string; oldValue: string; newValue: string; reason: string }
  | { type: 'team_setup'; requiredRoles: { role: string; candidate?: string; status: 'filled' | 'empty' }[] }
  | { type: 'finance'; amount: string; usage: string; bankAccount: string };

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
