"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toolkitAreas } from "@/lib/toolkit";

export function ToolkitNav() {
  const pathname = usePathname();
  return (
    <nav className="gl-subnav" aria-label="Toolkit">
      <ul>
        {toolkitAreas.map((a) => {
          const href = `/toolkit/${a.slug}`;
          return (
            <li key={a.slug}>
              <Link href={href} aria-current={pathname === href ? "page" : undefined}>
                {a.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
