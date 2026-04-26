export default function Professional({ data }) {
  const { personal, education, experience, projects, skills, certifications } = data;

  return (
    <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg box-border font-serif text-gray-800 p-10 border-t-[16px] border-[#2C3E50]">
      {/* Header */}
      <header className="border-b-2 border-gray-300 pb-6 mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-[#2C3E50] tracking-tight mb-2 uppercase">{personal.name || "Your Name"}</h1>
        <p className="text-xl text-gray-600 font-medium mb-3">{personal.title || "Professional Title"}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {personal.location && <span>• {personal.location}</span>}
        </div>
      </header>

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#2C3E50] border-b border-gray-300 mb-4 pb-1 uppercase tracking-wider">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-gray-900">{exp.role || "Job Title"}</h3>
                  <span className="text-sm font-semibold text-gray-600">{exp.duration || "Jan 2020 - Present"}</span>
                </div>
                <p className="font-medium text-[#2C3E50] text-sm mb-2">{exp.company || "Company Name"}</p>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">{exp.desc || "Description of your responsibilities and achievements."}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#2C3E50] border-b border-gray-300 mb-4 pb-1 uppercase tracking-wider">Education</h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree || "Degree Name"}</h3>
                  <p className="text-gray-700 text-sm">{edu.school || "University Name"}</p>
                </div>
                <span className="text-sm font-semibold text-gray-600">{edu.year || "2020 - 2024"}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#2C3E50] border-b border-gray-300 mb-4 pb-1 uppercase tracking-wider">Selected Projects</h2>
          <div className="space-y-5">
            {projects.map((proj, i) => (
              <div key={i}>
                <h3 className="font-bold text-gray-900 inline-block mr-2">{proj.name || "Project Name"}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-1 text-justify">{proj.desc || "Project description and technologies used."}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Skills */}
        {skills && skills.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-[#2C3E50] border-b border-gray-300 mb-4 pb-1 uppercase tracking-wider">Core Competencies</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 grid grid-cols-2 gap-1">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-[#2C3E50] border-b border-gray-300 mb-4 pb-1 uppercase tracking-wider">Certifications</h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {certifications.map((cert, i) => (
                <li key={i}>{cert || "Certification Name"}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}