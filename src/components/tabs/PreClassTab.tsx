import { Clock, FileText, Award, Users } from 'lucide-react';

export function PreClassTab() {
  return (
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
  );
}
