"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/register/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    if (res.ok) {
      toast.success("Account created successfully");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      toast.error("Failed to create account");
    }
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
              Create an account
            </h1>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-medium font-medium text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm
                     focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none
                     transition"
                required
                name="first_name"
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm
                     focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none
                     transition"
                required
                name="last_name"
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="john.doe"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm
                     focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none
                     transition"
                required
                name="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm
                     focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none
                     transition"
                required
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                required
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white
                   hover:bg-blue-700 active:scale-[0.98] transition"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
