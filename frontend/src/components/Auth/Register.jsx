import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleRegister = async () => {
    await fetch("http://localhost/backend/api/auth/register.php", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Registered!");
  };

  return (
    <div className="p-6">
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 block mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2 block mb-2"
      />

      <button className="bg-primary text-white px-4 py-2" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}