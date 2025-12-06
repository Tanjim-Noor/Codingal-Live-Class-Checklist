import { CheckSquare, Square } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ChecklistItem } from '../types';

interface ChecklistSectionProps {
  title: string;
  items: ChecklistItem[];
  icon: LucideIcon;
  checkedItems: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export function ChecklistSection({ title, items, icon: Icon, checkedItems, onToggle }: ChecklistSectionProps) {
  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
        <Icon className="w-5 h-5 text-blue-600" />
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      </div>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded">
            <button onClick={() => onToggle(item.id)} className="mt-0.5 flex-shrink-0">
              {checkedItems[item.id] ? 
                <CheckSquare className="w-5 h-5 text-green-600" /> : 
                <Square className="w-5 h-5 text-gray-400" />
              }
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${checkedItems[item.id] ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                {item.text}
              </p>
              <div className="flex gap-3 mt-1">
                <span className="text-xs text-blue-600 font-medium">{item.marks} marks</span>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
