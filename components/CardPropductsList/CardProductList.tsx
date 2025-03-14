import { ProductType } from "@/interfaces/products"
import { CardProduct } from "../CardProduct/CardProduct"

import s from "./CardProductList.module.css"

export const CardProductList = ({ products = [] }: { products?: ProductType[]}) => {
  console.log(products)
  return (
    <ul className={s.list}>
      {products.map(({ name, price, images, discount }, i) => (
        <CardProduct
          key={name + i}
          name={name}
          price={price}
          img={images[0]}
          discount={discount}
        />
      ))}
    </ul>
  )
} 