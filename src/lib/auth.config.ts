// NextAuth v5 — base config (edge-compatible, no Prisma/heavy imports)
// Used in middleware.ts for route protection
import type { NextAuthConfig } from "next-auth";

// Routes that do NOT require authentication
const PUBLIC_ROUTES = ["/", "/login", "/register"];
// Routes only for restaurant/chef role
const RESTAURANT_ROUTES = ["/dashboard"];

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isPublic = PUBLIC_ROUTES.some((r) => nextUrl.pathname.startsWith(r));
      const isRestaurantRoute = RESTAURANT_ROUTES.some((r) =>
        nextUrl.pathname.startsWith(r)
      );

      if (isPublic) return true;

      if (isRestaurantRoute) {
        return isLoggedIn && auth?.user?.role === "RESTAURANT";
      }

      return isLoggedIn;
    },
    jwt({ token, user }) {
      // Persist role + id into JWT on sign-in
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      // Expose id + role on session.user
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  providers: [], // providers defined in auth.ts (not edge-safe here)
};
