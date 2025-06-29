import { createGetOptionTextFn } from '@/utils'

export enum OfficialCode {
  GENERAL = 'GENERAL',
  CIRCULATING = 'CIRCULATING',
  ELECTRONIC = 'ELECTRONIC',
  CERTIFICATE = 'CERTIFICATE',
  RESOLUTION = 'RESOLUTION',
}

export const useOfficialCodeEnumHelpers = () => {
  const usedOfficialCodeEnumOptions = [
    { value: OfficialCode.GENERAL, label: '一般公函' },
    { value: OfficialCode.CIRCULATING, label: '傳閱公函' },
    { value: OfficialCode.ELECTRONIC, label: '電子公函' },
    { value: OfficialCode.CERTIFICATE, label: '證明書' },
    { value: OfficialCode.RESOLUTION, label: '決議編號' },
  ]
  const getOfficialCodeEnumText = createGetOptionTextFn(
    usedOfficialCodeEnumOptions
  )
  return { usedOfficialCodeEnumOptions, getOfficialCodeEnumText }
}
