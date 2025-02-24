"use client"
import styles from "./page.module.css";
import { Toggle, Range } from "@/components";

export default function Home() {
  return <div className={styles.page}>
    <Toggle onChange={(a) => console.log(a)} value={true} label="Со скидкой" />
    <Range max={200} min={10} value={{max: 150, min: 60}} onChange={(e) => console.log(e)}/>
    </div>;
}
