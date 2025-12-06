import React, { useState } from 'react';
import { CheckSquare, Square, AlertCircle, Book, Clock, Users, Monitor, FileText, Award } from 'lucide-react';

const CodingalAuditGuide = () => {
  const [activeTab, setActiveTab] = useState('checklist');
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const tabs = [
    { id: 'checklist', name: 'Live Checklist', icon: CheckSquare },
    { id: 'rubric', name: 'Rubric Breakdown', icon: Book },
    { id: 'script', name: 'Teaching Script', icon: FileText },
    { id: 'pre', name: 'Pre-Class', icon: Clock },
    { id: 'post', name: 'Post-Class', icon: Award },
    { id: 'risks', name: 'Avoid Mistakes', icon: AlertCircle }
  ];

  const checklistData = {
    welcome: [
      { id: 'w1', text: 'Welcome student with BIG SMILE & ask "How was your day/school?"', marks: 2, time: '0-2 min' },
      { id: 'w2', text: 'Show patience throughout class', marks: 2, time: 'Ongoing' },
      { id: 'w3', text: 'Start recording within 3 minutes', marks: 2, time: '0-3 min' }
    ],
    system: [
      { id: 's1', text: 'Use Codingal virtual background', marks: 1, time: 'Before class' },
      { id: 's2', text: 'Check camera quality & frame position', marks: 1, time: 'Before class' },
      { id: 's3', text: 'Professional dressing & hair grooming', marks: 2, time: 'Before class' },
      { id: 's4', text: 'Good lighting setup', marks: 2, time: 'Before class' },
      { id: 's5', text: 'No background noise', marks: 1, time: 'Ongoing' },
      { id: 's6', text: 'Use table & chair (not bed/floor)', marks: 1, time: 'Before class' },
      { id: 's7', text: 'DO NOT close/hide camera frequently', marks: 2, time: 'Ongoing' },
      { id: 's8', text: 'DO NOT mute mic frequently', marks: 2, time: 'Ongoing' }
    ],
    firstClass: [
      { id: 'f1', text: 'TEACHER INTRO: Share teaching experience & congratulate students', marks: 'N/A', time: '2-3 min' },
      { id: 'f2', text: 'ICE-BREAKER: Students introduce (Name, School, Country, Hobby)', marks: 'N/A', time: '8-10 min' },
      { id: 'f3', text: 'BRAIN GAME: Use age-appropriate warm-up game', marks: 'N/A', time: '5 min' },
      { id: 'f4', text: 'DASHBOARD DEMO: Login as student & show features', marks: 'N/A', time: '5 min' },
      { id: 'f5', text: 'INSPIRATION VIDEO: Play coding motivation video', marks: 'N/A', time: '3-4 min' },
      { id: 'f6', text: 'PARENT INTERACTION: Intro yourself to parents at end', marks: 'N/A', time: '2-3 min' }
    ],
    interaction: [
      { id: 'i1', text: 'Ask questions every 2 minutes (NOT just yes/no)', marks: 2, time: 'Every 2 min' },
      { id: 'i2', text: 'Make class interactive (hi-fi, pat on back)', marks: 2, time: 'Ongoing' },
      { id: 'i3', text: 'Speak slowly & clearly', marks: 1, time: 'Ongoing' },
      { id: 'i4', text: 'Shift to GMeet if internet issue occurs', marks: 1, time: 'If needed' }
    ],
    activities: [
      { id: 'a1', text: 'Break activity into parts & explain', marks: 2, time: 'During activity' },
      { id: 'a2', text: 'Student understands class goal', marks: 2, time: 'First 5 min' },
      { id: 'a3', text: 'Complete 2 activities OR 75% of lesson plan', marks: 3, time: 'Main class' },
      { id: 'a4', text: 'Student submits project link', marks: 2, time: 'End of class' },
      { id: 'a5', text: 'Student uses VSCode (if required)', marks: 2, time: 'During activity' },
      { id: 'a6', text: 'Student writes 80%+ code (minimal copy-paste)', marks: 2, time: 'During activity' },
      { id: 'a7', text: 'NO SPOON-FEEDING: Do not dictate code', marks: 2, time: 'Ongoing' },
      { id: 'a8', text: 'Encourage & appreciate throughout', marks: 3, time: 'Ongoing' }
    ],
    concepts: [
      { id: 'c1', text: 'Explain ALL concepts in lesson plan', marks: 2, time: 'Main class' },
      { id: 'c2', text: 'Give full attention to student', marks: 2, time: 'Ongoing' },
      { id: 'c3', text: 'Show technical knowledge & answer queries', marks: 2, time: 'Ongoing' },
      { id: 'c4', text: 'Demonstrate lesson plan knowledge', marks: 2, time: 'Ongoing' },
      { id: 'c5', text: 'Explain concept BEFORE activity (not during)', marks: 3, time: 'Before each activity' },
      { id: 'c6', text: 'Utilize time effectively', marks: 2, time: 'Ongoing' },
      { id: 'c7', text: 'Share screen while explaining activity', marks: 2, time: 'During explanation' }
    ],
    platform: [
      { id: 'p1', text: 'Give examples to help understanding', marks: 2, time: 'During teaching' },
      { id: 'p2', text: 'Thoroughly explain & cover activity', marks: 2, time: 'During activity' },
      { id: 'p3', text: 'Answer all student queries/doubts', marks: 2, time: 'Ongoing' },
      { id: 'p4', text: 'Show confidence in class', marks: 1, time: 'Ongoing' },
      { id: 'p5', text: 'Know Codingal platform technically', marks: 1, time: 'Ongoing' },
      { id: 'p6', text: 'Monitor student screen actively', marks: 3, time: 'During activity' },
      { id: 'p7', text: 'Student shares screen during activity', marks: 2, time: 'During activity' },
      { id: 'p8', text: 'Use Web Viewer', marks: 1, time: 'When needed' },
      { id: 'p9', text: 'Use tools: rooms, collaborative learning, annotations', marks: 2, time: 'When needed' },
      { id: 'p10', text: 'Use annotating tool', marks: 2, time: 'When teaching' }
    ],
    todos: [
      { id: 't1', text: 'Correct spelling/code mistakes', marks: 2, time: 'Ongoing' },
      { id: 't2', text: 'Discuss previous class topic', marks: 2, time: 'First 5 min' },
      { id: 't3', text: 'Discuss previous class project', marks: 2, time: 'First 5 min' },
      { id: 't4', text: 'Make student do EYE EXERCISE', marks: 2, time: 'Mid-class' },
      { id: 't5', text: 'Discuss After Class Project in detail', marks: 2, time: 'Last 5 min' },
      { id: 't6', text: 'Motivate student to fill feedback form', marks: 2, time: 'Last 2 min' },
      { id: 't7', text: 'Student summarizes class for 2+ mins', marks: 2, time: 'Last 2-3 min' },
      { id: 't8', text: 'Class MUST be 43+ minutes minimum', marks: 2, time: 'Check timer' },
      { id: 't9', text: 'Record ONLY classroom window (not entire screen)', marks: 2, time: 'When recording' },
      { id: 't10', text: 'Mark complete ONLY after 1 activity done', marks: 2, time: 'End of class' },
      { id: 't11', text: 'NO unnecessary tabs (WhatsApp, FB, etc)', marks: 2, time: 'Ongoing' },
      { id: 't12', text: 'Ask student to go full screen when sharing', marks: 2, time: 'When sharing' }
    ]
  };

  const rubricTable = [
    { category: 'Teacher Demeanor', items: 'Welcome with smile, patience, encouragement', marks: '6', howToScore: 'Big smile, ask about day, show patience, ask questions every 2 min', deduction: 'No smile, impatient, not engaging' },
    { category: 'Punctuality', items: 'Start recording within 3 min', marks: '2', howToScore: 'Record within 3 minutes of class start', deduction: 'Late recording start' },
    { category: 'System Setup', items: 'Camera, lighting, background, audio, furniture', marks: '12', howToScore: 'Virtual BG, good lighting, clear audio, table/chair, professional dress', deduction: 'Poor lighting, no BG, bed/floor, casual dress' },
    { category: 'Camera/Mic Usage', items: 'Do not hide camera or mute frequently', marks: '4', howToScore: 'Keep camera on, stay unmuted except when needed', deduction: 'Frequent hiding/muting' },
    { category: 'Activity Completion', items: '2 activities or 75% lesson plan', marks: '3', howToScore: 'Complete 2 activities minimum', deduction: 'Less than 2 activities' },
    { category: 'Student Coding', items: 'Student writes 80%+ code, no spoon-feeding', marks: '4', howToScore: 'Student types code, minimal dictation', deduction: 'Teacher dictates, too much copy-paste' },
    { category: 'Encouragement', items: 'Appreciate throughout class', marks: '3', howToScore: 'Regular praise, positive reinforcement', deduction: 'No encouragement' },
    { category: 'Concept Teaching', items: 'Explain all concepts before activity', marks: '9', howToScore: 'Clear explanation, concept before activity, give examples', deduction: 'Skip concepts, explain during activity' },
    { category: 'Screen Monitoring', items: 'Actively monitor student screen', marks: '3', howToScore: 'Watch student work, guide proactively', deduction: 'Not monitoring' },
    { category: 'Platform Tools', items: 'Web Viewer, annotations, screen share', marks: '7', howToScore: 'Use annotating tool, share screen, use Web Viewer', deduction: 'Do not use tools' },
    { category: 'Class To-Dos', items: 'Previous topic, eye exercise, summary, feedback, 43+ min', marks: '24', howToScore: 'Do all 12 to-dos listed in rubric', deduction: 'Miss any to-do item' },
    { category: 'Recording', items: 'Record only classroom window', marks: '2', howToScore: 'Record just class window, not full screen', deduction: 'Record full screen with tabs' },
    { category: 'Project Submission', items: 'Student submits link', marks: '2', howToScore: 'Get project link before ending', deduction: 'No submission' },
    { category: 'Technical Knowledge', items: 'Answer queries, know platform', marks: '6', howToScore: 'Confident answers, platform expertise', deduction: 'Cannot answer, platform issues' },
    { category: 'Internet Backup', items: 'Shift to GMeet if issues', marks: '1', howToScore: 'Have GMeet link ready, shift if needed', deduction: 'Do not handle internet issues' }
  ];

  const ChecklistSection = ({ title, items, icon: Icon }) => (
    <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
        <Icon className="w-5 h-5 text-blue-600" />
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      </div>
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded">
            <button onClick={() => toggleCheck(item.id)} className="mt-0.5 flex-shrink-0">
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
            {activeTab === 'checklist' && (
              <div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-sm text-yellow-800">
                    <strong>Keep this open during class!</strong> Check off items as you complete them. Total: 100 marks
                  </p>
                </div>

                <ChecklistSection title="Welcome & Start (6 marks)" items={checklistData.welcome} icon={Users} />
                <ChecklistSection title="System Setup (12 marks)" items={checklistData.system} icon={Monitor} />
                <ChecklistSection title="FIRST CLASS SPECIAL FLOW (Not directly scored but critical)" items={checklistData.firstClass} icon={Award} />
                <ChecklistSection title="Interaction (6 marks)" items={checklistData.interaction} icon={Users} />
                <ChecklistSection title="Activities (16 marks)" items={checklistData.activities} icon={FileText} />
                <ChecklistSection title="Concepts (13 marks)" items={checklistData.concepts} icon={Book} />
                <ChecklistSection title="Platform Usage (15 marks)" items={checklistData.platform} icon={Monitor} />
                <ChecklistSection title="Class To-Dos (24 marks)" items={checklistData.todos} icon={CheckSquare} />
              </div>
            )}

            {activeTab === 'rubric' && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Category</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">What Auditor Checks</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-bold">Marks</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">How to Score Full</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">What Causes Deduction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rubricTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 px-4 py-3 font-medium">{row.category}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">{row.items}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">{row.marks}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-green-700">{row.howToScore}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm text-red-600">{row.deduction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'script' && (
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-lg mb-2">Opening (0-2 min)</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Hello [Student Name]! Welcome to your first Codingal Plus class! I am so excited to have you here! 
                    How was your day today? Did anything fun happen at school?
                  </p>
                  <p className="text-xs text-gray-600 mt-2">Big smile, cheerful tone, genuine interest</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-bold text-lg mb-2">Teacher Introduction (2-5 min)</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Let me introduce myself! My name is [Your Name], and I have been teaching coding to students your age for [X years]. 
                    I have helped hundreds of students create amazing games, apps, and projects! Some of my students have built racing games, 
                    animation projects, and even their own websites. Today, we are going to start an exciting journey together. 
                    Congratulations on joining Codingal Plus!
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h3 className="font-bold text-lg mb-2">Ice-Breaker Activity (5-15 min)</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Now let us get to know each other! I would like each of you to introduce yourself. Please share: your name, 
                    which school you go to, which country you are from, your favorite hobby, and any sports or activities you enjoy. 
                    Who would like to go first?
                  </p>
                  <p className="text-xs text-gray-600 mt-2">Encourage each student, make them comfortable, remember details</p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h3 className="font-bold text-lg mb-2">Brain Warm-Up Game (15-20 min)</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Before we start coding, let us warm up our brains with a fun game! This will help us think like programmers. 
                    I am going to share my screen and we will play a quick game together.
                  </p>
                  <div className="text-xs text-gray-600 mt-2 space-y-1">
                    <div>Ages 1-3: Brain for Monster Truck</div>
                    <div>Ages 4-5: Numbers game</div>
                    <div>Ages 6-8: Cannon Strike</div>
                    <div>Ages 9-12: Arithmetica</div>
                  </div>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                  <h3 className="font-bold text-lg mb-2">Dashboard Walkthrough (20-25 min)</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Now let me show you something really cool - your student dashboard! This is where you will see all your lessons, 
                    certificates, and projects. Let me share my screen and login as a student. Look at these sections: 
                    here is where you will find free doubt sessions if you need help, here are your lessons, your quizzes, 
                    and best of all - your certificates when you complete modules!
                  </p>
                </div>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
                  <h3 className="font-bold text-lg mb-2">Inspiration Video (25-29 min)</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Before we start our lesson, I want to show you a short video about why learning coding is so amazing 
                    and how it can help you in the future. Let us watch together!
                  </p>
                  <p className="text-xs text-gray-600 mt-2">Show video: https://youtu.be/nKIu9yen5nc</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-bold text-lg mb-2">During Activity</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Great job! You are doing amazing! Can you show me your screen now? 
                    Let us break this activity into parts. First, we will do [Part 1], then [Part 2]. 
                    What do you think we should do first? That is right! Now you try typing the code yourself...
                  </p>
                  <p className="text-xs text-red-600 mt-2">DO NOT dictate code. Guide with questions instead.</p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h3 className="font-bold text-lg mb-2">Class Closing (Last 5 min)</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Wonderful work today! Before we finish, can you summarize what we learned today in your own words? 
                    Excellent! For your after-class project, you need to [explain project]. 
                    Also, please fill out the feedback form - it really helps me improve. 
                    See you in the next class! Keep coding!
                  </p>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
                  <h3 className="font-bold text-lg mb-2">Parent Interaction (After class)</h3>
                  <p className="text-sm text-gray-700 mb-2"><strong>Script:</strong></p>
                  <p className="text-sm italic text-gray-800">
                    Hello! I am [Your Name], [Student] teacher for Codingal Plus. I wanted to introduce myself and let you know 
                    that [Student] did wonderfully today! We covered [topics], and they showed great understanding. 
                    I am excited to continue this journey together. If you have any questions, please feel free to reach out!
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'pre' && (
              <div className="space-y-4">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Technical Setup (30 min before)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Set up Codingal virtual background</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Test camera - check frame position and quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Test microphone - no background noise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Check lighting - bright enough to see face clearly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Sit at table with chair (NOT bed or floor)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Close ALL unnecessary tabs (WhatsApp, Facebook, personal browsing)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Open class in SEPARATE window (for recording only class window)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Test internet speed - have GMeet link ready as backup</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Lesson Preparation (20 min before)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Review complete lesson plan thoroughly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Know all concepts to be covered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Prepare 2 activities minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Prepare examples to explain concepts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Review previous class notes (if not first class)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Test all code examples yourself</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Have After Class Project ready to explain</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    First Class Special Prep (10 min before)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Prepare teacher introduction (experience, games created)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Open age-appropriate brain game link in separate tab</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Have inspiration video link ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Practice using Login As Student feature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Know curriculum PDF to show future modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Prepare parent introduction points</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Personal Preparation
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">□</span>
                      <span>Professional dressing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">□</span>
                      <span>Hair grooming done</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">□</span>
                      <span>Well-rested and energetic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">□</span>
                      <span>Practice big smile and cheerful tone</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'post' && (
              <div className="space-y-4">
                <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5" />
                    Immediate Actions (Within 5 min after class)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Verify recording was saved properly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Check that only classroom window was recorded</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Confirm student submitted project link</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Mark class as complete (only if 1+ activity done)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">□</span>
                      <span>Note any technical issues for next class</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Documentation (Within 30 min)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Note which concepts were covered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Record which activities were completed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Note student learning pace for next class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Document any student doubts or difficulties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">□</span>
                      <span>Save any custom examples or explanations used</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Review for Next Class
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Plan what to cover in next class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Prepare to discuss previous class project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Note areas where student needs more practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">□</span>
                      <span>Identify concepts to reinforce next time</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'risks' && (
              <div className="space-y-4">
                <div className="bg-red-100 border-l-4 border-red-500 p-4">
                  <h3 className="font-bold text-lg mb-3 text-red-800">HIGH RISK - System Setup (12 marks at stake)</h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>No Codingal virtual background</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Poor lighting or cannot see face clearly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Casual dress or messy appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Sitting on bed or floor instead of table/chair</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Background noise audible</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-100 border-l-4 border-orange-500 p-4">
                  <h3 className="font-bold text-lg mb-3 text-orange-800">HIGH RISK - Class To-Dos (24 marks at stake)</h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Class shorter than 43 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Forgot eye exercise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Did not discuss previous class topic/project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Student did not summarize the class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Did not motivate for feedback form</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>After Class Project not explained in detail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Unnecessary tabs visible (WhatsApp, Facebook, etc)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Recorded full screen instead of just class window</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
                  <h3 className="font-bold text-lg mb-3 text-yellow-800">MEDIUM RISK - Teaching Quality (16 marks at stake)</h3>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Spoon-feeding or dictating code to student</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Student writes less than 80% of code</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not encouraging or appreciating student</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Explaining concept during activity instead of before</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Less than 2 activities completed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Student did not submit project link</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-100 border-l-4 border-pink-500 p-4">
                  <h3 className="font-bold text-lg mb-3 text-pink-800">MEDIUM RISK - Platform Usage (15 marks at stake)</h3>
                  <ul className="space-y-2 text-sm text-pink-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not monitoring student screen actively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not using annotating tool when teaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not using Web Viewer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Student not sharing screen during activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not using available tools (rooms, collaborative learning)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-100 border-l-4 border-purple-500 p-4">
                  <h3 className="font-bold text-lg mb-3 text-purple-800">MEDIUM RISK - Interaction (10 marks at stake)</h3>
                  <ul className="space-y-2 text-sm text-purple-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not asking questions every 2 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Asking only yes/no questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not making class interactive (no hi-fi, pat on back)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Speaking too fast or unclear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Hiding camera or muting mic frequently</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-100 border-l-4 border-indigo-500 p-4">
                  <h3 className="font-bold text-lg mb-3 text-indigo-800">CRITICAL - First Impression (6 marks at stake)</h3>
                  <ul className="space-y-2 text-sm text-indigo-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not welcoming with big smile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Not asking how was their day/school</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Showing impatience with student</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✗</span>
                      <span>Starting recording late (after 3 minutes)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-100 border-l-4 border-teal-500 p-4">
                  <h3 className="font-bold text-lg mb-3 text-teal-800">DO NOT FORGET - First Class Special Items</h3>
                  <ul className="space-y-2 text-sm text-teal-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">!</span>
                      <span>Skip teacher introduction and congratulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">!</span>
                      <span>Skip ice-breaker student introductions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">!</span>
                      <span>Skip brain warm-up game</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">!</span>
                      <span>Skip dashboard walkthrough</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">!</span>
                      <span>Skip inspiration video</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">!</span>
                      <span>Skip parent interaction at end</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingalAuditGuide;