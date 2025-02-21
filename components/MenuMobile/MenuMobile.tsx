"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../Button/Button";
import User from "@/public/user.svg";
import Heart from "@/public/heart.svg";
import Exit from "./exit.svg";
import MenuLogo from "./menu-logo.svg";
import cn from "classnames";

import s from "./MenuMobile.module.css";
import { Search } from "../Search/Search";

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className={s.btn} onClick={() => setIsOpen((prev) => !prev)}>
        <MenuLogo />
      </Button>
      <nav className={cn(s.root, { [s.root__open]: isOpen })}>
        <Search transformOnFocus={false} />
        <Link href="/">Главная</Link>
        <Link href="/catalog">Магазин</Link>
        <Link href="/about">О нас</Link>
        <hr />
        <Link href="/lk" className={s.link}>
          <User />
          Мой аккаунт
        </Link>
        <Link href="/about" className={s.link}>
          <Heart />
          Избранное
        </Link>
        <Button className={s.link}>
          <Exit />
          Выход
        </Button>
      </nav>
    </>
  );
};
