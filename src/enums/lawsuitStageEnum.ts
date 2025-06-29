import { createGetOptionTextFn } from '@/utils'

export enum LawsuitStage {
  NOT_SUBMITTED = 'NOT_SUBMITTED',
  SUBMITTED = 'SUBMITTED',
  LAWSUIT_STAGE = 'LAWSUIT_STAGE',
  ARBITRATION_STAGE = 'ARBITRATION_STAGE',
  CONFIRMED = 'CONFIRMED',
  UNABLE_CONFIRMED = 'UNABLE_CONFIRMED',
}

export const useLawsuitStageHelpers = () => {
  const lawsuitStageEnumOptions = [
    { value: LawsuitStage.NOT_SUBMITTED, label: '尚未提出' },
    { value: LawsuitStage.SUBMITTED, label: '已提出' },
    { value: LawsuitStage.LAWSUIT_STAGE, label: '上訴_訴訟' },
    { value: LawsuitStage.ARBITRATION_STAGE, label: '上訴_必要仲裁' },
    { value: LawsuitStage.CONFIRMED, label: '已有確定判決' },
    { value: LawsuitStage.UNABLE_CONFIRMED, label: '無法確定' },
  ]
  const getLawsuitStageText = createGetOptionTextFn(lawsuitStageEnumOptions)
  return { lawsuitStageEnumOptions, getLawsuitStageText }
}
