import { toNextJsHandler } from "better-auth/next-js";
import { isDatabaseMode } from "@/lib/platform/db";
import { betterAuthInstance } from "@/lib/platform/auth";

/** Better Auth's endpoints (sign in, sign out, session). Only in database mode. */
async function handle(req: Request, method: "GET" | "POST") {
  if (!isDatabaseMode()) return new Response("Not found", { status: 404 });
  return toNextJsHandler(await betterAuthInstance())[method](req);
}

export const GET = (req: Request) => handle(req, "GET");
export const POST = (req: Request) => handle(req, "POST");
