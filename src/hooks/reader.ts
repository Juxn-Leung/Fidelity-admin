import { useWebSocket } from 'ahooks'
import { ReadyState } from 'ahooks/lib/useWebSocket'
import { useRef } from 'react'

const wsUrl = `wss://127.0.0.1:9996`
// const wsUrl = `wss://ws.postman-echo.com/raw`
export const useCardReader = () => {
  const promiseRef = useRef<{
    resolve: ((value: unknown) => void) | null
    reject: ((reason?: any) => void) | null
  }>({ resolve: null, reject: null })
  const { readyState, sendMessage } = useWebSocket(wsUrl, {
    onMessage(event) {
      console.log(event.data)
      const data = JSON.parse(event.data)
      if (data.code === '-1') {
        if (promiseRef.current.reject) {
          promiseRef.current.reject('讀卡器上沒識別到身份證')
        }
      } else if (data.code === '0' || Object.keys(data.cardData).length > 0) {
        if (promiseRef.current.resolve) {
          promiseRef.current.resolve(data.data)
        }
      } else {
        if (promiseRef.current.reject) {
          if (data.code === '0') {
            promiseRef.current.reject('讀卡不到身份信息')
          } else {
            promiseRef.current.reject(data.message)
          }
        }
      }
      promiseRef.current = { resolve: null, reject: null }
    },
  })
  const isReady = import.meta.env.DEV || readyState === ReadyState.Open
  return {
    isReady,
    read: () => {
      if (!isReady) return
      if (
        import.meta.env.MODE === 'development' ||
        import.meta.env.MODE === 'uat'
      ) {
        // return Promise.reject(
        //   'Read Card Error.read card fail, app return READCARDERROR\r\n'
        // )
        return Promise.resolve({
          cardData: {
            '90000101': {
              placeOfBirth: 'Macao',
              pname: 'NG, xxxxx xxxx',
              gender: 'M',
              cname: 'XXXXX',
              dateOfBirth: '19900412',
              uniqueCardNo: 'E\b30345672',
              permanentResidentStatus: 'P',
              validityDate: '20290909',
              id: '90000101',
              placeOfBirthCode: 'A',
              telex: '070201312345678',
              issueDate: '20230411',
              firstIssueDate: '19880419',
              height: '1,77',
              parentsCNameA: '',
              parentCName: '吳,吳吳＊陳,陳陳',
              aliasCName: '',
              spousePName: 'LEI, xx xxx',
              parentsPNameA: '',
              residencePermit: '',
              spouseCName: '李, 陳陳',
              parentPNameUsed: '*',
              maritalStatus: 'CAS',
              parentPName: 'NG,NG NG * CHAN,CHAN CHAN',
              aliasPName: '',
            },
          },
        })
      }
      return new Promise((resolve, reject) => {
        promiseRef.current = { resolve, reject }
        sendMessage(JSON.stringify({ cmd: 'read_by_hsm' }))
      })
    },
  }
}
