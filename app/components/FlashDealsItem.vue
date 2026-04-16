<script setup lang="ts">
defineProps<{
  title: string
  imgPath: string
  discount: number
  daysRemaining: number
}>()
</script>

<template>
  <div>
    <div class="group relative h-[12.5rem] w-full overflow-hidden rounded-[16px] text-white">
      <NuxtImg
        :src="imgPath"
        alt="Greys Vage"
        class="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div
        class="absolute bottom-0 left-0 z-10 flex h-[70px] w-[112px] items-center justify-center rounded-tr-[25px] bg-yellow-500 dark:bg-amber-800"
      >
        <p class="text-4xl font-extrabold text-white md:text-6xl">
          {{ discount }}
        </p>
        <div class="flex flex-col leading-tight">
          <span class="font-bold text-white">%</span>
          <span class="text-sm text-white">off</span>
        </div>
      </div>
    </div>
    <div class="mt-1 md:mt-6">
      <h4 class="font-bold capitalize dark:text-gray-100">
        {{ title }}
      </h4>
      <span
        class="mt-1 inline-block rounded-md bg-yellow-200 px-2 py-1 text-xs font-bold uppercase text-yellow-700 dark:bg-amber-600 dark:text-gray-100 md:mt-2"
      >
        <font-awesome
          icon="clock"
          class="text-yellow-700"
        />
        {{ daysRemaining }} days remaining
      </span>
    </div>
  </div>
</template>
