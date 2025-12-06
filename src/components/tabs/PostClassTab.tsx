import { CheckSquare, FileText, Award } from 'lucide-react';

export function PostClassTab() {
  return (
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
  );
}
