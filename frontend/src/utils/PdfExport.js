import html2pdf from "html2pdf.js";

export const downloadPDF = () => {
  const element = document.getElementById("resume-preview");

  html2pdf().from(element).save("resume.pdf");
};