// Next.js 16 proxy (formerly middleware) — route protection via NextAuth v5
import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

// Next.js 16 requires default export or named "proxy" export
export default auth;

export const config = {
  // Skip static files, images, and Next.js internals
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};
