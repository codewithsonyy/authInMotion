"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import AlertMe from "../../components/AlertMe";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      toast.error("Fill all fields!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);

      if (data?.error == null) {
        setEmail("");
        setPassword("");
        router.push("/profile");
      } else {
        toast.error("INvalid User! or Incorrect credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <section className="h-fit">
      <div className="h-full mt-8 p-8 rounded-md">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={submitHandler}>
              <div className="relative mb-6">
                <label className="">
                  Email address
                </label>
                <input
                  className="peer block min-h-[auto] w-full rounded  bg-white px-3 py-[0.32rem] leading-[2.15] outline-none"
                  type="email"
                  id="email_field"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative mb-6">
                <label  className="">
                  Password
                </label>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded  bg-white px-3 py-[0.32rem] leading-[2.15] outline-none"
                  value={password|| ""}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  className="inline-block rounded shadow-md bg-slate-900 hover:bg-[#2ff9c6] hover:text-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white  focus:outline-none"
                  type="submit"
                >
                  Sign in
                </button>

                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Dont have an account?{" "}
                  <Link href="/register">
                    <span className=" text-green-400 ">Register Now</span>
                  </Link>
                </p>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
