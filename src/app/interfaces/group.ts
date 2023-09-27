import { Category } from "./category"
import { Serie } from "./serie"

export interface Group {
  merchantId: number
  serieId: number
  versionId: any
  templateId: any
  associationType: string
  associatedGroupId: any
  status: string
  position: number
  type: string
  isPaid: boolean
  isPartner: boolean
  hasApproval: boolean
  hasPartner: boolean
  hasPolls: boolean
  name: string
  description?: string
  slug: string
  groupId: number
  imageUrl?: string
  category?: Category
  serie: Serie
}