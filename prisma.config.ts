// Prisma v7 project config — https://pris.ly/d/prisma-config
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Neon: use direct (non-pooled) URL for migrations
    url: process.env["DIRECT_URL"] ?? process.env["DATABASE_URL"],
  },
});
