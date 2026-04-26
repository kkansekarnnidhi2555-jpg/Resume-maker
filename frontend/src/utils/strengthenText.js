export const strengthenText = (text, mode) => {
  const map = {
    basic: text,

    intermediate: text
      .replace(/made/gi, "developed")
      .replace(/worked on/gi, "collaborated on"),

    strong: text
      .replace(/made/gi, "engineered")
      .replace(/worked on/gi, "architected")
      .replace(/helped/gi, "spearheaded"),
  };

  return map[mode] || text;
};