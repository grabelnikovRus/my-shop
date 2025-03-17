import { FormCatalog } from "@/components/FormCatalog/FormCatalog";
import { getFilter } from "@/rest/getFilter";
import { CardProductList } from "@/components";
import { Suspense } from "react";

import s from "./page.module.css";

export default async function Catalog() {
  const initProps = await getFilter()

  if (!initProps) return null;

  return (
    <div className={s.page}>
      <h2 className={s.title}>Каталог товаров</h2>
      <Suspense>
        <FormCatalog initProps={initProps} className={s.form}/>
        <CardProductList />
      </Suspense>
    </div>
  );
}
