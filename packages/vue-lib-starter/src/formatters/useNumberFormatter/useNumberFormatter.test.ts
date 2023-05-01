import { describe, expect, it } from 'vitest'
import { useNumberFormatter } from '.'

describe('useNumberFormatter', () => {
  it('formats a number', () => {
    const { formattedNumber } = useNumberFormatter(1234, 'en-US')
    expect(formattedNumber.value).toBe('1,234')
  })
})
