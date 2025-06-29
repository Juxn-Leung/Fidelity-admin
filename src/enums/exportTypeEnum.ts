import { createGetOptionTextFn } from '@/utils'

export enum ExportType {
  PUBLIC = 'PUBLIC',
  PUBLIC_GOV = 'PUBLIC_GOV',
}

export const useExportTypeHelpers = () => {
  const exportTypeOptions = [
    { value: ExportType.PUBLIC, label: '公共' },
    { value: ExportType.PUBLIC_GOV, label: '獲准豁免' },
  ]
  const getExportTypeText = createGetOptionTextFn(exportTypeOptions)
  return { exportTypeOptions, getExportTypeText }
}
