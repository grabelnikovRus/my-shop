export interface IFilter {
  categories: Array<{ id: number; name: string }>
  maxPrice: number
  minPrice: number
}