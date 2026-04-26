export default function Creative({ data }) {
  const { personal, education, experience, projects, skills, certifications } = data;

  return (
    <div className="w-[210mm] min-h-[297mm] shadow-lg box-border font-sans flex text-gray-800 bg-white">
      {/* LEFT COLUMN - SIDEBAR */}
      <div className="w-1/3 bg-[#FDF6F2] p-6 border-r border-[#F7C8B6]">
        {/* Profile / Personal */}
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-[#F7C8B6] mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-[#1E3A5F]">
            {personal.name ? personal.name.charAt(0) : "U"}
          </div>
          <h1 className="text-2xl font-bold text-center text-[#1E3A5F] leading-tight mb-1">{personal.name || "Your Name"}</h1>
          <p className="text-center text-sm font-medium text-gray-600 mb-4">{personal.title || "Professional Title"}</p>
          
          <div className="space-y-2 text-sm text-gray-700 border-t border-[#F7C8B6] pt-4">
            {personal.email && <div><strong className="block text-[#1E3A5F]">Email</strong> {personal.email}</div>}
            {personal.phone && <div><strong className="block text-[#1E3A5F]">Phone</strong> {personal.phone}</div>}
            {personal.location && <div><strong className="block text-[#1E3A5F]">Location</strong> {personal.location}</div>}
          </div>
        </div>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#1E3A5F] border-b-2 border-[#1E3A5F] mb-3 pb-1 uppercase tracking-widest">Skills</h2>
            <div className="flex flex-col gap-2">
              {skills.map((skill, i) => (
                <div key={i} className="bg-white border border-[#F7C8B6] px-3 py-1.5 rounded text-sm text-center shadow-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-[#1E3A5F] border-b-2 border-[#1E3A5F] mb-3 pb-1 uppercase tracking-widest">Certifications</h2>
            <ul className="space-y-2 text-sm">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#F7C8B6] mr-2">♦</span>
                  <span>{cert || "Certification Name"}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* RIGHT COLUMN - MAIN CONTENT */}
      <div className="w-2/3 p-8">
        
        {/* Experience */}
        {experience && experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-5 flex items-center">
              <span className="bg-[#1E3A5F] text-white p-1 rounded mr-3 inline-block">💼</span>
              Work Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-[#F7C8B6]">
                  <h3 className="font-bold text-lg text-gray-900">{exp.role || "Job Title"}</h3>
                  <div className="flex justify-between items-center text-sm font-medium text-gray-600 mb-2">
                    <span>{exp.company || "Company Name"}</span>
                    <span className="bg-[#FDF6F2] px-2 py-0.5 rounded text-[#1E3A5F]">{exp.duration || "Jan 2020 - Present"}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.desc || "Description of your responsibilities and achievements."}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-5 flex items-center">
              <span className="bg-[#1E3A5F] text-white p-1 rounded mr-3 inline-block">🚀</span>
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {projects.map((proj, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{proj.name || "Project Name"}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{proj.desc || "Project description and technologies used."}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-5 flex items-center">
              <span className="bg-[#1E3A5F] text-white p-1 rounded mr-3 inline-block">🎓</span>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.degree || "Degree Name"}</h3>
                    <p className="text-sm text-gray-600">{edu.school || "University Name"}</p>
                  </div>
                  <span className="text-sm font-bold text-[#1E3A5F] bg-[#F7C8B6] px-2 py-1 rounded">{edu.year || "2020 - 2024"}</span>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}