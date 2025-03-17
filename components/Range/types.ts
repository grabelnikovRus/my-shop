export interface RangeProps {
  min: number
  max: number
  value: {
    priceMax: number
    priceMin: number
  }
  prefix?: string
  onChange: ({ priceMax, priceMin }: { priceMax: number, priceMin: number}) => void 
}