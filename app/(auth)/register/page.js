"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (username === `` || email === `` || password === ``) {
      toast.error("Fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
    }
    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        toast.success("Hello! you are successfully registered ");
        setUserName("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          signIn();
        }, 1500);
        return;
      } else {
        toast.error(res.error);
        return;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div className="p-10 h-fit">
        <h1 className="mb-8 font-extrabold text-4xl">Register </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={submitHandler}>
            <div>
              <label className="block font-semibold" htmlFor="name">
                Username
              </label>
              <input
                className="w-full shadow-inner bg-white rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 "
                type="text"
                name="username"
                required="required"
                value={username || ""}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="email ">
                Email
              </label>
              <input
                className=" shadow-inner bg-white rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                type="email"
                name="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className=" shadow-inner bg-white rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                type="password"
                name="password"
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
                required="required"
              />
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                type="submit"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Submit
              </button>
            </div>
          </form>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
