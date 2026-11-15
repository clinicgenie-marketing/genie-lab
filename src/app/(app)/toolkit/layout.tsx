import type { ReactNode } from "react";
import { ToolkitNav } from "./ToolkitNav";

export default function ToolkitLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ToolkitNav />
      {children}
    </>
  );
}
