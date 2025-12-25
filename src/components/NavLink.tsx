"use client";
import Link from "next/link";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClassName?: string; // Not implemented; placeholder
  children: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink({ href, className, children }, ref) {
  return (
    <Link ref={ref as any} href={href} className={cn(className)}>
      {children}
    </Link>
  );
});

export { NavLink };
