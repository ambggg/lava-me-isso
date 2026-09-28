import Link from "next/link";
import { Logo } from "./Logo";
import { CookieSettingsButton } from "./CookieConsent";

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
            <Link href="/lavandaria-santarem">Lavandaria em Santarém</Link>
          </li>
          <li>
            <Link href="/lavandaria-cartaxo">Lavandaria no Cartaxo</Link>
          </li>
          <li>
            <Link href="/lavandaria-azambuja">Lavandaria na Azambuja</Link>
          </li>
          <li>
            <Link href="/lavandaria-lisboa-oriente">Lavandaria em Lisboa Oriente</Link>
          </li>
          <li>
            <Link href="/engomadoria">Engomadoria</Link>
          </li>
          <li>
            <Link href="/empresas">Para Empresas</Link>
          </li>
        </ul>
        <p className="footer__zones">
          Zonas servidas: <Link href="/lavandaria-santarem">Santarém</Link> ·{" "}
          <Link href="/lavandaria-cartaxo">Cartaxo</Link> ·{" "}
          <Link href="/lavandaria-azambuja">Azambuja</Link> ·{" "}
          <Link href="/lavandaria-lisboa-oriente">Lisboa Oriente</Link>
        </p>
        <p className="footer__legal">
          <Link href="/privacidade">Política de privacidade</Link> · <CookieSettingsButton />
        </p>
        <p className="footer__copy">&copy; 2026 lava-me isso.</p>
      </div>
    </footer>
  );
}
