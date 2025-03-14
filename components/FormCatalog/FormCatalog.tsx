"use client"
import { Controller, useForm } from "react-hook-form";
import { Select, Input, Range, Toggle } from "@/components";
import { FormCatalogProps } from "./types";
import cn from "classnames"

import s from "./FormCatalog.module.css"
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getQueryString } from "./getQueryString";

const defaultValues = {
  search: "",
  categories: 0,
  discount: false,
  price: { min: 0, max: 0 }
}

type FormCatalogData = typeof defaultValues

export const FormCatalog = ({ initProps: { categories, maxPrice, minPrice }, className }: FormCatalogProps) => {
  const { register, setValue, control, watch } = useForm<FormCatalogData>({ defaultValues });

  const [queryString, setQueryString] = useState("")

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const state = watch();
  
  useEffect(() => {
    setQueryString(getQueryString(state, searchParams))
  }, [searchParams, state])

  useEffect(() => {
    router.push(`${pathname}?${queryString}`)
  }, [pathname, queryString, router])

  useEffect(() => {
    setValue("price", { max: maxPrice, min: minPrice })
  }, [maxPrice, minPrice, setValue])

  return (
    <form className={cn(s.root, className)}>
      <Input {...register("search")} placeholder="Поиск..."/>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            options={[{ id: 0, name: "Все категории" }, ...categories]}
            onChange={onChange}
            value={value}
            name="categories"
          />
        )}
        name="categories"
      />
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <Range 
            max={maxPrice} 
            min={minPrice} 
            prefix="Цена: "
            value={value}
            onChange={(val) => setValue("price", val)} 
          />
        )}
        name="price"
      />
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <Toggle 
            label="Со скидкой" 
            onChange={(val) => setValue("discount", val)} 
            value={value} 
            name="discount"
          />
        )}
        name="discount"
      />
    </form>
  )
}