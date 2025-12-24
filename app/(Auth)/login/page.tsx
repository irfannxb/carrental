"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    console.log(res);
    if (!res?.error) {
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 500,
      });
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } else {
      if (res?.error === "CredentialsSignin") {
        toast.error("Invalid email or password", {
          autoClose: 500,
          position: "top-right",
        });
      } else {
        toast.error(res?.error as string, {
          autoClose: 500,
          position: "top-right",
        });
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage: "url('/images/loginbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Card */}
        <div className="relative w-full max-w-md rounded-2xl bg-white/95 shadow-2xl px-8 py-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome Back
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-medium font-medium text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="username"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm
                     focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none
                     transition"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-medium font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm
                     focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none
                     transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white
                   hover:bg-blue-700 active:scale-[0.98] transition"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}
