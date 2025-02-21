import Link from "next/link";
import Logo from "@/public/logo.svg";
import Heart from "@/public/heart.svg";
import User from "@/public/user.svg";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { Button } from "../Button/Button";
import { Basket } from "../Basket/Basket";
import { Search } from "../Search/Search";

import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/catalog" className={s.catalog}>
        Магазин
      </Link>
      <Link href="/about" className={s.about}>
        О нас
      </Link>
      <hr className={s.hr} />
      <Search className={s.search} />
      <Basket count={4} />
      <MenuMobile />
      <Button className={s.heart}>
        <Heart />
      </Button>
      <Link href="/lk" className={s.user}>
        <User />
      </Link>
    </header>
  );
}
