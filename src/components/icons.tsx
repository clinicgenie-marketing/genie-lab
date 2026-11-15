import { CircleHelp, House } from "lucide-react";

/** Icons at the design system's `icon-size` (20px), hidden from assistive technology. */
const iconProps = { size: 20, "aria-hidden": true, focusable: false } as const;

export const HelpIcon = () => <CircleHelp {...iconProps} />;
export const HomeIcon = () => <House {...iconProps} />;
