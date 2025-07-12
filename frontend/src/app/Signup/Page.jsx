"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Implement API call or auth logic here
    console.log("Registering:", form);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 text-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Join <span className="text-red-600">SwapX</span>
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition text-white font-medium py-2 rounded"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}
