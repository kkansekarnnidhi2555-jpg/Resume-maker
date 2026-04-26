import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function TemplateSelector() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full">
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
        🎨 Template
      </h2>
      <div className="relative">
        <select
          className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition font-medium"
          value={resumeData.template}
          onChange={(e) => setResumeData({ ...resumeData, template: e.target.value })}
        >
          <option value="minimal">Minimal (ATS Friendly)</option>
          <option value="modern">Modern Professional</option>
          <option value="creative">Creative Bold</option>
          <option value="professional">Executive</option>
          <option value="elegant">Elegant Classic</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}