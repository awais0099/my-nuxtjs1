<script setup lang="ts">
import SearchForm from './SearchForm.vue';

const searchQuery = ref('');
const isLoading = ref(false);

async function handleSearch(searchQuery: string) {
  isLoading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Search results for:', searchQuery);
  } finally {
    isLoading.value = false;
  }
}

</script>


<template>
  <nav
    aria-label="Main Navigation"
    class="mx-auto flex w-full max-w-5xl flex-col gap-2 p-4 md:flex-row md:justify-between"
  >
    <!-- 1 -->
    <div class="flex items-center justify-center gap-2">
      <NuxtImg src="/img/Mask Group.png" alt="logo" />
      <span
        ><span class="text-blue-700">food</span
        ><span class="text-orange-600">Wa</span
        ><span class="text-blue-500">Gon</span></span
      >
    </div>
    <address class="flex items-center gap-2 text-sm dark:text-gray-100">
      <span class="font-bold">Deliver to:</span>
      <span aria-hidden="true">
        <font-awesome icon="location-dot" class="text-base" />
      </span>
      <span class="font-bold">Mohammadpur Bus Stand Dhaka</span>
    </address>
    <div
      class="flex flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-2"
    >
      <SearchForm @submit-search="handleSearch" :is-Loading="isLoading" />

      <NuxtLink
        to="#"
        class="block w-full rounded-md bg-black px-5 py-2 text-center font-bold text-white shadow-xl hover:bg-gray-800 hover:transition-colors active:scale-95 active:transition-all dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300"
      >
        Login</NuxtLink
      >
      <AppColorModePicker />
    </div>
  </nav>
</template>
