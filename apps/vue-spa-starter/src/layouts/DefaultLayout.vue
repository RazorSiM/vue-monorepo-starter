<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div
    class="min-h-screen w-full bg-gray-50 font-sans text-gray-900 transition duration-100 dark:(bg-gray-900 text-gray-50)"
  >
    <header
      class="mx-auto flex items-center justify-between gap-5 p-[30px] container"
    >
      <TopNav />
      <button
        class="rounded-full px-2 py-2 font-bold leading-none transition hover:(bg-yellow-200) focus:outline-none hover:dark:(bg-indigo-900)"
        @click="toggleDark()"
      >
        <div v-if="!isDark" class="i-fluent-emoji-new-moon h-10 w-10" />
        <div v-else class="i-fluent-emoji-sun h-10 w-10" />
      </button>
    </header>

    <div class="mx-auto p-10 container">
      <slot />
    </div>
  </div>
</template>
