import { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function Skills() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [skill, setSkill] = useState("");

  const addSkill = (e) => {
    e.preventDefault();
    if (!skill.trim()) return;
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill.trim()],
    });
    setSkill("");
  };

  const removeSkill = (index) => {
    const updated = [...resumeData.skills];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, skills: updated });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">⚡</span>
        Skills
      </h2>

      <form onSubmit={addSkill} className="flex gap-2 mb-4">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="E.g. JavaScript, React, Node.js"
          className="flex-1 p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((s, i) => (
          <div key={i} className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 text-sm group">
            <span className="text-gray-800 font-medium mr-2">{s}</span>
            <button 
              type="button"
              onClick={() => removeSkill(i)}
              className="text-gray-400 hover:text-red-500 transition"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
      
      {resumeData.skills.length === 0 && (
        <p className="text-gray-400 text-sm italic text-center py-4">Add skills to show your expertise.</p>
      )}
    </div>
  );
}