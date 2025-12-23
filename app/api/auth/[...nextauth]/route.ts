import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserType } from "../../../../next-auth-d";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Django Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<UserType | null> {
        const res = await fetch(
          `${process.env.DJANGO_API_URL}/api/token/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          }
        );

        const data = await res.json();

        if (res.ok && data.access) {
          return {
            id: credentials?.username || "",
            accessToken: data.access,
            refreshToken: data.refresh,
            user_id: data.user_id,
            username: data.username,
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day

  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as UserType;
        token.accessToken = u.accessToken;
        token.refreshToken = u.refreshToken;
        token.user_id = u.user_id;
        token.username = u.username;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.accessToken = token.accessToken as string;
        session.user_id = token.user_id as number;
        session.username = token.username as string;
      }
      return session;
    },
  },
  

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
