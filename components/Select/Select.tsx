import { Select as SelectHeadless } from '@headlessui/react'
import { SelectProps } from './types';

import s from "./Select.module.css"

export function Select({ name, options }: SelectProps) {
  return (
    <SelectHeadless name={name} className={s.root}>
      {options.map(({ value, label }) => (<option key={value} value={value} className={s.options}>{label}</option>))}
    </SelectHeadless>
  )
}
