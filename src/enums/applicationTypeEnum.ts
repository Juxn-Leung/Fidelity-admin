import { createGetOptionTextFn } from '@/utils'

export enum ApplicationType {
  LAWSUIT = 'LAWSUIT',
  ARBITRATION = 'ARBITRATION',
}

export const useApplicationTypeHelpers = () => {
  const applicationTypeEnumOptions = [
    { value: ApplicationType.LAWSUIT, label: '訴訟申請' },
    { value: ApplicationType.ARBITRATION, label: '必要仲裁申請' },
  ]
  const getApplicationTypeText = createGetOptionTextFn(
    applicationTypeEnumOptions
  )
  return { applicationTypeEnumOptions, getApplicationTypeText }
}
