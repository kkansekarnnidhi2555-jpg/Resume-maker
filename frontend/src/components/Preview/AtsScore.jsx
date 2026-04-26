import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function AtsScore() {
  const { resumeData } = useContext(ResumeContext);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let newScore = 0;

    // Personal Info (20%)
    if (resumeData.personal?.name?.trim().length > 2) newScore += 10;
    if (resumeData.personal?.email?.includes("@")) newScore += 10;

    // Education (20%)
    if (resumeData.education && resumeData.education.length > 0) newScore += 20;

    // Experience (30%)
    if (resumeData.experience && resumeData.experience.length > 0) {
      newScore += 30;
      // Bonus if they have descriptions
      if (resumeData.experience.some(exp => exp.description && exp.description.length > 20)) {
        newScore += 5;
      }
    }

    // Skills (15%)
    if (resumeData.skills && resumeData.skills.length > 0) newScore += 15;

    // Projects (10%)
    if (resumeData.projects && resumeData.projects.length > 0) newScore += 10;

    // Cap at 100
    setScore(Math.min(newScore, 100));
  }, [resumeData]);

  let colorClass = "text-red-500";
  let bgClass = "bg-red-500";
  if (score >= 75) {
    colorClass = "text-green-500";
    bgClass = "bg-green-500";
  } else if (score >= 40) {
    colorClass = "text-yellow-500";
    bgClass = "bg-yellow-500";
  }

  return (
    <div className="mt-4 p-4 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-700">ATS Resume Score</h2>
      <div className="flex items-center mt-2">
        <div className="w-full bg-gray-200 rounded-full h-4 mr-2 overflow-hidden">
          <div
            className={`h-4 rounded-full transition-all duration-500 ease-out ${bgClass}`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
        <span className={`font-bold ${colorClass}`}>{score}%</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        {score >= 80 ? "Excellent! Your resume is highly ATS optimized." :
          score >= 50 ? "Good start! Add more experience and skills to boost your score." :
            "Your resume is missing key sections. Fill out all fields to improve your score."}
      </p>
    </div>
  );
}
