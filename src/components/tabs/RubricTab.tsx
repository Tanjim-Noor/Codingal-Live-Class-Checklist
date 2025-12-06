import { rubricTable } from '../../data/checklistData';

export function RubricTab() {
  return (
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
  );
}
