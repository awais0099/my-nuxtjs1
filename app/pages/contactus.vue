<script setup lang="ts">
useHead({
  title: 'Contact us - foodWaGong',
});

const isDarkMode = ref(false)
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <div
    :class="{ dark: isDarkMode }"
    class="min-h-screen p-4 mx-auto max-w-5xl"
  >
    <!-- Example content to demonstrate dark mode -->
    <h1 class="mb-2 text-2xl font-bold">
      Contact Us
    </h1>
    <p>Toggle the button below to switch between light and dark mode.</p>

    <!-- Dark mode toggle button -->
    <button
      class="rounded-full bg-gray-200 px-4 py-2 text-black dark:bg-gray-700 dark:text-white"
      @click="toggleDarkMode"
    >
      {{ isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button>
  </div>
</template>

