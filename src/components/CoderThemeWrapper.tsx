"use client";

import { ReactNode } from "react";
import MatrixBackground from "./MatrixBackground";

interface CoderThemeWrapperProps {
  children: ReactNode;
}

export default function CoderThemeWrapper({
  children,
}: CoderThemeWrapperProps) {
  return (
    <div className="coder-theme-wrapper">
      {/* Matrix background animation that appears on all pages */}
      <MatrixBackground />

      {/* Grid background for the coder aesthetic */}
      <div className="grid-background" />

      {/* Main content */}
      <div className="content-wrapper">{children}</div>
    </div>
  );
}
