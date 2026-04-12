<script setup lang="ts">
defineProps<{
    title: string
    imgPath: string
    pageLink: string
}>()
</script>
<template>
    <div class="group flex w-36 cursor-pointer flex-col items-center gap-4">
        <div class="h-36 w-full overflow-hidden rounded-full">
            <NuxtImg
:src="imgPath" alt="Hot cheesy pepperoni pizza slice"
                class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
        </div>
        <NuxtLink
:to="pageLink"
            class="font-bold transition-colors duration-300 group-hover:text-yellow-500 dark:text-gray-100">{{ title }}
        </NuxtLink>
    </div>
</template>