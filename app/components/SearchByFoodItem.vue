<script setup lang="ts">
defineProps<{
    title: string
    imgPath: string
    pageLink: string
}>()
</script>
<template>
    <div class="flex flex-col items-center w-36 gap-4 group cursor-pointer">
        <div class="w-full h-36 rounded-full overflow-hidden">
            <NuxtImg :src="imgPath" alt="Hot cheesy pepperoni pizza slice"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
        </div>
        <NuxtLink :to="pageLink"
            class="font-bold dark:text-gray-100 group-hover:text-yellow-500 transition-colors duration-300">{{ title }}
        </NuxtLink>
    </div>
</template>