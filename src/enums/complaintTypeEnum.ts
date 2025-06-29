import { createGetOptionTextFn } from '@/utils'

export enum ComplaintType {
  APPLICANT_OR_BENEFICIARY = 'APPLICANT_OR_BENEFICIARY',
  AGENT = 'AGENT',
}

export const useComplaintTypeHelpers = () => {
  const complaintTypeEnumOptions = [
    { value: ComplaintType.APPLICANT_OR_BENEFICIARY, label: '申請人或受益人' },
    { value: ComplaintType.AGENT, label: '代理人' },
  ]
  const getComplaintTypeText = createGetOptionTextFn(complaintTypeEnumOptions)
  return { complaintTypeEnumOptions, getComplaintTypeText }
}
