import { ReadonlyURLSearchParams } from "next/navigation"

export const getQueryString = <T extends object>(
  state: T, 
  searchParams: ReadonlyURLSearchParams
) => {
  const params = new URLSearchParams(searchParams.toString())

  
  Object.entries(state).forEach(([name, value]) => {
    if (typeof value === "object" && value !== null) {
      Object.entries(value as object).forEach(([n, v]) => {
        params.set(n, v)

        return
      })
    }

    if (
      (name === "name" && !value) || name === "price"
    ) return

    if (name === "discounted" || name === "categoryId") {
      if (value && value !== "0") {
        params.set(name, value)
      } else {
        params.delete(name)
      }
      return
    }
  
    params.set(name, value)
  })

  return params.toString();
}