export default function Elegant({ data }) {
  const { personal, education, experience, projects, skills, certifications } = data;

  return (
    <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg box-border font-sans text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-10 text-center">
        <h1 className="text-4xl font-light tracking-[0.2em] uppercase mb-2">{personal.name || "Your Name"}</h1>
        <p className="text-gray-300 font-medium tracking-widest text-sm mb-4 uppercase">{personal.title || "Professional Title"}</p>
        <div className="w-16 h-[1px] bg-gray-400 mx-auto mb-4"></div>
        <div className="flex justify-center gap-6 text-xs text-gray-300">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
      </header>

      <div className="p-10 flex-1">
        {/* Experience */}
        {experience && experience.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-light uppercase tracking-widest text-gray-900 mr-4">Experience</h2>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{exp.role || "Job Title"}</h3>
                    <span className="text-xs text-gray-500 tracking-wider">{exp.duration || "Jan 2020 - Present"}</span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium mb-2 uppercase tracking-wide">{exp.company || "Company Name"}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{exp.desc || "Description of your responsibilities and achievements."}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7">
            {/* Education */}
            {education && education.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-light uppercase tracking-widest text-gray-900 mr-4">Education</h2>
                  <div className="flex-1 h-[1px] bg-gray-200"></div>
                </div>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-gray-900">{edu.degree || "Degree Name"}</h3>
                        <span className="text-xs text-gray-500 tracking-wider">{edu.year || "2020 - 2024"}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{edu.school || "University Name"}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {projects && projects.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-light uppercase tracking-widest text-gray-900 mr-4">Projects</h2>
                  <div className="flex-1 h-[1px] bg-gray-200"></div>
                </div>
                <div className="space-y-5">
                  {projects.map((proj, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-gray-900">{proj.name || "Project Name"}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{proj.desc || "Project description and technologies used."}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="col-span-5">
            {/* Skills */}
            {skills && skills.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-light uppercase tracking-widest text-gray-900 mr-4">Skills</h2>
                  <div className="flex-1 h-[1px] bg-gray-200"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-light uppercase tracking-widest text-gray-900 mr-4">Awards</h2>
                  <div className="flex-1 h-[1px] bg-gray-200"></div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-gray-400">•</span>
                      <span>{cert || "Certification Name"}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}