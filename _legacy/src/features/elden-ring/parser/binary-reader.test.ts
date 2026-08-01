import { describe, expect, it } from 'vitest'
import { readAscii, validateSaveHeader } from './binary-reader'

describe('binary reader', () => {
  it('reads a bounded ASCII slice', () => {
    expect(readAscii(new Uint8Array([66, 78, 68, 52]), 0, 4)).toBe('BND4')
  })

  it('rejects reads outside the byte range', () => {
    expect(() => readAscii(new Uint8Array([1, 2]), 1, 2)).toThrow('边界')
  })

  it('accepts recognized save magic and rejects other headers', () => {
    expect(() => validateSaveHeader(new Uint8Array([66, 78, 68, 52]).buffer)).not.toThrow()
    expect(() => validateSaveHeader(new Uint8Array([0, 0, 0, 0]).buffer)).toThrow('存档头无效')
  })
})
