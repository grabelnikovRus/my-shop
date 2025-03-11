"use client"
import styles from "./page.module.css";
import { Toggle, Range } from "@/components";

export default function Home() {
  return <div className={styles.page}>
    <Toggle onChange={(a) => console.log(a)} value={true} label="Со скидкой" />
    <Range max={34200} min={310} value={{max: 1150, min: 360}} onChange={(e) => console.log(e)}/>
    </div>;
}
