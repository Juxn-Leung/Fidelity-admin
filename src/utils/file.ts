import { getDocument } from 'pdfjs-dist'
import {
  RenderParameters,
  TypedArray,
  DocumentInitParameters,
} from 'pdfjs-dist/types/src/display/api'
import printJS from 'print-js/src/index'
import { PDFDocument, rgb, degrees } from 'pdf-lib'
import PMingLiU from './PMingLiU.ttf'
import fontkit from '@pdf-lib/fontkit'
import dayjs from 'dayjs'

export function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob!)
    })
  })
}

export async function pdfToImages(
  src: string | URL | TypedArray | ArrayBuffer | DocumentInitParameters,
  scale = 2.5,
  pages?: number[]
) {
  const loadingTask = getDocument(src)
  const proxy = await loadingTask.promise
  const items = []
  if (!pages) {
    pages = Array.from({ length: proxy.numPages }).map((_, i) => i + 1)
  }
  for (const i of pages) {
    const page = await proxy.getPage(i)
    const viewport = page.getViewport({ scale })
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    canvas.height = viewport.height
    canvas.width = viewport.width
    const renderContext: RenderParameters = {
      canvasContext: context,
      viewport: viewport,
    }
    const renderTask = page.render(renderContext)
    await renderTask.promise
    const blob = await canvasToBlob(canvas)
    const originalViewport = page.getViewport({ scale: 1 })
    items.push({
      blob,
      width: originalViewport.width,
      height: originalViewport.height,
    })
  }
  proxy.destroy()
  return items
}

export function watermarkPdf(blob: Blob) {
  return new Promise(async (resolve, reject) => {
    try {
      const blobUrl = URL.createObjectURL(blob)
      const existingPdfBytes = await fetch(blobUrl).then((res) =>
        res.arrayBuffer()
      )
      const pdfDoc = await PDFDocument.load(existingPdfBytes)
      pdfDoc.registerFontkit(fontkit)
      const fontBuffer = await fetch(PMingLiU).then((res) => res.arrayBuffer())
      const customFont = await pdfDoc.embedFont(fontBuffer)
      const auth = localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth') as string)
        : null
      const pages = pdfDoc.getPages()
      pages.forEach((page) => {
        const rotate = page.getRotation()?.angle
        page.drawText(
          `CAJ_${auth?.username}_${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
          {
            x: page.getWidth() / 2 - 100,
            y: page.getHeight() / 2 + 100,
            size: 25,
            color: rgb(0.07, 0.63, 0.48),
            opacity: 0.2,
            font: customFont,
            rotate: degrees(-45 + (rotate || 0)),
          }
        )
      })

      const pdfBytes = await pdfDoc.save()
      resolve(pdfBytes)
      URL.revokeObjectURL(blobUrl)
    } catch (errorInfo) {
      console.log('水印添加失敗')
      reject()
    }
  })
}

export async function printPdf(blob: Blob, watermarkNeed?: any) {
  try {
    const pdfBytes = watermarkNeed ? await watermarkPdf(blob) : blob
    if (pdfBytes) {
      const docUrl = URL.createObjectURL(
        new Blob([pdfBytes as Uint8Array], { type: 'application/pdf' })
      )
      printJS({
        printable: docUrl,
        type: 'pdf',
      })
    }
  } catch (error) {
    console.log(error)
  }
}
