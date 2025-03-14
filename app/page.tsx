import { getProducts } from "@/rest/getProducts";
import s from "./page.module.css";
import { CardProduct } from "@/components";

export default async function Home() {
  const data = await getProducts()

  if (!data) return null
  
  return <div className={s.page}>
    <div className={s.list}>
      {data.products.map(({ name, price, images, discount }) => (
        <CardProduct
          key={name}
          name={name}
          price={price}
          img={images[0]}
          discount={discount}
        />
      ))}
    </div>
  </div>;
}
