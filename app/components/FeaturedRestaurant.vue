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
        alt="Crispy variety fried chicken platter with dipping sauce at Foodworld"
        class="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <!-- light blur overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div class="absolute left-4 top-4 flex gap-2 text-white">
        <div class="w-fit rounded-lg bg-black/80 px-2 py-1 text-sm">
          <font-awesome
            icon="tag"
            class="text-yellow-400"
          />
          <span class="font-bold">{{ discount }}</span>
          <span>%</span>
          <span class="font-extrabold">off</span>
        </div>

        <div class="w-fit rounded-lg bg-black/80 px-2.5 py-1 text-sm">
          <font-awesome
            icon="clock"
            class="text-blue-400"
          />
          <span class="font-bold">Fast</span>
        </div>
      </div>
    </div>
    <div class=" mt-2 flex items-center gap-2">
      <NuxtImg
        :src="brandImgPath"
        alt="Foodworld restaurant logo"
        class="size-16 rounded-lg"
      />
      <div>
        <h4 class="font-bold capitalize">
          {{ brandTitle }}
        </h4>
        <p class="flex items-center gap-1 text-gray-500">
          <font-awesome
            icon="star"
            class="text-gray-500"
          />
          <span>{{ rating }}</span>
        </p>
      </div>
    </div>
    <span
      v-if="isOpenTomorrow"
      class="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-yellow-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-yellow-700"
    >
      <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
    </span>
  </div>
</template>
