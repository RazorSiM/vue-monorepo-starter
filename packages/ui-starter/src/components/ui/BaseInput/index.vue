<script lang="ts" setup>
import { toRef, useSlots } from 'vue'
import { useField } from 'vee-validate'
import { toFieldValidator } from '@vee-validate/zod'
import type { ZodType } from 'zod'

export interface BaseInputProps {
  modelValue: string | number
  name: string
  type: 'text' | 'number'
  placeholder: string
  fieldSchema?: ZodType
  disabled?: boolean
  readonly?: boolean
  autofocus?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  step?: number
}
const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  placeholder: '',
  fieldSchema: undefined,
  disabled: false,
  readonly: false,
  autofocus: false,
  maxlength: 524288,
  minlength: 0,
  max: 524288,
  min: 0,
  step: 1,
})

const fieldSchema = props.fieldSchema
  ? toFieldValidator(props.fieldSchema)
  : undefined

const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, fieldSchema, {
  initialValue: props.modelValue,
})

const slots = useSlots()
</script>

<script lang="ts">
export default {
  name: 'BaseInput',
}

export const errorClasses = 'ring-red-500! bg-red-100! text-red-600 ring-2'
export const successClasses
  = 'ring-green-500! bg-green-100! text-green-700 ring-2'
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col">
      <label :for="name" data-testid="label">
        <slot name="label" />
      </label>
      <input
        :id="name"
        data-testid="input"
        class="rounded bg-slate-200 px-2 py-3 shadow-sm outline-none ring-1 ring-zinc transition disabled:(cursor-not-allowed opacity-50) read-only:(cursor-not-allowed opacity-50) active:(outline-none ring-blue-500!) focus:(outline-none ring-2 ring-green-500) hover:(ring-black)"
        :class="{
          [errorClasses]: !!errorMessage,
          [successClasses]: meta.valid,
          'mt-1': slots.label,
        }"
        v-bind="props"
        :value="inputValue"
        @input="handleChange"
        @blur="handleBlur"
      >
    </div>
    <p v-if="errorMessage" class="absolute text-sm text-red-600">
      {{ errorMessage }}
    </p>
  </div>
</template>
