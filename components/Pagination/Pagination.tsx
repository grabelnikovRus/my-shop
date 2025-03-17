import { IProducts } from "@/interfaces/products"
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { getQueryString } from "../helpers/getQueryString";
import { useEffect, useState } from "react";
import { limit } from "../helpers/const";

import s from "./Pagination.module.css"

export const Pagination = ({ 
  offset = 0, 
  totalProducts = 0,
}: Pick<Partial<IProducts>, "offset" | "totalProducts">) => {
  const [currOffset, set] = useState(offset)
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const countPage = Math.ceil(totalProducts / limit);
  const curPage = currOffset === 0 ? 1 : (currOffset / limit) + 1
  
  useEffect(() => {
    push(`${pathname}?${getQueryString({ offset: currOffset }, searchParams)}`)
  }, [currOffset, pathname, push, searchParams, offset])

  return (
    <div className={s.root}>
      {curPage > 1 && <>
        <button onClick={() => set(0)}>{"<"}</button>
        <button onClick={() => set((val) => val - limit)}>{curPage - 1}</button>
      </>}
      <button className={s.current}>{curPage}</button>
      {curPage < countPage && <>
        <button onClick={() => set((val) => val + limit)}>{curPage + 1}</button>
        <button onClick={() => set(totalProducts - limit)}>{">"}</button>
      </>}
    </div>
  )
}