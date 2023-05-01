import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import utc from 'dayjs/plugin/utc'
import type { MaybeRef } from '@vueuse/core'
import { computed, unref } from 'vue'

dayjs.extend(duration)
dayjs.extend(utc)

export type dayjsInput =
  | string
  | number
  | dayjs.Dayjs
  | Date
  | null
  | undefined

export function getDurationBetweenDates(
  arrive: dayjsInput,
  leave: dayjsInput,
): string {
  if (!arrive || !leave)
    return '00:00:00'

  const start = dayjs.utc(arrive)
  const end = dayjs.utc(leave)

  if (end.isBefore(start))
    return '00:00:00'
  if (end.isSame(start))
    return '00:00:00'

  const duration = dayjs.duration(end.diff(start))
  const hours = Math.floor(duration.asHours())
  const minutes = Math.floor(duration.asMinutes()) - hours * 60
  const seconds
    = Math.floor(duration.asSeconds()) - hours * 3600 - minutes * 60

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export function useDurationBetweenDates(
  arrive: MaybeRef<dayjsInput>,
  leave: MaybeRef<dayjsInput>,
) {
  const duration = computed(() => {
    return getDurationBetweenDates(unref(arrive), unref(leave))
  })

  return {
    duration,
  }
}
