<template>
    <nav class="flex flex-col md:flex-row md:justify-between gap-2 p-4 w-full max-w-5xl mx-auto">
        <!-- 1 -->
        <div class="flex items-center gap-2 justify-center">
            <NuxtImg src="/img/Mask Group.png" alt="logo" />
            <span><span class="text-blue-700">food</span><span class="text-orange-600">Wa</span><span
                    class="text-blue-500">Gon</span></span>
        </div>
        <address class="flex gap-2 text-sm items-center dark:text-gray-100">
            <span class="font-bold">Deliver to:</span>
            <span aria-hidden="true">
                <font-awesome icon="location-dot" class="text-base" />
            </span>
            <span class="font-bold">Mohammadpur Bus Stand Dhaka</span>
        </address>
        <div class="flex flex-col md:flex-row gap-4 md:gap-2 items-center md:items-stretch">
            <form action="#" method="get" role="search" class="w-full">
                <div class="flex items-center w-full">
                    <label for="search" class="sr-only">Search</label>
                    <input type="search" name="q" placeholder="Search" id="search"
                        class="flex-1 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-l-md px-3 py-2 transition-colors focus-visible:outline-none" />
                    <button aria-label="Submit Search" type="submit"
                        class="bg-black dark:bg-gray-100 rounded-r-md px-4 py-[10px] cursor-pointer shadow-lg active:scale-95 active:transition-all hover:bg-gray-800 hover:transition-colors">
                        <font-awesome icon="magnifying-glass" class="text-white font-bold text-base" />
                    </button>
                </div>
            </form>
            <NuxtLink to="#"
                class="block bg-black dark:bg-gray-100 dark:text-black text-white text-center font-bold px-5 py-2 rounded-md w-full active:scale-95 active:transition-all shadow-xl hover:bg-gray-800 hover:transition-colors">
                Login</NuxtLink>
        </div>
    </nav>
</template>