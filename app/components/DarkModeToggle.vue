<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full focus:outline-none"
  >
    {{ darkMode ? '🌞' : '🌙' }}
  </button>
</template>

<script setup>
const darkMode = useDarkMode();

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};
</script>