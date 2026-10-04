import type { ReactNode } from "react";


interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/[0.08] px-3.5 py-1.5 text-sm font-medium text-cyan-300 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-500/15">
      {children}
    </span>
  );
}
