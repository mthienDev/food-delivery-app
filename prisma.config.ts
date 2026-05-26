// Prisma v7 project config — https://pris.ly/d/prisma-config
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use DATABASE_URL for migrations/CLI (direct connection)
    // Neon: pooled URL goes in DIRECT_URL for migrations; see .env.example
    url: process.env["DATABASE_URL"],
  },
});
