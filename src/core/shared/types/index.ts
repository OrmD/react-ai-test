import { TVariant } from '../ui/icons/service'

export type Contract = {
  id: string
  company: string
  logo: string
  title: string
  price: number
  priceType: string
  duration: string
  renewable: boolean
  tags: string[]
  category: string
  description: string
}
export type  Category = {
  id: number
  name: string
  icon: TVariant
}

export type ResponseDataContracts = {
  data: Contract[]
  categories: string[]
}