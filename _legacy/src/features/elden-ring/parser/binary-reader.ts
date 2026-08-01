const VALID_MAGIC = new Set(['BND4', 'SL2\u0000'])

export function readAscii(bytes: Uint8Array, offset: number, length: number): string {
  if (!Number.isInteger(offset) || !Number.isInteger(length) || offset < 0 || length < 0 || offset + length > bytes.byteLength) {
    throw new RangeError('读取范围超出存档边界。')
  }

  return String.fromCharCode(...bytes.subarray(offset, offset + length))
}

export function validateSaveHeader(buffer: ArrayBuffer): void {
  if (buffer.byteLength < 4) {
    throw new Error('文件过小，不是有效的艾尔登法环存档。')
  }

  const magic = readAscii(new Uint8Array(buffer), 0, 4)
  if (!VALID_MAGIC.has(magic)) {
    throw new Error('存档头无效：需要 BND4 或 SL2 格式。')
  }
}
