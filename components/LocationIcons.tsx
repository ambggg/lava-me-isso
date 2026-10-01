import type { ReactNode } from "react";

const icon = (children: ReactNode) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const icons = {
  bag: icon(
    <>
      <path d="M6 9h12l-1.2 11a1 1 0 0 1-1 .9H8.2a1 1 0 0 1-1-.9L6 9z" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
    </>
  ),
  door: icon(
    <>
      <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" />
      <path d="M3 21h18M14.5 12h.01" />
    </>
  ),
  gift: icon(
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8" />
      <path d="M12 8S10.5 3 8 4.5 9 8 12 8zM12 8s1.5-5 4-3.5S15 8 12 8z" />
    </>
  ),
  card: icon(
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h3" />
    </>
  ),
  pin: icon(
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  arrow: icon(<path d="M5 12h14M13 6l6 6-6 6" />),
  iron: icon(
    <>
      <path d="M3 17h18v-3a6 6 0 0 0-6-6H9" />
      <path d="M3 17l2-6h6" />
      <path d="M9 8V5h6" />
    </>
  ),
  check: icon(<path d="M5 12.5l4.5 4.5L19 7.5" />),
};

