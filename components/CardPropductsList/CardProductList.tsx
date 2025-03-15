"use client"
import { CardProduct } from "../CardProduct/CardProduct"
import { getProducts } from "@/rest/getProducts";
import { IProducts } from "@/interfaces/products";

import s from "./CardProductList.module.css"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination } from "../Pagination/Pagination";


export const CardProductList = () => {
  const [data, setData] = useState<IProducts>()
  const searchParams = useSearchParams()

  useEffect(() => {
    getProducts(searchParams).then((data) => data && setData(data))
  }, [searchParams]);

  if (!data?.totalProducts) return <div>Ничего не найдено</div>

  return (
    <>
      <ul className={s.list}>
        {data?.products.map(({ name, price, images, discount }, i) => (
          <CardProduct
            key={name + i}
            name={name}
            price={price}
            img={images[0]}
            discount={discount}
          />
        ))}
      </ul>
      <Pagination offset={data?.offset} totalProducts={data?.totalProducts} />
    </>
  )
} 