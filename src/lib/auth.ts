// NextAuth v5 — full config with Prisma adapter (Node.js runtime only)
// Do NOT import this in middleware.ts — use auth.config.ts there
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "@/lib/auth.config";
import { prisma } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: implement credential validation + bcrypt password check
        // Example:
        // const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        // if (!user || !user.passwordHash) return null;
        // const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        // return valid ? user : null;
        return null;
      },
    }),
    // TODO: add OAuth providers (Google, Facebook, etc.) here
  ],
});
