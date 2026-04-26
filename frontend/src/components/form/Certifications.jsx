import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Certifications() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addCert = () => {
    setResumeData({
      ...resumeData,
      certifications: [...(resumeData.certifications || []), ""],
    });
  };

  const removeCert = (index) => {
    const updated = [...resumeData.certifications];
    updated.splice(index, 1);
    setResumeData({ ...resumeData, certifications: updated });
  };

  const handleChange = (i, value) => {
    const updated = [...resumeData.certifications];
    updated[i] = value;
    setResumeData({ ...resumeData, certifications: updated });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">🏆</span>
          Certifications
        </h2>
        <button onClick={addCert} className="text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-100 transition">
          + Add
        </button>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {(resumeData.certifications || []).map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2"
            >
              <input
                value={c}
                placeholder="Certification Name (e.g., AWS Certified Solutions Architect)"
                onChange={(e) => handleChange(i, e.target.value)}
                className="flex-1 p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
              />
              <button
                onClick={() => removeCert(i)}
                className="p-2 text-red-400 hover:text-red-600 transition bg-red-50 hover:bg-red-100 rounded-lg"
              >
                ✖
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {(!resumeData.certifications || resumeData.certifications.length === 0) && (
        <p className="text-gray-400 text-sm italic text-center py-4 border-2 border-dashed border-gray-100 rounded-lg">No certifications added yet.</p>
      )}
    </div>
  );
}