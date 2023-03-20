<script lang="ts">
export default {
  name: "UiButton",
};

export const colorToClasses = new Map([
  ["primary", "bg-black hover:bg-zinc-800 text-white"],
  ["secondary", "bg-zinc-500 hover:bg-zinc-700 text-white"],
  ["danger", "bg-red-500 hover:bg-red-700 text-white"],
  ["success", "bg-green-500 hover:bg-green-700 text-white"],
  ["warning", "bg-yellow-500 hover:bg-yellow-700 text-white"],
]);
export const sizeToClasses = new Map([
  ["sm", "px-2 py-1 text-sm"],
  ["md", "px-3 py-2 text-base"],
  ["lg", "px-4 py-3 text-lg"],
]);
export const elevationToClasses = new Map([
  ["sm", "shadow-sm"],
  ["md", "shadow-md"],
  ["lg", "shadow-lg"],
  ["xl", "shadow-xl"],
]);
export const hoverElevationToClasses = new Map([
  ["sm", "hover:shadow-md"],
  ["md", "hover:shadow-lg"],
  ["lg", "hover:shadow-xl"],
  ["xl", "hover:shadow-2xl"],
]);
</script>
<script lang="ts" setup>
export interface UiButtonProps {
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  elevation?: "sm" | "md" | "lg" | "xl";
}
// for the dts to be generated correctly, we need to assign the props to a variable
const props = withDefaults(defineProps<UiButtonProps>(), {
  color: "primary",
  size: "md",
  elevation: "md",
});
</script>

<template>
  <button
    class="transition rounded"
    :class="[
      colorToClasses.get(props.color),
      sizeToClasses.get(props.size),
      elevationToClasses.get(props.elevation),
      hoverElevationToClasses.get(props.elevation),
    ]"
  >
    <slot>Button</slot>
  </button>
</template>
