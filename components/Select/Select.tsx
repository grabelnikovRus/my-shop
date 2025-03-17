import { Select as SelectHeadless } from '@headlessui/react'
import { SelectProps } from './types';

import s from "./Select.module.css"

export function Select({ name, options, value, onChange }: SelectProps) {
  return (
    <SelectHeadless name={name} value={value} onChange={onChange} className={s.root}>
      {options.map(({ id, name }) => (<option key={id} value={id} className={s.options}>{name}</option>))}
    </SelectHeadless>
  )
}
