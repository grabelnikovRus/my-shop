"use client";
import { ChangeEventHandler, useLayoutEffect, useRef, useState } from "react";
import s from "./Range.module.css";
import { RangeProps } from "./types";

export const Range = ({ min, max, value: { max: currentMaxValue, min: currentMinValue }, onChange }: RangeProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [minValue, setMinValue] = useState(currentMinValue || min)
  const [maxValue, setMaxValue] = useState(currentMaxValue || max)
  const [maxWidthProgress, setMaxWidthProgress] = useState(0)

  const changeMinValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = Math.min(+e.target.value, maxValue)
    setMinValue(val)
    onChange({ max: maxValue, min: val })
  }

  const changeMaxValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = Math.max(+e.target.value, minValue)
    setMaxValue(val)
    onChange({max: val, min: minValue})
  }

  useLayoutEffect(() => {
    setMaxWidthProgress(ref.current?.clientWidth || 0)
  }, [])

  const percent = maxWidthProgress / (max - min)
  
  const posMin = (minValue - min) * percent
  const posMax = maxWidthProgress - ((maxValue - min) * percent) 

  return <div className={s.root} ref={ref}>
    <input 
      type="range"
      min={min}
      max={max}
      value={minValue}
      onChange={changeMinValue}
      className={s.input_max}
    />
    <input
      type="range"
      min={min}
      max={max}
      value={maxValue}
      onChange={changeMaxValue}
      className={s.input_min}
    />
    <div className={s.line} />
    <div className={s.progress} style={{ left: posMin + "px", right: posMax + "px"}}/> 
    <span className={s.values}>{minValue} - {maxValue}</span>
  </div>
}