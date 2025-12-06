import { useState } from 'react';
import { CheckSquare, Book, FileText, Clock, Award, AlertCircle } from 'lucide-react';
import type { Tab } from './types';
import { ChecklistTab, RubricTab, ScriptTab, PreClassTab, PostClassTab, RisksTab, GuidedScriptTab } from './components/tabs';

const tabs: Tab[] = [
  { id: 'guided', name: 'Guided Script', icon: FileText },
  { id: 'checklist', name: 'Live Checklist', icon: CheckSquare },
  { id: 'rubric', name: 'Rubric Breakdown', icon: Book },
  { id: 'script', name: 'Old Script', icon: FileText },
  { id: 'pre', name: 'Pre-Class', icon: Clock },
  { id: 'post', name: 'Post-Class', icon: Award },
  { id: 'risks', name: 'Avoid Mistakes', icon: AlertCircle }
];

function App() {
  const [activeTab, setActiveTab] = useState('guided');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Codingal Plus First Class</h1>
          <p className="text-gray-600">Complete Audit-Proof Guide - Total: 100 Marks</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          <div className="p-6 max-h-screen overflow-y-auto">
            {activeTab === 'guided' && (
              <GuidedScriptTab checkedItems={checkedItems} onToggle={toggleCheck} />
            )}
            {activeTab === 'checklist' && (
              <ChecklistTab checkedItems={checkedItems} onToggle={toggleCheck} />
            )}
            {activeTab === 'rubric' && <RubricTab />}
            {activeTab === 'script' && <ScriptTab />}
            {activeTab === 'pre' && <PreClassTab />}
            {activeTab === 'post' && <PostClassTab />}
            {activeTab === 'risks' && <RisksTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
