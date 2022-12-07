import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex flex-row w-full h-screen ">
      {/* Left Image Side */}
      <div className="w-[100%] h-screen bg-green-400 flex">
        <img
          src="/assets/images/login-banner.jpg"
          alt="Sourpy Login"
          className="object object-cover opacity-80"
        />
      </div>

      {/*  Right Form Side*/}
      <div className="flex flex-col justify-center items-center  w-full h-screen  ">
        <p className="py-4 text-green-600 text-3xl italic cursor-default">
          Welcome to Sourpy
        </p>
        <input
          type="text"
          name="sourpy_username"
          id="sourpy_username"
          placeholder="Username"
          className="w-96 h-14 shadow appearance-none border rounded py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline my-4"
        />
        <input
          type="password"
          name="sourpy_password"
          id="sourpy_password"
          placeholder="Password"
          className="w-96 h-14 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
        />
        <button
          type="button"
          className="text-white w-96 bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium text-xl rounded-lg  px-20 py-1 mr-2 mb-2 my-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
        >
          Login
        </button>
        <p className="cursor-default">
          Don't have an account yet?
          <span className="font-bold cursor-pointer hover:underline">
            {" "}
            Create a new Account!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
