import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getIdentity } from "@/lib/identity";

/** First visit goes to the Welcome tour; after that, straight to Home. */
export default async function Root() {
  await connection();
  const { intern, settings } = await getIdentity();
  redirect(intern && !settings.welcomeCompletedAt ? "/welcome" : "/home");
}
