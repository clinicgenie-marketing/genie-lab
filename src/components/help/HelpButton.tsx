"use client";

import { Tooltip } from "../Tooltip";
import { HelpIcon } from "../icons";
import { useHelp } from "./HelpContext";

/** Opens the Help drawer. Icon-only, so it has an accessible name and a tooltip. */
export function HelpButton() {
  const { open, setOpen } = useHelp();
  return (
    <Tooltip label="Help" align="end" suppressed={open}>
      <button type="button" className="ob-btn ob-btn--on-dark ob-btn--icon" aria-label="Help" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}>
        <HelpIcon />
      </button>
    </Tooltip>
  );
}
