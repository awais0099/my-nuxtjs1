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
        <div class="relative h-[12.5rem] w-full overflow-hidden group rounded-lg">
            <NuxtImg :src="imgPath"
                alt="Juicy flame-grilled cheese burger with melted cheddar at Burger Arena"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
            <!-- light blur overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        <div class="md:mt-2 mt-1">
            <NuxtLink :to="detailsPageLink"
                class="font-bold capitalize dark:text-gray-100 text-lg cursor-pointer hover:text-yellow-500">{{ title }}</NuxtLink>
            <p class="flex justify-left gap-1 text-gray-500 mt-1 -ml-1">
                <font-awesome icon="location-dot" class="mt-[2px]" />
                <span class="dark:text-gray-400">{{brandTitle}}</span>
            </p>
            <p class="font-bold mt-1 dark:text-gray-100">{{ currencySymbol }}{{ price }}</p>
            <button
                class="bg-yellow-500 text-white font-black w-full md:mt-2 mt-1 rounded-sm py-2 cursor-pointer active:scale-95 active:transition-all hover:bg-yellow-400 hover:transition-colors">Order
                Now</button>
        </div>
    </div>
</template>