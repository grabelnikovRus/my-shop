import { IProducts } from "@/interfaces/products"

export const getProducts = async (): Promise<IProducts | undefined>  => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api-demo/products?limit=${6}&offset=${0}`)
    console.log(data)
    if (!data.ok) throw Error()

    return data.json()
  } catch(e) {
    console.log(e)
  }
}