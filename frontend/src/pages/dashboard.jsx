import { useEffect, useState } from "react";

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");

    fetch(`http://localhost/backend/api/resume/getResumes.php?user_id=${user_id}`)
      .then(res => res.json())
      .then(data => setResumes(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Saved Resumes</h1>

      {resumes.map((r) => (
        <div key={r.id} className="border p-3 mt-2">
          Resume ID: {r.id}
        </div>
      ))}
    </div>
  );
}