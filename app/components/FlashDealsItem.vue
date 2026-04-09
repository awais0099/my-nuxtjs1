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
        <div class="relative h-[12.5rem] w-full overflow-hidden rounded-[16px] group text-white">
            <NuxtImg :src="imgPath" alt="Greys Vage"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div
                class="flex items-center justify-center bg-yellow-500 rounded-tr-[25px] absolute bottom-0 left-0 w-[112px] h-[70px] z-10">
                <p class="font-extrabold md:text-6xl text-4xl text-white">{{ discount }}</p>
                <div class="flex flex-col leading-tight">
                    <span class="text-white font-bold">%</span>
                    <span class="text-white text-sm">off</span>
                </div>
            </div>
        </div>
        <div class="md:mt-6 mt-1">
            <h4 class="font-bold capitalize dark:text-gray-100">{{ title }}</h4>
            <span
                class="font-bold text-xs uppercase bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md inline-block md:mt-2 mt-1">
                <font-awesome icon="clock" class="text-yellow-700" />
                {{ daysRemaining }} days remaining
            </span>
        </div>
    </div>
</template>