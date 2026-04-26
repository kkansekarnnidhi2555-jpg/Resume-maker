import { useState } from "react";
import { loginUser } from "../../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const res = await loginUser(form);

    if (res.status === "success") {
      localStorage.setItem("user_id", res.id);
      alert("Login Success");
    } else {
      alert("Invalid credentials");
    }
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

      <button onClick={handleLogin} className="bg-primary text-white px-4 py-2">
        Login
      </button>
    </div>
  );
}