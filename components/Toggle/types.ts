export interface ToggleProps { 
  label: string
  value: boolean
  onChange: (val: boolean) => void
  defaulValue?: boolean
}