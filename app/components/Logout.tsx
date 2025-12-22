"use client";
import React from "react";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/login",
        })
      }
      className="bg-blue-500 text-white font-medium py-2 px-6 rounded-full border-2 border-transparent hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 m-5"
    >
      Logout
    </button>
  );
};

export default Logout;
