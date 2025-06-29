import { createGetOptionTextFn } from '@/utils'

export enum AppointmentStatus {
  TUI = 'TUI',
  TSI = 'TSI',
  TJB = 'TJB',
}

export const useAppointmentStatusHelpers = () => {
  const appointmentStatusEnumOptions = [
    { value: AppointmentStatus.TUI, label: 'TUI' },
    { value: AppointmentStatus.TSI, label: 'TSI' },
    { value: AppointmentStatus.TJB, label: 'TJB' },
  ]
  const getAppointmentStatusText = createGetOptionTextFn(
    appointmentStatusEnumOptions
  )
  return { appointmentStatusEnumOptions, getAppointmentStatusText }
}
