import { useContext } from "react";
import PersonalInfo from "./components/form/PersonalInfo";
import Education from "./components/form/Education";
import Experience from "./components/form/Experience";
import Projects from "./components/form/Projects";
import Skills from "./components/form/Skills";
import Certifications from "./components/form/Certifications";
import ResumePreview from "./components/Preview/ResumePreview";
import TemplateSelector from "./components/form/TemplateSelector";
import ModeSelector from "./components/form/ModeSelector";
import AtsScore from "./components/Preview/AtsScore";
import { downloadPDF } from "./utils/PdfExport";
import { ResumeContext } from "./context/ResumeContext";

function App() {
  const { resumeData } = useContext(ResumeContext);

  const saveToCloud = async () => {
    if (!resumeData.personal.email) {
      alert("Please enter your email in the Personal Info section to save your resume.");
      return;
    }

    try {
      const response = await fetch("http://localhost/backend/api/resume/save.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: resumeData.personal.email,
          resumeData: resumeData
        }),
      });
      const data = await response.json();
      if (data.status === "success") {
        alert("Resume saved successfully!");
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* LEFT: FORM SECTION */}
      <div className="w-1/2 p-8 overflow-y-auto bg-white border-r shadow-sm relative">
        <div className="flex justify-between items-center mb-8 sticky top-0 bg-white z-10 pb-4 border-b">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Resume<span className="text-blue-600">Builder</span>
          </h1>
          <div className="flex gap-2">
            <button
              onClick={saveToCloud}
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-200 transition shadow-sm border border-slate-200"
            >
              ☁ Save
            </button>
            <button
              onClick={downloadPDF}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <TemplateSelector />
          <ModeSelector />
        </div>

        <div className="space-y-6">
          <PersonalInfo />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
        </div>

        <div className="mt-8">
          <AtsScore />
        </div>
      </div>

      {/* RIGHT: PREVIEW SECTION */}
      <div className="w-1/2 p-8 bg-slate-100 overflow-y-auto flex justify-center">
        <ResumePreview />
      </div>
    </div>
  );
}

export default App;