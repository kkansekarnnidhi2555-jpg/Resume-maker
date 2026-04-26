import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function ModeSelector() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full">
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
        🧠 Strength Mode
      </h2>
      <div className="relative">
        <select
          className="w-full appearance-none bg-blue-50 border border-blue-100 text-blue-800 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition font-medium"
          value={resumeData.mode}
          onChange={(e) => setResumeData({ ...resumeData, mode: e.target.value })}
        >
          <option value="basic">Basic (Simple)</option>
          <option value="intermediate">Intermediate (Action Verbs)</option>
          <option value="strong">Strong (Optimized)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}