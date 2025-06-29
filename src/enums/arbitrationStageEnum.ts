import { createGetOptionTextFn } from '@/utils'

export enum ArbitrationStage {
  NOT_SUBMITTED = 'NOT_SUBMITTED',
  SUBMITTED = 'SUBMITTED',
}

export const useArbitrationStageHelpers = () => {
  const arbitrationStageEnumOptions = [
    { value: ArbitrationStage.NOT_SUBMITTED, label: '尚未提出' },
    { value: ArbitrationStage.SUBMITTED, label: '已提出' },
  ]
  const getArbitrationStageText = createGetOptionTextFn(
    arbitrationStageEnumOptions
  )
  return { arbitrationStageEnumOptions, getArbitrationStageText }
}
