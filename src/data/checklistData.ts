import type { ChecklistData, RubricRow } from '../types';

export const checklistData: ChecklistData = {
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

export const rubricTable: RubricRow[] = [
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
