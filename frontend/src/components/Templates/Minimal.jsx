export default function Minimal({ data }) {
  const { personal, education, experience, projects, skills, certifications } = data;

  return (
    <div className="p-8 text-gray-800 bg-white w-[210mm] min-h-[297mm] shadow-lg box-border font-serif">
      {/* Header */}
      <header className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{personal.name || "Your Name"}</h1>
        <p className="text-sm text-gray-600">
          {personal.email || "email@example.com"} • {personal.phone || "(123) 456-7890"} • {personal.location || "City, State"}
        </p>
      </header>

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg">{exp.role || "Job Title"}</h3>
                <span className="text-sm italic">{exp.duration || "Jan 2020 - Present"}</span>
              </div>
              <p className="font-semibold text-gray-700 text-sm mb-2">{exp.company || "Company Name"}</p>
              <p className="text-sm leading-relaxed">{exp.desc || "Description of your responsibilities and achievements."}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-3 flex justify-between">
              <div>
                <h3 className="font-bold">{edu.degree || "Degree Name"}</h3>
                <p className="text-gray-700 text-sm">{edu.school || "University Name"}</p>
              </div>
              <span className="text-sm italic">{edu.year || "2020 - 2024"}</span>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Projects</h2>
          {projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold inline-block mr-2">{proj.name || "Project Name"}</h3>
              {proj.link && <a href={proj.link} className="text-sm text-blue-600 hover:underline">Link</a>}
              <p className="text-sm leading-relaxed mt-1">{proj.desc || "Project description and technologies used."}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Skills</h2>
          <p className="text-sm leading-relaxed">
            {skills.join(", ") || "Skill 1, Skill 2, Skill 3"}
          </p>
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section>
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Certifications</h2>
          <ul className="list-disc list-inside text-sm">
            {certifications.map((cert, i) => (
              <li key={i}>{cert || "Certification Name"}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}