<script setup lang="ts">
defineProps<{
  title: string
  brandTitle: string
  imgPath: string
  price: number
  currencySymbol: string
  detailsPageLink: string
  orderLink?: string
}>()
</script>

<template>
  <div>
    <div class="group relative h-[12.5rem] w-full overflow-hidden rounded-lg">
      <NuxtImg
        :src="imgPath"
        alt="Juicy flame-grilled cheese burger with melted cheddar at Burger Arena"
        class="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <!-- light blur overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </div>
    <div class="mt-1 md:mt-2">
      <NuxtLink
        :to="detailsPageLink"
        class="cursor-pointer text-lg font-bold capitalize hover:text-yellow-500 dark:text-gray-100"
      >{{ title }}</NuxtLink>
      <p class="justify-left -ml-1 mt-1 flex gap-1 text-gray-500">
        <font-awesome
          icon="location-dot"
          class="mt-[2px]"
        />
        <span class="dark:text-gray-400">{{ brandTitle }}</span>
      </p>
      <p class="mt-1 font-bold dark:text-gray-100">
        {{ currencySymbol }}{{ price }}
      </p>
      <button
        class="mt-1 w-full cursor-pointer rounded-sm bg-yellow-500 dark:bg-amber-800 py-2 font-black text-white dark:hover:bg-amber-600 hover:bg-yellow-400 hover:transition-colors active:scale-95 active:transition-all md:mt-2"
      >
        Order
        Now
      </button>
    </div>
  </div>
</template>
