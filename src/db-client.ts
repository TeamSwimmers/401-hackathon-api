import "dotenv/config";
import { PrismaClient as AuthDbClient } from "../prisma/generated/auth_client";
import { PrismaClient as ApiDbClient } from "../prisma/generated/api_client";

const globalForAuthPrisma = globalThis as unknown as { prisma: AuthDbClient };
const globalForApiPrisma = globalThis as unknown as { prisma: ApiDbClient };

export const auth_db = globalForAuthPrisma.prisma || new AuthDbClient();
export const api_db = globalForApiPrisma.prisma || new ApiDbClient();

if (process.env.NODE_ENV !== "production") {
  globalForAuthPrisma.prisma = auth_db;
  globalForApiPrisma.prisma = api_db;
}
