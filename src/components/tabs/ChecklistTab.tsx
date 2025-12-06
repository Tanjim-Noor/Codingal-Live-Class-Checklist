import { Users, Monitor, Award, FileText, Book, CheckSquare } from 'lucide-react';
import { ChecklistSection } from '../ChecklistSection';
import { checklistData } from '../../data/checklistData';

interface ChecklistTabProps {
  checkedItems: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export function ChecklistTab({ checkedItems, onToggle }: ChecklistTabProps) {
  return (
    <div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-800">
          <strong>Keep this open during class!</strong> Check off items as you complete them. Total: 100 marks
        </p>
      </div>

      <ChecklistSection title="Welcome & Start (6 marks)" items={checklistData.welcome} icon={Users} checkedItems={checkedItems} onToggle={onToggle} />
      <ChecklistSection title="System Setup (12 marks)" items={checklistData.system} icon={Monitor} checkedItems={checkedItems} onToggle={onToggle} />
      <ChecklistSection title="FIRST CLASS SPECIAL FLOW (Not directly scored but critical)" items={checklistData.firstClass} icon={Award} checkedItems={checkedItems} onToggle={onToggle} />
      <ChecklistSection title="Interaction (6 marks)" items={checklistData.interaction} icon={Users} checkedItems={checkedItems} onToggle={onToggle} />
      <ChecklistSection title="Activities (16 marks)" items={checklistData.activities} icon={FileText} checkedItems={checkedItems} onToggle={onToggle} />
      <ChecklistSection title="Concepts (13 marks)" items={checklistData.concepts} icon={Book} checkedItems={checkedItems} onToggle={onToggle} />
      <ChecklistSection title="Platform Usage (15 marks)" items={checklistData.platform} icon={Monitor} checkedItems={checkedItems} onToggle={onToggle} />
      <ChecklistSection title="Class To-Dos (24 marks)" items={checklistData.todos} icon={CheckSquare} checkedItems={checkedItems} onToggle={onToggle} />
    </div>
  );
}
