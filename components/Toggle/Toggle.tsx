"use client"
import { useId } from "react"
import { ToggleProps } from "./types"
import cn from "classnames"

import s from "./Toggle.module.css"

export const Toggle = ({ label, onChange, defaulValue, value, name }: ToggleProps) => {
  const id = useId()

  return (
    <div className={s.root}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input 
        type="checkbox" 
        name={name} 
        id={id} 
        defaultChecked={defaulValue} 
        className={cn(s.input, { [s.active]: value })} 
        onClick={() => onChange(!value)}
      />
    </div>
  )
}