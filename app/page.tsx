import Link from "next/link";
import { getProducts } from "@/rest/getProducts";
import { CardProductList, Gallery } from "@/components";
import img1 from "@/public/img1.png"
import img2 from "@/public/img2.png"

import s from "./page.module.css";

export default async function Home() {
  const data = await getProducts()

  if (!data) return null

  const info = data.products.slice(0, 2)
  const slidesInfo = new Array(6).fill(null).map((_, i) => ({ ...info[i % 2 === 0 ? 0 : 1], img: i % 2 === 0 ? img1 : img2 }))
  
  return (
    <div className={s.page}>
      <Gallery slidesInfo={slidesInfo} />
      <div className={s.info}>
        <span>Последние поступления</span>
        <Link href="/catalog" className={s.link}>Все</Link>
      </div>
      <CardProductList home/>
    </div>
  );
}
