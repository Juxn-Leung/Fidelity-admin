import { createGetOptionTextFn } from '@/utils'

export enum SingType {
  SIGN_PAPER = 'SIGN_PAPER',
  SIGN_PAPER_MAILING_FORM = 'SIGN_PAPER_MAILING_FORM',
  APPROVAL_REPEAL = 'APPROVAL_REPEAL',
}

export const useSingTypeHelpers = () => {
  const singTypeEnumOptions = [
    { value: SingType.SIGN_PAPER, label: '簽收紙' },
    { value: SingType.SIGN_PAPER_MAILING_FORM, label: '簽收紙及寄件表' },
  ]
  const getSingTypeText = createGetOptionTextFn(singTypeEnumOptions)
  return { singTypeEnumOptions, getSingTypeText }
}
