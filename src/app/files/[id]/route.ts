import { auth } from "@/lib/platform/auth";
import { fileStorage } from "@/lib/platform/files";
import { fileResponse } from "@/lib/file-response";

/** The signed-in intern's own evidence files. */
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const intern = await auth.getCurrentIntern();
  if (!intern) return new Response("Not found", { status: 404 });
  const file = await fileStorage.read(intern.id, (await params).id);
  if (!file) return new Response("Not found", { status: 404 });
  return fileResponse(file.ref, file.bytes);
}
