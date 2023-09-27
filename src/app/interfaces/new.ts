import { Description } from "./description"

export interface New {
  merchantId: number
  status: string
  name: any
  featured: boolean
  date: string
  title: string
  subtitle: any
  slug: string
  shortDescription: string
  largeDescription: string
  creationDate: string
  lastUpdateDate: string
  newId: number
  imagesURL: string[]
  imageUrl: string
  authors: any[]
  tags: any[]
  categories: any[]
  descriptions: Description[]
  metatags: any[]
}