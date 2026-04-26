export const enhanceResumeData = (data) => {
  if (data.mode === "basic") return data;

  const enhancedData = { ...data };

  // Helper to replace keywords based on mode
  const enhanceText = (text, mode) => {
    if (!text) return text;
    
    let newText = text;
    
    // Intermediate replacements
    if (mode === "intermediate" || mode === "strong") {
      newText = newText
        .replace(/Made/g, "Developed")
        .replace(/Did/g, "Executed")
        .replace(/Worked on/g, "Contributed to")
        .replace(/Helped/g, "Assisted in")
        .replace(/Got/g, "Achieved");
    }
    
    // Strong replacements
    if (mode === "strong") {
      newText = newText
        .replace(/Developed/g, "Engineered")
        .replace(/Executed/g, "Spearheaded")
        .replace(/Contributed to/g, "Orchestrated")
        .replace(/Assisted in/g, "Facilitated")
        .replace(/Achieved/g, "Attained")
        .replace(/website/g, "scalable web application")
        .replace(/app/g, "production-ready application")
        .replace(/fixed bugs/g, "resolved complex technical issues and optimized performance");
    }
    
    return newText;
  };

  // Enhance Experience
  if (enhancedData.experience) {
    enhancedData.experience = enhancedData.experience.map(exp => ({
      ...exp,
      desc: enhanceText(exp.desc, data.mode)
    }));
  }

  // Enhance Projects
  if (enhancedData.projects) {
    enhancedData.projects = enhancedData.projects.map(proj => ({
      ...proj,
      desc: enhanceText(proj.desc, data.mode)
    }));
  }

  return enhancedData;
};
