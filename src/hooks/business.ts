import { useDetail } from '@/contexts/DetailContext'

export default function useBusiness() {
  const {
    data: { business, page },
    refresh,
    refreshAsync,
  } = useDetail()
  return {
    business,
    businessId: business.id as string,
    businessTypeCode: business?.businessType?.code as string,
    page: page as 'business' | 'review' | 'resolution' | 'distribution',
    editable: page === 'business',
    refresh,
    refreshAsync,
  }
}
