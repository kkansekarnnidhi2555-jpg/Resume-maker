import PersonalInfo from "../components/Form/PersonalInfo";
import Education from "../components/Form/Education";
import Experience from "../components/Form/Experience";
import Projects from "../components/Form/Projects";
import Skills from "../components/Form/Skills";
import ResumePreview from "../components/Preview/ResumePreview";

export default function Builder() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-auto bg-secondary">
        <PersonalInfo />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>

      <div className="w-1/2 p-4">
        <ResumePreview />
      </div>
    </div>
  );
}