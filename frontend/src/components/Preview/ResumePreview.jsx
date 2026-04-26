import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { enhanceResumeData } from "../../utils/ResumeStrength";

import Minimal from "../Templates/Minimal";
import Modern from "../Templates/Modern";
import Creative from "../Templates/Creative";
import Professional from "../Templates/Professional";
import Elegant from "../Templates/Elegant";

export default function ResumePreview() {
  const { resumeData } = useContext(ResumeContext);
  
  // Apply strength mode enhancements dynamically
  const enhancedData = enhanceResumeData(resumeData);

  const templates = {
    minimal: <Minimal data={enhancedData} />,
    modern: <Modern data={enhancedData} />,
    creative: <Creative data={enhancedData} />,
    professional: <Professional data={enhancedData} />,
    elegant: <Elegant data={enhancedData} />,
  };

  return (
    <div 
      id="resume-preview" 
      className="bg-white shadow-2xl scale-[0.8] origin-top md:scale-[0.9] lg:scale-100 transition-all duration-300 print:scale-100 print:shadow-none print:m-0"
    >
      {templates[resumeData.template] || <Minimal data={enhancedData} />}
    </div>
  );
}