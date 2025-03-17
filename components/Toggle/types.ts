export interface ToggleProps { 
  label: string
  value: boolean
  name: string
  onChange: (val: boolean) => void
  defaulValue?: boolean
}