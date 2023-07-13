import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    const res = await axios.post("/api/login", { username, password });
    if (res.data.success) {
      router.push("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center pt-[80px] bg-gray-900/90">
      <h1 className="mb-8">Login</h1>
      {error && (
        <span className="text-red-500 font-semibold pb-4">
          Wrong Credentials
        </span>
      )}
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="p-2 rounded-md w-72 text-black"
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="p-2 rounded-md w-72 text-black"
          type="password"
          placeholder="password"
        />
        <button type="submit" className="h-12">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
