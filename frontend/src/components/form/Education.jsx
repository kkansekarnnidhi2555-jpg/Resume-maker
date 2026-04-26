import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Education() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { school: "", degree: "", year: "" }],
    });
  };

  const removeEducation = (index) => {
    const updated = [...resumeData.education];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, education: updated });
  };

  const handleChange = (i, e) => {
    const updated = [...resumeData.education];
    updated[i][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, education: updated });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">🎓</span>
          Education
        </h2>
        <button onClick={addEducation} className="text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-100 transition">
          + Add
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {resumeData.education.map((edu, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg relative group"
            >
              <button 
                onClick={() => removeEducation(i)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
              >
                ✖
              </button>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  name="degree"
                  value={edu.degree}
                  placeholder="Degree (e.g., B.S. Computer Science)"
                  onChange={(e) => handleChange(i, e)}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
                <input
                  name="school"
                  value={edu.school}
                  placeholder="School/University"
                  onChange={(e) => handleChange(i, e)}
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
              </div>
              
              <input
                name="year"
                value={edu.year}
                placeholder="2020 - 2024"
                onChange={(e) => handleChange(i, e)}
                className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {resumeData.education.length === 0 && (
        <p className="text-gray-400 text-sm italic text-center py-4 border-2 border-dashed border-gray-100 rounded-lg">No education added yet.</p>
      )}
    </div>
  );
}