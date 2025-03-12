"use client"
import { useState } from "react";
import { CardProductProps } from "./types";
import { useMedia } from "@/hooks/useMedia";
import Image from "next/image";
import Basket from "@/public/basket.svg";
import Heart from "@/public/heart.svg";
import Eye from "@/public/eye.svg";

import s from "./CardProduct.module.css"

export const CardProduct = ({ name, price, img, discount }: CardProductProps) => {
  const [isHover, setHover] = useState(false)
  const { isDesktop } = useMedia()

  return (
    <div className={s.card}>
      <span className={s.img} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Image src={img} alt={name} layout="fill"/>
        {discount && <span className={s.discount}>{`-${discount}%`}</span>}
        {isDesktop && isHover && (
          <span className={s.overlay}>
            <Basket />
            <Eye />
            <Heart />
          </span>
        )}
      </span>
      <span>{name}</span>
      <span className={s.price}>{price}</span>
    </div>
  )
}