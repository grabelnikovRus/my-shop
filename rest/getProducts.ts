import { IProducts } from "@/interfaces/products"

interface GetProductsProps extends URLSearchParams {
  priceMin?: string
  priceMax?: string
  categoryId?: string
  name?: string
  discounted?: string
  offset?: string
}

export const getProducts = async (arg: GetProductsProps): Promise<IProducts | undefined>  => {
  try {
    const params = new URLSearchParams(arg)

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api-demo/products?limit=${6}&offset=${0}&${params.toString()}&`
    )
console.log(data)
    if (!data.ok) throw Error("")

    return data.json()
  } catch(e) {
    console.log(e)
  }
}