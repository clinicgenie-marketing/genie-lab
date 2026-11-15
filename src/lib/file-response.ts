import type { FileRef } from "./platform/files";

/** Serves an evidence file safely: fixed type, no sniffing, sandboxed, never cached publicly. */
export function fileResponse(ref: FileRef, bytes: Uint8Array): Response {
  const inline = ref.type.startsWith("image/") || ref.type === "application/pdf" || ref.type.startsWith("text/plain");
  return new Response(new Blob([bytes as BlobPart]), {
    headers: {
      "Content-Type": ref.type,
      "Content-Length": String(bytes.byteLength),
      "Content-Disposition": `${inline ? "inline" : "attachment"}; filename*=UTF-8''${encodeURIComponent(ref.name)}`,
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "sandbox; default-src 'none'; img-src 'self'; style-src 'unsafe-inline'",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
