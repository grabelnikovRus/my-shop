"use client"

import styles from "./page.module.css";
import { Toggle } from "@/components";

export default function Home() {
  return <div className={styles.page}>
    <Toggle onChange={(a) => console.log(a)} value={true} label="Со скидкой" />
    
    </div>;
}
