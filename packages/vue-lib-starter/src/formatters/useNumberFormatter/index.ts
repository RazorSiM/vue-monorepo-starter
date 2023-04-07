import { unref, computed } from "vue";
import type { MaybeRef } from "@vueuse/core";

export function useNumberFormatter(
  value: MaybeRef<number>,
  locale: MaybeRef<string>,
  options?: MaybeRef<Intl.NumberFormatOptions>
) {
  const formattedNumber = computed(() => {
    if (!unref(value) || !unref(locale)) return null;
    return new Intl.NumberFormat(unref(locale), unref(options)).format(
      unref(value)
    );
  });
  return {
    formattedNumber,
  };
}
