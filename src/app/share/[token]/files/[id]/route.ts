import { fileStorage } from "@/lib/platform/files";
import { workStore } from "@/lib/platform/work";
import { fileResponse } from "@/lib/file-response";

/** A file from a shared submission: only files that belong to that lesson's submitted versions. */
export async function GET(_req: Request, { params }: { params: Promise<{ token: string; id: string }> }) {
  const { token, id } = await params;
  const found = await workStore.findShare(token);
  if (!found) return new Response("Not found", { status: 404 });
  const work = await workStore.get(found.internId);
  const belongs = work.submissions.some((s) => s.lessonId === found.share.lessonId && s.items.some((i) => i.kind === "file" && i.file.id === id));
  if (!belongs) return new Response("Not found", { status: 404 });
  const file = await fileStorage.read(found.internId, id);
  if (!file) return new Response("Not found", { status: 404 });
  return fileResponse(file.ref, file.bytes);
}
