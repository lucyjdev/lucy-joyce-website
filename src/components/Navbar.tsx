"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-10 backdrop-blur-md bg-card-bg/80 border-b border-border-color shadow-lg">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-terminal-red rounded-full"></div>
            <div className="w-3 h-3 bg-terminal-yellow rounded-full"></div>
            <div className="w-3 h-3 bg-terminal-green rounded-full"></div>
          </div>
          <span className="self-center text-xl font-mono font-semibold text-foreground group-hover:text-accent-primary transition-colors">
            lucy@joyce<span className="text-accent-primary">:~$</span>
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex space-x-2 items-center">
            <NavItem href="/" isActive={pathname === "/"}>
              Home
            </NavItem>
            <NavItem href="/about" isActive={pathname === "/about"}>
              About
            </NavItem>
            <NavItem
              href="/certificates"
              isActive={pathname === "/certificates"}
            >
              Certificates
            </NavItem>
            <NavItem
              href="/blog"
              isActive={pathname === "/blog" || pathname.startsWith("/blog/")}
            >
              Blog
            </NavItem>
            <NavItem href="/projects" isActive={pathname === "/projects"}>
              Projects
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

function NavItem({ href, children, isActive }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`nav-link font-mono ${isActive ? "active" : ""}`}
      >
        {isActive ? `[${children}]` : children}
      </Link>
    </li>
  );
}
