import { limit } from "@/components/helpers/const"
import { IProducts } from "@/interfaces/products"

interface GetProductsProps extends URLSearchParams {
  priceMin?: string
  priceMax?: string
  categoryId?: string
  name?: string
  discounted?: string
  offset?: string
}

export const getProducts = async (arg?: GetProductsProps): Promise<IProducts | undefined>  => {
  try {
    const params = new URLSearchParams(arg?.toString() ?? {})

    if (!params.has("offset")) params.set("offset", "0")

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api-demo/products?limit=${limit}&${params.toString()}`
    )

    if (!data.ok) {
      console.log(data)
      throw Error("")
    }

    return data.json()
  } catch(e) {
    console.log(e)
  }
}