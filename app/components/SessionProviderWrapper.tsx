// components/SessionProviderWrapper.tsx

"use client"; // This marks the component as a Client Component.

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

// Wraps the entire layout with SessionProvider for client-side use
interface SessionProviderWrapperProps {
  session: Session | null; // The session passed from the parent layout
  children: React.ReactNode;
}

const SessionProviderWrapper = ({
  session,
  children,
}: SessionProviderWrapperProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
