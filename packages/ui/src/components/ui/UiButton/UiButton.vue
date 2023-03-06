<script lang="ts" setup>
export interface ButtonProps {
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  elevation?: "sm" | "md" | "lg";
}
withDefaults(defineProps<ButtonProps>(), {
  color: "primary",
  size: "md",
  elevation: "sm",
});

const colorToClasses = new Map([
  ["primary", "bg-blue-500 hover:bg-blue-700 text-white"],
  ["secondary", "bg-gray-500 hover:bg-gray-700 text-white"],
  ["danger", "bg-red-500 hover:bg-red-700 text-white"],
  ["success", "bg-green-500 hover:bg-green-700 text-white"],
  ["warning", "bg-yellow-500 hover:bg-yellow-700 text-white"],
]);
const sizeToClasses = new Map([
  ["sm", "px-2 py-1 text-sm"],
  ["md", "px-3 py-2 text-base"],
  ["lg", "px-4 py-3 text-lg"],
]);
const elevationToClasses = new Map([
  ["sm", "shadow-sm"],
  ["md", "shadow-md"],
  ["lg", "shadow-lg"],
]);
</script>

<template>
  <button
    class="transition rounded-md"
    :class="[
      colorToClasses.get(color),
      sizeToClasses.get(size),
      elevationToClasses.get(elevation),
    ]"
  >
    <slot>Button</slot>
  </button>
</template>
