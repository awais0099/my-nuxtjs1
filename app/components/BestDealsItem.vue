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
    <div class="h-[12.875rem] md:h-[20rem] bg-white dark:bg-gray-900 flex flex-col-reverse shadow-2xl rounded-lg mb-10"
        :class="isReverse ? 'md:flex-row-reverse' : 'md:flex-row'">
        <div class="flex flex-col p-8 md:px-8 justify-center gap-y-3 md:w-2/5 md:justify-between md:gap-2">
            <div class="gap-2 md:h-52 flex flex-col justify-center">
                <h1 class="font-black text-3xl text-left leading-tight">
                    <span class="text-gray-900 dark:text-white">{{ title }}</span>
                    <span class="text-gray-500 dark:text-orange-500 block">{{ titleSubPart }}</span>
                </h1>
                <p class="text-gray-500 text-left dark:text-gray-400 text-sm leading-relaxed">
                    {{ description }}
                </p>
            </div>
            <button class="bg-yellow-500 text-white font-bold rounded-md text-center py-3 shadow-lg shadow-yellow-500/30 cursor-pointer
                        active:scale-95 hover:bg-yellow-400 transition-colors">PROCEED
                TO
                ORDER</button>
        </div>
        <div class="relative group md:w-3/5 w-full overflow-hidden"
            :class="isReverse ? 'md:rounded-tl-lg md:rounded-bl-lg' : 'md:rounded-tr-lg md:rounded-br-lg'">
            <NuxtImg :src="imgPath" alt="Extra large crispy chicken sandwich with fresh lettuce and sauce"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
    </div>
</template>