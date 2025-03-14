import { FormCatalog } from "@/components/FormCatalog/FormCatalog";
import { getFilter } from "@/rest/getFilter";
import { getProducts } from "@/rest/getProducts";

import s from "./page.module.css";
import { CardProductList } from "@/components";

type PostPage = Promise<{ searchParams: Record<string, string | string[] | undefined> }>;

export default async function Home(props: PostPage) {
  const searchParams = await props.searchParams
  const initProps = await getFilter()
  const data = await getProducts(searchParams)

  if (!initProps) return null;

  return (
    <div className={s.page}>
      <h2 className={s.title}>Каталог товаров</h2>
      <FormCatalog initProps={initProps} className={s.form}/>
      <CardProductList products={data?.products}/>
    </div>
  );
}
