"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isEmpresas = pathname === "/empresas";

  return (
    <nav className="site-nav" aria-label="Navegação secundária">
      <div className="container site-nav__inner">
        {isEmpresas ? (
          <Link href="/" className="site-nav__link">
            ← Para Particulares
          </Link>
        ) : (
          <Link href="/empresas" className="site-nav__link site-nav__link--highlight">
            🏢 Para Empresas
          </Link>
        )}
      </div>
    </nav>
  );
}
