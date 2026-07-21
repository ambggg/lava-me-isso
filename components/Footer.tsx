import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo variant="dark" className="footer__logo" />
        <ul className="footer__links">
          <li>
            <a href="https://wa.me/351910675457" target="_blank" rel="noopener">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lavameisso" target="_blank" rel="noopener">
              Instagram @lavameisso
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/lavameisso" target="_blank" rel="noopener">
              Facebook @lavameisso
            </a>
          </li>
          <li>
            <Link href="/empresas">Para Empresas</Link>
          </li>
        </ul>
        <p className="footer__zones">Zonas servidas: Santarém · Cartaxo</p>
        <p className="footer__copy">&copy; 2026 lava-me isso.</p>
      </div>
    </footer>
  );
}
