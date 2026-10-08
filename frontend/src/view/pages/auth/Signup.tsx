import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../../redux/slices/AuthSlice";
import type { AppDispatch } from "../../../redux/store/store";

const Signup: React.FC = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(signupUser(data));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-2xl">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-white">Create Account</h2>

        <p className="mt-2 text-sm text-gray-400">Sign up to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={handleChange}
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleChange}
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-300"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
