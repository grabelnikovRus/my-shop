interface ReviewsType {
  name: string
  rating: number
  date: Date,
  description: string
}

interface ProductType {
  name: string
  price: number
  description: string
  images: string[]
  categoryId: 1
  sku: number
  reviews: ReviewsType[]
  discount?: number
}

export interface IProducts {
  totalProducts: number
  limit: number
  offset: number
  products: ProductType[]
}