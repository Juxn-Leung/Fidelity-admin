import { createGetOptionTextFn } from '@/utils'

export enum BusinessRolesType {
  DIRECTOR_WORK = 'DIRECTOR_WORK',
  CASE_HANDLER = 'CASE_HANDLER',
  RECEPTION_WORK = 'RECEPTION_WORK',
}

export const useBusinessRolesTypeEnumHelpers = () => {
  const businessRolesTypeEnumOptions = [
    { value: BusinessRolesType.DIRECTOR_WORK, label: '管理範疇', path: '' },
    { value: BusinessRolesType.CASE_HANDLER, label: '跟進申請範疇', path: '/holder' },
    { value: BusinessRolesType.RECEPTION_WORK, label: '接待範疇', path: '/reception' },
  ]
  const getBusinessRolesTypeEnumText = createGetOptionTextFn(businessRolesTypeEnumOptions)
  return { businessRolesTypeEnumOptions, getBusinessRolesTypeEnumText }
}
