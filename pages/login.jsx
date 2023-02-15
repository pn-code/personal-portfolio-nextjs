import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/login", { username, password });
    console.log(res)
  };

  return (
    <div className="w-full h-[600px] flex flex-col justify-center items-center pt-[80px]">
      <h1 className="mb-10">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="p-2 rounded-md w-72"
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="p-2 rounded-md w-72"
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
