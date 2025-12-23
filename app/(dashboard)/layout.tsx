import React from "react";
import "../globals.css";
import "../style.css";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Profile from "../components/Profile";
import { redirect } from "next/navigation";
import Logout from "../components/Logout";
import SessionProviderWrapper from "../components/SessionProviderWrapper";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log("SESSION username:", session?.username);
  console.log("SESSION object:", session);
  console.log("SESSION user_id:", session?.user_id);
  if (!session) {
    redirect("/login");
  }
  return (
    <SessionProviderWrapper session={session}>
      <html>
        <body>
          <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-900 text-white">
              <Profile />

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
    </SessionProviderWrapper>
  );
}
