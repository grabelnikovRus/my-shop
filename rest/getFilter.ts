import { IFilter } from "@/interfaces/filter"

export const getFilter = async (): Promise<IFilter | undefined>  => {
  try {
    const filter = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api-demo/products/get-filter`)

    if (!filter.ok) throw Error()

    return filter.json()
  } catch(e) {
    console.log(e)
  }
}