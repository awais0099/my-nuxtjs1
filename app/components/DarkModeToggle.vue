<template>
  <button
    class="rounded-full p-2 focus:outline-none"
    @click="toggleDarkMode"
  >
    {{ darkMode ? '🌞' : '🌙' }}
  </button>
</template>

<script setup>
const darkMode = useDarkMode()

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}
</script>
