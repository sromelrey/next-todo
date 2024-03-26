import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [credentials],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard/todo");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard/todo", nextUrl));
      } else if (!isOnDashboard && !isLoggedIn) {
        // if (
        //   nextUrl.pathname.startsWith("/about-us") ||
        //   nextUrl.pathname.startsWith("/contact-us")
        // )
        return true;
        // else return false;
      }

      return true;
    },
    async session({ session, user }) {
      // session.user.id = user.id;

      return session;
    },
  },
} satisfies NextAuthConfig;
