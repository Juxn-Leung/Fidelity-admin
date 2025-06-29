import { createGetOptionTextFn } from '@/utils'

export enum BusinessReviewStatus {
  UNREVIEW = 'UNREVIEW',
  REVIEWED = 'REVIEWED',
  REVIEWING = 'REVIEWING',
}

export const useBusinessReviewStatusHelpers = () => {
  const businessReviewStatusEnumOptions = [
    { value: BusinessReviewStatus.UNREVIEW, label: '未評審' },
    { value: BusinessReviewStatus.REVIEWED, label: '已審核' },
    { value: BusinessReviewStatus.REVIEWING, label: '評審中' },
  ]
  const getBusinessReviewStatusText = createGetOptionTextFn(
    businessReviewStatusEnumOptions
  )
  return { businessReviewStatusEnumOptions, getBusinessReviewStatusText }
}
