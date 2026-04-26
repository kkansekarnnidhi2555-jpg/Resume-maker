import { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    personal: { name: "", email: "" },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    template: "minimal",
    mode: "basic",
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};