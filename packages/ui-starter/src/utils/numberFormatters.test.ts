import { describe, expect, it } from 'vitest'
import { formatNumber } from './numberFormatters'

// test suite with vitest
describe('formatNumber', () => {
  it('formats a number', () => {
    expect(formatNumber(1234, 'en')).toBe('1,234')
  })
})
