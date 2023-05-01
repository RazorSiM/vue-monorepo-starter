<script lang="ts" setup>
import { computed, toRef } from 'vue'
import { useField } from 'vee-validate'

export interface RadioInputProps {
  modelValue: string
  name: string
  value: string
}

const props = defineProps<RadioInputProps>()
const isChecked = computed(() => {
  return props.modelValue === props.value
})

const name = toRef(props, 'name')

const {
  value: inputValue,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.modelValue,
})
</script>

<script lang="ts">
export default {
  name: 'RadioInput',
}
</script>

<template>
  <label class="flex gap-3" @click="handleChange">
    <input
      type="radio"
      :name="props.name"
      :checked="isChecked"
      :value="value"
      :model-value="inputValue"
      @input="handleChange"
      @update="handleChange"
      @change="handleChange"
      @blur="handleBlur"
    >
    <slot />
  </label>
</template>
