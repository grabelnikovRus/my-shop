import { FormCatalog } from "@/components/FormCatalog/FormCatalog";
import { getFilter } from "@/rest/getFilter";

import s from "./page.module.css";

export default async function Home(props) {
  const searchParams = await props.searchParams

  console.log(searchParams)
  const initProps = await getFilter()

  if (!initProps) return null;

  return (
    <div className={s.page}>
      <h2 className={s.title}>Каталог товаров</h2>
      <FormCatalog initProps={initProps} className={s.form}/>
      <ul className={s.list}>
        <li>dsdsdsd</li>
        <li>dsdsdsd</li>
        <li>dsdsdsd</li>
      </ul>
    </div>
  );
}
