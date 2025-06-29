import { createGetOptionTextFn } from '@/utils'

export enum ProxyCompulsory {
  CONSTRAINT = 'CONSTRAINT',
  UNCONSTRAINT = 'UNCONSTRAINT',
  NO_LAWYER = 'NO_LAWYER',
  HAVE_LAWYER = 'HAVE_LAWYER',
}

export const useProxyCompulsoryHelpers = () => {
  const proxyCompulsoryEnumOptions = [
    { value: ProxyCompulsory.CONSTRAINT, label: '強制' },
    { value: ProxyCompulsory.UNCONSTRAINT, label: '非強制' },
    { value: ProxyCompulsory.NO_LAWYER, label: '申請人沒有申請律師' },
    { value: ProxyCompulsory.HAVE_LAWYER, label: '非強制但他方當事人有律師' },
  ]
  const getProxyCompulsoryText = createGetOptionTextFn(
    proxyCompulsoryEnumOptions
  )
  return { proxyCompulsoryEnumOptions, getProxyCompulsoryText }
}
