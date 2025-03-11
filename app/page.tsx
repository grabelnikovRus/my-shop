"use client"
import styles from "./page.module.css";
import { Toggle, Range, Select } from "@/components";

const options = [
  {value: "rus", label: "Russia"},
  { value: "us", label: "USA" },
  { value: "jpn", label: "Japan" }
]

export default function Home() {
  return <div className={styles.page}>
    <Toggle onChange={(a) => console.log(a)} value={true} label="Со скидкой" />
    <Range max={34200} min={310} value={{max: 1150, min: 360}} onChange={(e) => console.log(e)}/>
    <Select name="select" options={options} />
    </div>;
}
