export interface RangeProps {
  min: number
  max: number
  value: {
    min: number
    max: number
  }
  prefix?: string
  onChange: ({max, min}: {max: number, min: number}) => void 
}