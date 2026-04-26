export default function Modern({ data }) {
  const { personal, education, experience, projects, skills, certifications } = data;

  return (
    <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg box-border font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#1E3A5F] text-white p-8">
        <h1 className="text-4xl font-bold mb-2 tracking-wide">{personal.name || "Your Name"}</h1>
        <p className="text-[#F7C8B6] font-medium text-lg mb-1">{personal.title || "Professional Title"}</p>
        <div className="flex flex-wrap gap-4 text-sm mt-3 opacity-90">
          {personal.email && <span>✉ {personal.email}</span>}
          {personal.phone && <span>☏ {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
        </div>
      </header>

      <div className="p-8">
        {/* Experience */}
        {experience && experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4 flex items-center">
              <span className="w-8 h-1 bg-[#F7C8B6] mr-3"></span>
              Experience
            </h2>
            <div className="space-y-4 border-l-2 border-gray-200 ml-3 pl-4">
              {experience.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute w-3 h-3 bg-[#1E3A5F] rounded-full -left-[23px] top-1.5 border-2 border-white"></div>
                  <h3 className="font-bold text-lg text-gray-900">{exp.role || "Job Title"}</h3>
                  <div className="text-[#1E3A5F] font-medium text-sm mb-1">
                    {exp.company || "Company Name"} <span className="text-gray-500 font-normal">| {exp.duration || "Jan 2020 - Present"}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">{exp.desc || "Description of your responsibilities and achievements."}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4 flex items-center">
              <span className="w-8 h-1 bg-[#F7C8B6] mr-3"></span>
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="font-bold text-gray-900">{edu.degree || "Degree Name"}</h3>
                  <div className="flex justify-between mt-1 text-sm text-gray-600">
                    <span>{edu.school || "University Name"}</span>
                    <span className="font-medium">{edu.year || "2020 - 2024"}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects & Skills Row */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Projects */}
          {projects && projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4 flex items-center">
                <span className="w-8 h-1 bg-[#F7C8B6] mr-3"></span>
                Projects
              </h2>
              <div className="space-y-4">
                {projects.map((proj, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-gray-900">{proj.name || "Project Name"}</h3>
                    <p className="text-sm text-gray-700 mt-1">{proj.desc || "Project description and technologies used."}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {skills && skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4 flex items-center">
                <span className="w-8 h-1 bg-[#F7C8B6] mr-3"></span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-[#1E3A5F] text-white text-xs px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4 flex items-center">
              <span className="w-8 h-1 bg-[#F7C8B6] mr-3"></span>
              Certifications
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 list-disc list-inside">
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