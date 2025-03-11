import Link from "next/link";
import { FooterForm } from "./common/FooterForm";
import In from "./in.svg";
import F from "./f.svg";
import X from "./x.svg";
import Instagram from "./instagram.svg";

import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.root}>
      <FooterForm className={s.form} />
      <Link href="/contacts" className={s.contacts}>
        КОНТАКТЫ
      </Link>
      <Link href="/conditions" className={s.conditions}>
        УСЛОВИЯ ПОКУПКИ
      </Link>
      <Link href="/delivery" className={s.delivery}>
        ДОСТАВКА И ВОЗВРАТ
      </Link>
      <div className={s.links}>
        <Link href="https://ru.linkedin.com">
          <In />
        </Link>
        <Link href="https://www.facebook.com/">
          <F />
        </Link>
        <Link href="https://www.instagram.com/">
          <Instagram />
        </Link>
        <Link href="https://www.x.com/">
          <X />
        </Link>
      </div>
      <span className={s.copyright}>© 2024 Shoppe</span>
    </footer>
  );
};
