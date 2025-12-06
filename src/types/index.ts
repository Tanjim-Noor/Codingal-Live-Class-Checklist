import type { LucideIcon } from 'lucide-react';

export interface ChecklistItem {
  id: string;
  text: string;
  marks: number | string;
  time: string;
}

export interface Tab {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface RubricRow {
  category: string;
  items: string;
  marks: string;
  howToScore: string;
  deduction: string;
}

export interface ChecklistData {
  welcome: ChecklistItem[];
  system: ChecklistItem[];
  firstClass: ChecklistItem[];
  interaction: ChecklistItem[];
  activities: ChecklistItem[];
  concepts: ChecklistItem[];
  platform: ChecklistItem[];
  todos: ChecklistItem[];
}
