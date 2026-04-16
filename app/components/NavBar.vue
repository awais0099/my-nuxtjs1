<!-- <script lang="ts" setup>
defineProps<{
  isDarkMode: boolean;
}>();

const emit = defineEmits(["toggleDarkMode"]);

const toggleDarkMode = () => {
  emit("toggleDarkMode");
};
</script> -->

<template>
  <nav
    class="mx-auto flex w-full max-w-5xl flex-col gap-2 p-4 md:flex-row md:justify-between"
  >
    <!-- 1 -->
    <div class="flex items-center justify-center gap-2">
      <NuxtImg
        src="/img/Mask Group.png"
        alt="logo"
      />
      <span><span class="text-blue-700">food</span><span class="text-orange-600">Wa</span><span class="text-blue-500">Gon</span></span>
    </div>
    <address class="flex items-center gap-2 text-sm dark:text-gray-100">
      <span class="font-bold">Deliver to:</span>
      <span aria-hidden="true">
        <font-awesome
          icon="location-dot"
          class="text-base"
        />
      </span>
      <span class="font-bold">Mohammadpur Bus Stand Dhaka</span>
    </address>
    <div
      class="flex flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-2"
    >
      <form
        action="#"
        method="get"
        role="search"
        class="w-full"
      >
        <div class="flex w-full items-center">
          <label
            for="search"
            class="sr-only"
          >Search</label>
          <input
            id="search"
            type="search"
            name="q"
            placeholder="Search"
            class="flex-1 rounded-l-md border-2 border-gray-300 px-3 py-2 focus-visible:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
          <button
            aria-label="Submit Search"
            type="submit"
            class="cursor-pointer rounded-r-md bg-black px-4 py-[10px] shadow-lg hover:bg-gray-800 hover:transition-colors active:scale-95 active:transition-all dark:bg-gray-100 dark:hover:bg-gray-300"
          >
            <font-awesome
              icon="magnifying-glass"
              class="text-base font-bold text-white dark:text-black"
            />
          </button>
        </div>
      </form>
      <NuxtLink
        to="#"
        class="block w-full rounded-md bg-black px-5 py-2 text-center font-bold text-white shadow-xl hover:bg-gray-800 hover:transition-colors active:scale-95 active:transition-all dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300"
      >
        Login</NuxtLink>
      <AppColorModePicker />
    </div>
  </nav>
</template>
