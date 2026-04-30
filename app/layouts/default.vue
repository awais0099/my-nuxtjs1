<script setup lang="ts">
import NavBar from '~/components/NavBar.vue';

</script>

<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Use <header> and <nav> for site navigation -->
    <header class="bg-white dark:bg-black/80">
      <NavBar />
    </header>

    <!-- The <main> tag is CRITICAL for the "valid landmark" error -->
    <main id="main-content">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>