import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, { name: "", link: "", desc: "" }],
    });
  };

  const removeProject = (index) => {
    const updated = [...resumeData.projects];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, projects: updated });
  };

  const handleChange = (i, e) => {
    const updated = [...resumeData.projects];
    updated[i][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: updated });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">🚀</span>
          Projects
        </h2>
        <button onClick={addProject} className="text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-100 transition">
          + Add
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {resumeData.projects.map((proj, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg relative group"
            >
              <button 
                onClick={() => removeProject(i)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
              >
                ✖
              </button>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  name="name"
                  value={proj.name}
                  placeholder="Project Name"
                  onChange={(e) => handleChange(i, e)}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
                <input
                  name="link"
                  value={proj.link}
                  placeholder="Project URL (Optional)"
                  onChange={(e) => handleChange(i, e)}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
              </div>
              
              <textarea
                name="desc"
                value={proj.desc}
                placeholder="Describe your project, technologies used, and what you built..."
                rows="3"
                onChange={(e) => handleChange(i, e)}
                className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm resize-none"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {resumeData.projects.length === 0 && (
        <p className="text-gray-400 text-sm italic text-center py-4 border-2 border-dashed border-gray-100 rounded-lg">No projects added yet.</p>
      )}
    </div>
  );
}