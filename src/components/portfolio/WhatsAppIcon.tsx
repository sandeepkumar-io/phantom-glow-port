import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.9 19.1 6 15.8a7.2 7.2 0 1 1 2.9 2.8Z" />
      <path d="M9.2 8.8c.2-.4.3-.5.6-.5h.4c.2 0 .4 0 .5.4l.7 1.6c.1.3 0 .5-.2.7l-.4.5c.7 1.2 1.7 2.2 3 2.9l.5-.6c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.4.6v.4c0 .3-.1.5-.4.7-.5.3-1.1.5-1.8.5-1.8 0-3.7-1.1-5.1-2.5s-2.5-3.2-2.5-5c0-.7.2-1.3.5-1.8Z" />
    </svg>
  );
}
