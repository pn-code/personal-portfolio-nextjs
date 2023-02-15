import React from "react";

const Login = () => {
  return <div className="w-full h-[600px] flex flex-col justify-center items-center pt-[80px]">
    <div className="flex flex-col justify-center items-center">
        <h1 className="mb-10">Login</h1>
        <form className="flex flex-col gap-4">
            <input className="p-2 rounded-md w-72" type="text" placeholder="username"/>
            <input className="p-2 rounded-md w-72" type="text" placeholder="password"/>
        <button className="h-12">Login</button>
        </form>
    </div>
  </div>;
};

export default Login;
