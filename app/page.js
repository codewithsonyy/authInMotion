"use client";

import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();
  return (
    <div className="flex  justify-center items-center h-screen">
      <section className="  w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mx-auto  flex h-[60vh] lg:flex-row flex-col gap-8"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.95]  p-4 flex  flex-col "
          >
            <h2 className="text-4xl  tracking-wider font-thin">
              welcome to authINmotion!
            </h2>
            <div className="mt-2  flex flex-wrap flex-col justify-between gap-3">
              <p>
                Next.js 13 app router based Next-auth authentication using jwt
                token and mongodb atlas and amazing animation using framer
                motion .{" "}
              </p>
              <a
                className="text-black font-semibold "
                href="https://github.com/codewithsonyy/authInMotion"
              >
                Find my code here!
              </a>
              <p className="mt-3">Please sign in to continue &#x2192;</p>
              {status !== "authenticated" ? (
                <>
                  <button className="bg-slate-900 text-green-400 hover:bg-green-400 active:bg-green-200 hover:text-slate-900 rounded-full w-1/2 py-2">
                    <Link href="/entry"> Yes let me in!</Link>
                  </button>
                </>
              ) : (<div>
                <button className="bg-slate-900 hover:bg-green-400 active:bg-green-200 hover:text-slate-900 text-green-400 rounded-full w-1/2 py-2">
                  <Link href="/profile"> Go to my Profile!</Link>
                </button>
                <button className="bg-slate-900 hover:bg-green-400 active:bg-green-200 hover:text-slate-900 text-green-400 ml-3  rounded-full w-1/3 py-2" onClick={()=>signOut()}>
                  <Link href="/profile" > Logout</Link>
                </button></div>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={zoomIn(0.8, 1.2)}
            className="flex-1 flex justify-center items-center"
          >
            <img src="/l1.png" alt="get-started" className=" object-contain" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
