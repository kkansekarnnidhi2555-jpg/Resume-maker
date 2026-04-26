import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addExp = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { role: "", company: "", duration: "", desc: "" }],
    });
  };

  const removeExp = (index) => {
    const updated = [...resumeData.experience];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, experience: updated });
  };

  const handleChange = (i, e) => {
    const updated = [...resumeData.experience];
    updated[i][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, experience: updated });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">💼</span>
          Experience
        </h2>
        <button onClick={addExp} className="text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-100 transition">
          + Add
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {resumeData.experience.map((exp, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg relative group"
            >
              <button 
                onClick={() => removeExp(i)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
              >
                ✖
              </button>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  name="role"
                  value={exp.role}
                  placeholder="Job Title"
                  onChange={(e) => handleChange(i, e)}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
                <input
                  name="company"
                  value={exp.company}
                  placeholder="Company Name"
                  onChange={(e) => handleChange(i, e)}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
              </div>
              
              <input
                name="duration"
                value={exp.duration}
                placeholder="Jan 2020 - Present"
                onChange={(e) => handleChange(i, e)}
                className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm mb-3"
              />
              
              <textarea
                name="desc"
                value={exp.desc}
                placeholder="Describe your responsibilities and achievements..."
                rows="3"
                onChange={(e) => handleChange(i, e)}
                className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm resize-none"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {resumeData.experience.length === 0 && (
        <p className="text-gray-400 text-sm italic text-center py-4 border-2 border-dashed border-gray-100 rounded-lg">No experience added yet.</p>
      )}
    </div>
  );
}