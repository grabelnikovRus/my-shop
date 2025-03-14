"use client";
import { ChangeEventHandler, useLayoutEffect, useRef, useState } from "react";
import { RangeProps } from "./types";
import cn from "classnames";

import s from "./Range.module.css";

export const Range = ({ 
  min, 
  max, 
  value: { priceMax: currentMaxValue, priceMin: currentMinValue } = { priceMin: 0, priceMax: 0 }, 
  onChange,
  prefix
}: RangeProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [minValue, setMinValue] = useState(currentMinValue || min)
  const [maxValue, setMaxValue] = useState(currentMaxValue || max)
  const [maxWidthProgress, setMaxWidthProgress] = useState(0)

  const changeMinValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = Math.min(+e.target.value, maxValue)
    setMinValue(val)
    onChange({ priceMax: maxValue, priceMin: val })
  }

  const changeMaxValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = Math.max(+e.target.value, minValue)
    setMaxValue(val)
    onChange({ priceMax: val, priceMin: minValue})
  }

  useLayoutEffect(() => {
    setMaxWidthProgress(ref.current?.clientWidth || 0)
  }, [])

  const percent = maxWidthProgress / (max - min)
  
  const posMin = ((minValue - min) || 0.1)* percent
  const posMax = maxWidthProgress - ((maxValue - min) * percent) || 0.1

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
    <div className={cn(s.progress, { [s.init]: posMin && posMax})} style={{ left: posMin + "px", right: posMax + "px" }}/> 
    <span className={s.values}>{`${prefix} $${minValue} - $${maxValue}`}</span>
  </div>
}