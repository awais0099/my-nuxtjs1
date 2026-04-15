<script setup lang="ts">
defineProps<{
  title: string
  titleSubPart: string
  description: string
  imgPath: string
  isReverse?: boolean
}>()
</script>

<template>
  <div
    class="mb-10 flex h-[12.875rem] flex-col-reverse rounded-lg bg-white shadow-2xl md:h-80 dark:bg-gray-900"
    :class="isReverse ? 'md:flex-row-reverse' : 'md:flex-row'"
  >
    <div
      class="flex flex-col justify-center gap-y-3 p-8 md:w-2/5 md:justify-between md:gap-2 md:px-8"
    >
      <div class="flex flex-col justify-center gap-2 md:h-52">
        <h1 class="text-left text-3xl font-black leading-tight">
          <span class="text-gray-900 dark:text-white">{{ title }}</span>
          <span class="block text-gray-500 dark:text-orange-500">{{
            titleSubPart
          }}</span>
        </h1>
        <p
          class="text-left text-sm leading-relaxed text-gray-500 dark:text-gray-400"
        >
          {{ description }}
        </p>
      </div>
      <button
        class="cursor-pointer rounded-md bg-yellow-500 dark:bg-amber-800 py-3 text-center font-bold text-white shadow-lg shadow-yellow-500/30 dark:shadow-amber-800/30 transition-colors dark:hover:bg-amber-600 hover:bg-yellow-400 active:scale-95"
      >
        PROCEED TO ORDER
      </button>
    </div>
    <div
      class="group relative w-full overflow-hidden md:w-3/5"
      :class="
        isReverse
          ? 'md:rounded-tl-lg md:rounded-bl-lg'
          : 'md:rounded-tr-lg md:rounded-br-lg'
      "
    >
      <NuxtImg
        :src="imgPath"
        alt="Extra large crispy chicken sandwich with fresh lettuce and sauce"
        class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      />
    </div>
  </div>
</template>
