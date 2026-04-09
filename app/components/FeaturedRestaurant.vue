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
        <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
            <NuxtImg :src="imgPath" alt="Crispy variety fried chicken platter with dipping sauce at Foodworld"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
            <!-- light blur overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <div class="flex gap-2 absolute top-4 left-4 text-white">
                <div class="bg-black/80 w-fit px-2 py-1 rounded-lg text-sm">
                    <font-awesome icon="tag" class="text-yellow-400" />
                    <span class="font-bold">{{ discount }}</span>
                    <span>%</span>
                    <span class="font-extrabold">off</span>
                </div>

                <div class="bg-black/80 w-fit px-2.5 py-1 rounded-lg text-sm">
                    <font-awesome icon="clock" class="text-blue-400" />
                    <span class="font-bold">Fast</span>
                </div>
            </div>
        </div>
        <div class=" flex items-center gap-2 mt-2">
            <NuxtImg :src="brandImgPath" alt="Foodworld restaurant logo" class="w-16 h-16 rounded-lg" />
            <div>
                <h4 class="font-bold capitalize">{{ brandTitle }}</h4>
                <p class="flex items-center gap-1 text-gray-500">
                    <font-awesome icon="star" class="text-gray-500" />
                    <span>{{ rating }}</span>
                </p>
            </div>
        </div>
        <span v-if="isOpenTomorrow"
            class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
            <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
        </span>
    </div>
</template>