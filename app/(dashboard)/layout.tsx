import React from "react";
import "../globals.css";
import "../style.css";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { getServerSession } from "next-auth";
import { GET as authHandler } from "../api/auth/[...nextauth]/route";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Logout from "../components/Logout";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authHandler);
  if (!session) {
    redirect("/login");
  }
  return (
    <html lang="en">
      <body className="">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-gray-900 text-white">
            <div className="p-6 text-xl font-bold">Car Rental Manager</div>

            <nav className="space-y-2 px-4">
              <Link
                href="/dashboard"
                className="block px-4 py-2 rounded hover:bg-gray-800"
              >
                Dashboard
              </Link>

              <Link
                href="/dashboard/add"
                className="block px-4 py-2 rounded hover:bg-gray-800"
              >
                Add Vehicle
              </Link>

              <Link
                href="/dashboard/list"
                className="block px-4 py-2 rounded hover:bg-gray-800"
              >
                Vehicle List
              </Link>
            </nav>
            <Logout />
          </aside>

          <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  );
}
