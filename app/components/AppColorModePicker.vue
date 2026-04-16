<script lang="ts" setup>
const colorMode = useColorMode();

// We use a watcher to ensure the local state always matches the system/module state
const isDarkMode = ref(false);

watch(() => colorMode.value, (newVal) => {
  isDarkMode.value = newVal === 'dark';
}, { immediate: true });

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div class="color-mode-picker">
    <ClientOnly>
      <button
        @click="toggleDarkMode"
        aria-label="Toggle Dark Mode"
        class="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600"
      >
        <font-awesome :icon="isDarkMode ? 'moon' : 'sun'" />
      </button>

      <template #fallback>
        <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </template>
    </ClientOnly>
  </div>
</template>
