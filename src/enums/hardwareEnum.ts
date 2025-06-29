import { createGetOptionTextFn } from '@/utils'

export enum Hardware {
  QUICK_SCAN = 'QUICK_SCAN',
  HIGH_CAMERA = 'HIGH_CAMERA',
}

export const useHardwareHelpers = () => {
  const hardwareEnumOptions = [
    { value: Hardware.QUICK_SCAN, label: '快掃' },
    { value: Hardware.HIGH_CAMERA, label: '高拍儀' },
  ]
  const getHardwareText = createGetOptionTextFn(hardwareEnumOptions)
  return { hardwareEnumOptions, getHardwareText }
}
