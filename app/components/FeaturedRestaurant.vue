<script lang="ts" setup>
defineProps<{
  imgPath: string
  brandImgPath: string
  brandTitle: string
  discount: number
  isOpenTomorrow: boolean
  rating: number
}>()
</script>

<template>
  <div>
    <div class="group relative h-[12.5rem] w-full overflow-hidden rounded-lg">
      <NuxtImg
        :src="imgPath"
        alt=""
        :aria-label="`Photo of food from ${brandTitle}`"
        class="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <!-- light blur overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div class="absolute left-4 top-4 flex gap-2 text-white" aria-label="Promotions and delivery speed">
        <div class="w-fit rounded-lg bg-black/80  px-2 py-1 text-sm">
          <font-awesome
            icon="tag"
            aria-hidden="true"
            class="text-yellow-400"
          />
          <span class="sr-only">Discount: </span>
          <span class="font-bold">{{ discount }}% off</span>
        </div>

        <div class="w-fit rounded-lg bg-black/80 px-2.5 py-1 text-sm">
          <font-awesome
            icon="clock"
            aria-hidden="true"
            class="text-blue-400"
          />
          <span class="font-bold">Fast Delivery</span>
        </div>
      </div>
    </div>
    <div class=" mt-2 flex items-center gap-2">
      <NuxtImg
        :src="brandImgPath"
        alt=""
        aria-hidden="true"
        class="size-16 rounded-lg"
      />
      <div>
        <h4 class="font-bold capitalize dark:text-gray-100">
          {{ brandTitle }}
        </h4>
        <p :aria-label="`Rating: ${rating} stars`" class="flex items-center gap-1 text-gray-700">
          <font-awesome
            icon="star"
            aria-hidden="true"
            class="text-gray-700 dark:text-gray-400"
          />
          <span class="text-gray-700 dark:text-gray-400">{{ rating }}</span>
        </p>
      </div>
    </div>
    <span
      v-if="isOpenTomorrow"
      class="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-yellow-200 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-yellow-900 dark:bg-amber-600 dark:text-gray-100"
    >
      <font-awesome aria-hidden="true" :icon="['far', 'clock']" /> Opens tomorrow
    </span>
  </div>
</template>
