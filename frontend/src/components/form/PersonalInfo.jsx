import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      personal: {
        ...resumeData.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">👤</span>
        Personal Info
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            name="name"
            placeholder="John Doe"
            onChange={handleChange}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
          <input
            name="title"
            placeholder="Software Engineer"
            onChange={handleChange}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              onChange={handleChange}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              name="phone"
              placeholder="+1 234 567 890"
              onChange={handleChange}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            name="location"
            placeholder="New York, NY"
            onChange={handleChange}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>
    </div>
  );
}