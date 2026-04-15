<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen p-4">
    <!-- Example content to demonstrate dark mode -->
    <div class="bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded-lg mb-4">
      <h1 class="text-2xl font-bold mb-2">Dark Mode Demo</h1>
      <p>Toggle the button below to switch between light and dark mode.</p>
    </div>

    <!-- Dark mode toggle button -->
    <button
      @click="toggleDarkMode"
      class="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {{ isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button>
  </div>
</template>

<script setup>
const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>