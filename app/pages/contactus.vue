<template>
  <div
    :class="{ dark: isDarkMode }"
    class="min-h-screen p-4"
  >
    <!-- Example content to demonstrate dark mode -->
    <div class="mb-4 rounded-lg bg-white p-4 text-black dark:bg-gray-900 dark:text-white">
      <h1 class="mb-2 text-2xl font-bold">
        Dark Mode Demo
      </h1>
      <p>Toggle the button below to switch between light and dark mode.</p>
    </div>

    <!-- Dark mode toggle button -->
    <button
      class="rounded-full bg-gray-200 px-4 py-2 text-black dark:bg-gray-700 dark:text-white"
      @click="toggleDarkMode"
    >
      {{ isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button>
  </div>
</template>

<script setup>
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>
