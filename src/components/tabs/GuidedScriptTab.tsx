import { checklistData } from '../../data/checklistData';
import type { ChecklistItem } from '../../types';
import { AlertCircle, CheckSquare, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface GuidedScriptTabProps {
  checkedItems: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export function GuidedScriptTab({ checkedItems, onToggle }: GuidedScriptTabProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    opening: true,
    intro: true,
    icebreaker: true,
    brain: true,
    dashboard: true,
    video: true,
    activity: true,
    closing: true,
    parent: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSectionComplete = (e: React.MouseEvent, sectionId: string) => {
    e.stopPropagation();
    const isCompleted = checkedItems[`section-${sectionId}`];
    
    // Toggle completion status
    onToggle(`section-${sectionId}`);
    
    // Auto-collapse if marking as complete
    if (!isCompleted) {
      setExpandedSections(prev => ({
        ...prev,
        [sectionId]: false
      }));
    }
  };

  const renderSection = (
    id: string,
    title: string, 
    colorClass: string,
    borderColorClass: string,
    script: React.ReactNode,
    checklistItems: ChecklistItem[],
    alerts: string[] = []
  ) => {
    const isExpanded = expandedSections[id];
    const isCompleted = checkedItems[`section-${id}`];
    
    return (
      <div className={`mb-6 border-l-4 ${borderColorClass} bg-white rounded-r-lg shadow-sm border border-gray-100 overflow-hidden`}>
        <div 
          className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${colorClass} ${isCompleted ? 'opacity-75' : ''}`}
          onClick={() => toggleSection(id)}
        >
          <div className="flex items-center gap-3">
             <div 
               role="button"
               tabIndex={0}
               onClick={(e) => toggleSectionComplete(e, id)}
               className={`rounded-full p-1 transition-colors ${
                 isCompleted ? 'text-green-600 bg-green-100' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200/50'
               }`}
             >
               {isCompleted ? <CheckSquare className="w-5 h-5" /> : <div className="w-5 h-5 rounded border-2 border-current" />}
             </div>
             <h3 className={`font-bold text-lg text-gray-800 ${isCompleted ? 'line-through text-gray-500' : ''}`}>
               {title}
             </h3>
          </div>
          {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
        </div>
        
        {isExpanded && (
          <div className="p-4 space-y-4">
            {/* Script Box */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Script</p>
              <div className="text-gray-800 italic leading-relaxed">
                {script}
              </div>
            </div>

            {/* Teaching Tips / Alerts */}
            {alerts.length > 0 && (
              <div className="space-y-2">
                {alerts.map((alert, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-red-600 bg-red-50 p-2 rounded">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{alert}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Checklist Items */}
            {checklistItems.length > 0 && (
              <div className="mt-4">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Checklist Items</p>
                 <div className="grid gap-2">
                   {checklistItems.map(item => (
                     <div 
                       key={item.id}
                       onClick={() => onToggle(item.id)}
                       className={`
                         flex items-start gap-3 p-3 rounded border cursor-pointer transition-all
                         ${checkedItems[item.id] 
                           ? 'bg-green-50 border-green-200' 
                           : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'}
                       `}
                     >
                       <div className={`mt-0.5 ${checkedItems[item.id] ? 'text-green-600' : 'text-gray-400'}`}>
                         <CheckSquare className="w-5 h-5" />
                       </div>
                       <div className="flex-1">
                         <p className={`text-sm ${checkedItems[item.id] ? 'text-gray-500 line-through' : 'text-gray-700 font-medium'}`}>
                           {item.text}
                         </p>
                         <div className="flex items-center gap-2 mt-1">
                           <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                             {item.marks === 'N/A' ? 'Required' : `${item.marks} marks`}
                           </span>
                           <span className="text-xs text-gray-400">
                             {item.time}
                           </span>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-6 p-4 bg-blue-600 text-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-1">Guided Script Mode</h2>
        <p className="opacity-90 text-sm">Follow the script and check off items as you go. Everything stays synced with the main checklist.</p>
      </div>

      {renderSection(
        'opening',
        'Opening (0-2 min)',
        'bg-blue-50',
        'border-blue-500',
        <>
          <p className="mb-2">Hello [Student Name]! Welcome to your first Codingal Plus class! I am so excited to have you here!</p>
          <p>How was your day today? Did anything fun happen at school?</p>
          <p className="text-xs text-gray-600 mt-2 not-italic">😊 Big smile, cheerful tone, genuine interest</p>
        </>,
        [
            ...checklistData.welcome,
            // Add system checks here as they must be done before/at start
            ...checklistData.system
        ],
        ['Start recording within 3 minutes!']
      )}

      {renderSection(
        'intro',
        'Teacher Introduction (2-5 min)',
        'bg-green-50',
        'border-green-500',
        <>
          <p>Let me introduce myself! My name is [Your Name], and I have been teaching coding to students your age for [X years].</p>
          <p className="mt-2">I have helped hundreds of students create amazing games, apps, and projects! Some of my students have built racing games, animation projects, and even their own websites. Today, we are going to start an exciting journey together. Congratulations on joining Codingal Plus!</p>
        </>,
        checklistData.firstClass.filter(i => i.id === 'f1')
      )}

      {renderSection(
        'icebreaker',
        'Ice-Breaker Activity (5-15 min)',
        'bg-purple-50',
        'border-purple-500',
        <>
          <p>Now let us get to know each other! I would like each of you to introduce yourself. Please share: your name, which school you go to, which country you are from, your favorite hobby, and any sports or activities you enjoy.</p>
          <p className="mt-2">Who would like to go first?</p>
          <p className="text-xs text-gray-600 mt-2 not-italic">Encourage each student, make them comfortable, remember details.</p>
        </>,
        [
            ...checklistData.firstClass.filter(i => i.id === 'f2'),
            ...checklistData.interaction.filter(i => i.id === 'i1')
        ]
      )}

      {renderSection(
        'brain',
        'Brain Warm-Up Game (15-20 min)',
        'bg-yellow-50',
        'border-yellow-500',
        <>
          <p>Before we start coding, let us warm up our brains with a fun game! This will help us think like programmers.</p>
          <p className="mt-2">I am going to share my screen and we will play a quick game together.</p>
          <div className="text-xs text-gray-600 mt-2 not-italic font-normal">
            <ul className="list-disc pl-4 space-y-1">
              <li>Ages 1-3: Brain for Monster Truck</li>
              <li>Ages 4-5: Numbers game</li>
              <li>Ages 6-8: Cannon Strike</li>
              <li>Ages 9-12: Arithmetica</li>
            </ul>
          </div>
        </>,
        checklistData.firstClass.filter(i => i.id === 'f3')
      )}

      {renderSection(
        'dashboard',
        'Dashboard Walkthrough (20-25 min)',
        'bg-indigo-50',
        'border-indigo-500',
        <>
          <p>Now let me show you something really cool - your student dashboard! This is where you will see all your lessons, certificates, and projects.</p>
          <p className="mt-2">Let me share my screen and login as a student. Look at these sections: here is where you will find free doubt sessions if you need help, here are your lessons, your quizzes, and best of all - your certificates when you complete modules!</p>
        </>,
        checklistData.firstClass.filter(i => i.id === 'f4')
      )}

      {renderSection(
        'video',
        'Inspiration Video (25-29 min)',
        'bg-pink-50',
        'border-pink-500',
        <>
          <p>Before we start our lesson, I want to show you a short video about why learning coding is so amazing and how it can help you in the future. Let us watch together!</p>
          <p className="text-xs text-blue-600 mt-2 not-italic underline cursor-pointer">https://youtu.be/nKIu9yen5nc</p>
        </>,
        checklistData.firstClass.filter(i => i.id === 'f5')
      )}

      {renderSection(
        'activity',
        'During Activity (Main Lesson)',
        'bg-red-50',
        'border-red-500',
        <>
          <p>Great job! You are doing amazing! Can you show me your screen now?</p>
          <p className="mt-2">Let us break this activity into parts. First, we will do [Part 1], then [Part 2].</p>
          <p className="mt-2">What do you think we should do first? That is right! Now you try typing the code yourself...</p>
        </>,
        [
            ...checklistData.activities,
            ...checklistData.concepts,
            ...checklistData.platform,
            ...checklistData.interaction.filter(i => i.id !== 'i1')
        ],
        [
            'DO NOT dictate code. Guide with questions.',
            'Ensure student is sharing screen.'
        ]
      )}

      {renderSection(
        'closing',
        'Class Closing (Last 5 min)',
        'bg-orange-50',
        'border-orange-500',
        <>
          <p>Wonderful work today! Before we finish, can you summarize what we learned today in your own words?</p>
          <p className="mt-2">Excellent! For your after-class project, you need to [explain project].</p>
          <p className="mt-2">Also, please fill out the feedback form - it really helps me improve.</p>
          <p className="mt-2">See you in the next class! Keep coding!</p>
        </>,
        checklistData.todos
      )}

      {renderSection(
        'parent',
        'Parent Interaction (After class)',
        'bg-teal-50',
        'border-teal-500',
        <>
          <p>Hello! I am [Your Name], [Student] teacher for Codingal Plus. I wanted to introduce myself and let you know that [Student] did wonderfully today! We covered [topics], and they showed great understanding.</p>
          <p className="mt-2">I am excited to continue this journey together. If you have any questions, please feel free to reach out!</p>
        </>,
        checklistData.firstClass.filter(i => i.id === 'f6')
      )}
    </div>
  );
}
