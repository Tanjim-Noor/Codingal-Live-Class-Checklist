export function RisksTab() {
  return (
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
  );
}
