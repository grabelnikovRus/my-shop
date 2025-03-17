"use client"
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useMedia } from "@/hooks/useMedia";
import { GalleryProps } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./Gallery.module.css"

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
};

export const Gallery = ({ slidesInfo }: GalleryProps) => {
  console.log(slidesInfo)
  const { isMobile } = useMedia()
  return (
    <div className={s.container}>
      <Slider {...settings}>
        {slidesInfo.map(({ name, price, img, sku }, i) => (
          <div className={s.slide} key={name + i}>
            <Image src={img} alt={name} className={s.image} height={isMobile ? 354 : 900} objectFit="contain"/>
            <div className={s.info}>
              <span className={s.name}>{name}</span>
              <span>${price}</span>
              <Link href={`/catalog/${sku}`} className={s.link}>Смотерть</Link>
            </div>
          </div>))}
      </Slider>
    </div>

  )
}