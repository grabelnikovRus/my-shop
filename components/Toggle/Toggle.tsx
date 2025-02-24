"use client"
import { useEffect, useId, useState } from "react"
import { ToggleProps } from "./types"
import cn from "classnames"

import s from "./Toggle.module.css"

export const Toggle = ({ label, onChange, defaulValue, value }: ToggleProps) => {
  const [curValue, setCurValue] = useState(defaulValue ?? false)
  const id = useId()

  const onClickToggle = () => {
    onChange(!curValue)
    setCurValue(!curValue)
  }

  useEffect(() => {
    setCurValue(value)
  }, [value])

  return (
    <div className={s.root}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <button id={id} className={cn(s.btn, { [s.active]: curValue })} onClick={onClickToggle}/>
    </div>
  )
}