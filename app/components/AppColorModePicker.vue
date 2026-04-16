<script lang="ts" setup>
const colorMode = useColorMode()

const isDarkMode = ref(false)

watch(() => colorMode.value, (newVal) => {
  isDarkMode.value = newVal === 'dark'
}, { immediate: true })

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="color-mode-picker">
    <ClientOnly>
      <button
        aria-label="Toggle Dark Mode"
        class="flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition-all duration-300 hover:ring-2 hover:ring-gray-300 dark:bg-gray-800 dark:text-yellow-400 dark:hover:ring-gray-600"
        @click="toggleDarkMode"
      >
        <font-awesome :icon="isDarkMode ? 'moon' : 'sun'" />
      </button>

      <template #fallback>
        <div class="size-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
      </template>
    </ClientOnly>
  </div>
</template>
