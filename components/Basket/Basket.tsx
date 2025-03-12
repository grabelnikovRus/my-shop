import Link from "next/link";
import BasketLogo from "@/public/basket.svg";
import { BasketProps } from "./types";

import s from "./Basket.module.css";

export const Basket = ({ count }: BasketProps) => {
  return (
    <Link href="/basket" className={s.root}>
      <span>{count}</span>
      <BasketLogo />
    </Link>
  );
};
