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
                class="block bg-black dark:bg-gray-100 dark:text-black text-white text-center font-bold px-5 py-2 rounded-md w-full active:scale-95 active:transition-all shadow-xl hover:bg-gray-800 hover:transition-colors">Login</NuxtLink>
        </div>
    </nav>

    <!-- hero section -->
    <div class="bg-yellow-500 pt-4 w-full">
        <div class="relative max-w-5xl mx-auto md:h-[25rem] md:px-8 lg:px-0">
            <div
                class="md:w-[28.125rem] lg:w-[34.375rem] h-full flex flex-col justify-center items-center md:items-start md:gap-2 gap-1 text-center md:text-left px-4 md:px-0">
                <h1 class="text-white font-bold text-2xl md:text-5xl">Are you starving?</h1>
                <p class="text-sm text-black/70 mt-1 mb-4">Within a few clicks, find meals that are
                    accessible
                    near
                    you</p>

                <div class="bg-white p-4 w-full rounded-xl shadow-xl">
                    <div class="flex items-center gap-4 mb-12">
                        <div class="flex items-center gap-2">
                            <font-awesome icon="motorcycle" class="text-[#F58D00]" />
                            <span class="font-bold text-[#F58D00]">Delivery</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <font-awesome icon="bag-shopping" class="text-gray-500" />
                            <span class="font-bold text-gray-500">Pickup</span>
                        </div>
                    </div>

                    <form action="#" method="get" role="food-search"
                        class="flex flex-col md:flex-row items-center gap-4">
                        <div class="relative w-full">
                            <font-awesome icon="location-dot" class="text-[#F58D00] absolute z-10 top-4 left-3" />
                            <input type="text" name="address" id="address" placeholder="Enter your address"
                                class="bg-gray-200 pl-10 relative py-4 w-full focus-visible:outline-yellow-500" />
                        </div>
                        <button
                            class="flex items-center justify-center gap-2 px-8 py-4 bg-[#F58D00] hover:bg-[#F58D00]/80 rounded-md w-full active:scale-95 transition-transform cursor-pointer">
                            <span class="font-bold text-white">Find Food</span>
                        </button>
                    </form>
                </div>
            </div>
            <NuxtImg src="/img/Image Base.png" alt="food-image"
                class="w-[15.625rem] h-[12.5rem] mx-auto mt-8 md:mt-0 md:mx-0 block md:w-[18.75rem] md:h-[15.625rem] md:absolute md:bottom-0 md:right-[7%] lg:right-[1%] lg:w-[25rem] lg:h-[21.875rem]" />
        </div>
    </div>

    <!-- flash deals -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto my-12 px-6">
        <!-- food item 1 -->
        <div>
            <div class="relative h-[12.5rem] w-full overflow-hidden rounded-[16px] group text-white">
                <NuxtImg src="/img/fdeals-1.png" alt="Greys Vage" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div
                    class="flex items-center justify-center bg-yellow-500 rounded-tr-[25px] absolute bottom-0 left-0 w-[112px] h-[70px] z-10">
                    <p class="font-extrabold md:text-6xl text-4xl text-white">15</p>
                    <div class="flex flex-col leading-tight">
                        <span class="text-white font-bold">%</span>
                        <span class="text-white text-sm">off</span>
                    </div>
                </div>
            </div>
            <div class="md:mt-6 mt-1">
                <h4 class="font-bold capitalize dark:text-gray-100">Greys Vage</h4>
                <span
                    class="font-bold text-xs uppercase bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md inline-block md:mt-2 mt-1">
                    <font-awesome icon="clock" class="text-yellow-700" />
                    6 days remaining
                </span>
            </div>
        </div>

        <!-- food item 2 -->
        <div>
            <div class="relative h-[12.5rem] w-full overflow-hidden rounded-[16px] group text-white">
                <NuxtImg src="/img/fdeals-2.png" alt="Greys Vage"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div
                    class="flex items-center justify-center bg-yellow-500 rounded-tr-[25px] absolute bottom-0 left-0 w-[112px] h-[70px] z-10">
                    <p class="font-extrabold md:text-6xl text-4xl text-white">15</p>
                    <div class="flex flex-col leading-tight">
                        <span class="text-white font-bold">%</span>
                        <span class="text-white text-sm">off</span>
                    </div>
                </div>
            </div>
            <div class="md:mt-6 mt-1">
                <h4 class="font-bold text-xl capitalize dark:text-gray-100">Greys Vage</h4>
                <span
                    class="font-bold text-xs uppercase bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md inline-block md:mt-2 mt-1">
                    <font-awesome icon="clock" class="text-yellow-700" />
                    6 days remaining
                </span>
            </div>
        </div>

        <!-- food item 3 -->
        <div>
            <div class="relative h-[12.5rem] w-full overflow-hidden rounded-[16px] group text-white">
                <NuxtImg src="/img/fdeals-3.png" alt="Greys Vage"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div
                    class="flex items-center justify-center bg-yellow-500 rounded-tr-[25px] absolute bottom-0 left-0 w-[112px] h-[70px] z-10">
                    <p class="font-extrabold md:text-6xl text-4xl text-white">15</p>
                    <div class="flex flex-col leading-tight">
                        <span class="text-white font-bold">%</span>
                        <span class="text-white text-sm">off</span>
                    </div>
                </div>
            </div>
            <div class="md:mt-6 mt-1">
                <h4 class="font-bold text-xl capitalize dark:text-gray-100">Greys Vage</h4>
                <span
                    class="font-bold text-xs uppercase bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md inline-block md:mt-2 mt-1">
                    <font-awesome icon="clock" class="text-yellow-700" />
                    6 days remaining
                </span>
            </div>
        </div>

        <!-- food item 4 -->
        <div>
            <div class="relative h-[12.5rem] w-full overflow-hidden rounded-[16px] group text-white">
                <NuxtImg src="/img/fdeals-4.png" alt="Greys Vage"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div
                    class="flex items-center justify-center bg-yellow-500 rounded-tr-[25px] absolute bottom-0 left-0 w-[112px] h-[70px] z-10">
                    <p class="font-extrabold md:text-6xl text-4xl text-white">15</p>
                    <div class="flex flex-col leading-tight">
                        <span class="text-white font-bold">%</span>
                        <span class="text-white text-sm">off</span>
                    </div>
                </div>
            </div>
            <div class="md:mt-6 mt-1">
                <h4 class="font-bold text-xl capitalize dark:text-gray-100">Greys Vage</h4>
                <span
                    class="font-bold text-xs uppercase bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md inline-block md:mt-2 mt-1">
                    <font-awesome icon="clock" class="text-yellow-700" />
                    6 days remaining
                </span>
            </div>
        </div>
    </div>

    <!-- how does it work section -->
    <div class="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-[#121212] py-6 px-4 md:px-0 mb-12">
        <h1 class="font-bold md:text-3xl text-2xl text-black dark:text-gray-100 text-center mb-6">How does it work</h1>
        <div class="flex flex-col md:flex-row gap-5 md:w-[85%] md:mx-auto">
            <div class="text-center md:w-[18.75rem] w-full flex flex-col items-center md:gap-4">
                <font-awesome icon="location-dot" class="text-7xl" />
                <div>
                    <h6 class="font-bold text-lg md:mb-1 mb-0 text-[#434343] dark:text-gray-100">Select location</h6>
                    <p class="text-sm text-gray-500">Choose the location where your food will be delivered.</p>
                </div>
            </div>

            <div class="text-center md:w-[18.75rem] w-full flex flex-col items-center md:gap-4 gap-2">
                <font-awesome icon="list-check" class="text-7xl" />
                <div>
                    <h6 class="font-bold text-lg md:mb-1 mb-0 text-[#434343] dark:text-gray-100">Choose order</h6>
                    <p class="text-sm text-gray-500">Choose the location where your food will be delivered.</p>
                </div>
            </div>

            <div class="text-center md:w-[18.75rem] w-full flex flex-col items-center md:gap-4 gap-2">
                <font-awesome icon="money-bill-transfer" class="text-7xl" />
                <div>
                    <h6 class="font-bold text-lg md:mb-1 mb-0 text-[#434343] dark:text-gray-100">Pay advance</h6>
                    <p class="text-sm text-gray-500">Choose the location where your food will be delivered.</p>
                </div>
            </div>

            <div class="text-center md:w-[18.75rem] w-full flex flex-col items-center md:gap-4 gap-2">
                <font-awesome icon="utensils" class="text-7xl" />
                <div>
                    <h6 class="font-bold text-lg md:mb-1 mb-0 text-[#434343] dark:text-gray-100">Enjoy meals</h6>
                    <p class="text-sm text-gray-500">Choose the location where your food will be delivered.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- popular items section -->
    <div class="px-4 lg:px-0 w-full max-w-5xl mx-auto mb-20">
        <h1 class="font-bold text-black dark:text-gray-100 md:text-3xl text-2xl text-center mb-6">Popular items</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

            <!-- food item 1 -->
            <div>
                <div class="relative h-[12.5rem] w-full overflow-hidden group rounded-lg">
                    <NuxtImg src="/img/cheese_burger.jpg"
                        alt="Juicy flame-grilled cheese burger with melted cheddar at Burger Arena"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div class="md:mt-2 mt-1">
                    <NuxtLink to="#" class="font-bold capitalize dark:text-gray-100 text-lg cursor-pointer hover:text-yellow-500">Cheese Burger</NuxtLink>
                    <p class="flex justify-left gap-1 text-gray-500 mt-1 -ml-1">
                        <font-awesome icon="location-dot" class="mt-[2px]"  />
                        <span class="dark:text-gray-400">Burger Arena</span>
                    </p>
                    <p class="font-bold mt-1 dark:text-gray-100">$3.88</p>
                    <button
                        class="bg-yellow-500 text-white font-black w-full md:mt-2 mt-1 rounded-sm py-2 cursor-pointer active:scale-95 active:transition-all hover:bg-yellow-400 hover:transition-colors">Order
                        Now</button>
                </div>
            </div>

            <!-- food item 2 -->
            <div>
                <div class="relative h-[12.5rem] w-full overflow-hidden group rounded-lg">
                    <NuxtImg src="/img/toffe_cake.png" alt="Rich Toffe's Cake with drizzled caramel sauce from Top Sticks"
                    
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div class="md:mt-2 mt-1">
                    <NuxtLink to="#" class="font-bold capitalize dark:text-gray-100 text-lg cursor-pointer hover:text-yellow-500">Toffe’s Cake</NuxtLink>
                    <p class="flex justify-left gap-1 text-gray-500 mt-1 -ml-1">
                        <font-awesome icon="location-dot" class="mt-[2px]"  />
                        <span class="dark:text-gray-400">Top Sticks</span>
                    </p>
                    <p class="font-bold mt-1 dark:text-gray-100">$3.88</p>
                    <button
                        class="bg-yellow-500 text-white font-black w-full md:mt-2 mt-1 rounded-sm py-2 cursor-pointer active:scale-95 active:transition-all hover:bg-yellow-400 hover:transition-colors">Order
                        Now</button>
                </div>
            </div>

            <!-- food item 3 -->
            <div>
                <div class="relative h-[12.5rem] w-full overflow-hidden group rounded-lg">
                    <NuxtImg src="/img/dancake.png" alt="Fluffy Dancake topped with powdered sugar by Cake World"
                    
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div class="md:mt-2 mt-1">
                    <NuxtLink to="#" class="font-bold capitalize dark:text-gray-100 text-lg cursor-pointer hover:text-yellow-500">Dancake</NuxtLink>
                    <p class="flex justify-left gap-1 text-gray-500 mt-1 -ml-1">
                        <font-awesome icon="location-dot" class="mt-[2px]" />
                        <span class="dark:text-gray-400">Cake World</span>
                    </p>
                    <p class="font-bold mt-1 dark:text-gray-100">$3.88</p>
                    <button
                        class="bg-yellow-500 text-white font-black w-full md:mt-2 mt-1 rounded-sm py-2 cursor-pointer active:scale-95 active:transition-all hover:bg-yellow-400 hover:transition-colors">Order
                        Now</button>
                </div>
            </div>

            <!-- food item 4 -->
            <div>
                <div class="relative h-[12.5rem] w-full overflow-hidden group rounded-lg">
                    <NuxtImg src="/img/crispy_cake.png"
                        alt="Golden-brown Crispy Sandwich with fresh fillings from Fastfood Dine"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div class="md:mt-2 mt-1">
                    <NuxtLink to="#" class="font-bold capitalize dark:text-gray-100 text-lg cursor-pointer hover:text-yellow-500">Crispy Sandwitch</NuxtLink>
                    <p class="flex justify-left gap-1 text-gray-500 mt-1 -ml-1">
                        <font-awesome icon="location-dot" class="mt-[2px]" />
                        <span class="dark:text-gray-400">Fastfood Dine</span>
                    </p>
                    <p class="font-bold mt-1 dark:text-gray-100">$3.88</p>
                    <button
                        class="bg-yellow-500 text-white font-black w-full md:mt-2 mt-1 rounded-sm py-2 cursor-pointer active:scale-95 active:transition-all hover:bg-yellow-400 hover:transition-colors">Order
                        Now</button>
                </div>
            </div>

            <!-- food item 5 -->
            <div>
                <div class="relative h-[12.5rem] w-full overflow-hidden group rounded-lg">
                    <NuxtImg src="/img/thai_soup.png"
                        alt="Authentic spicy and sour Thai Soup with aromatic herbs at Foody main"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div class="md:mt-2 mt-1">
                    <NuxtLink to="#" class="font-bold capitalize dark:text-gray-100 text-lg cursor-pointer hover:text-yellow-500">Thai Soup</NuxtLink>
                    <p class="flex justify-left gap-1 text-gray-500 mt-1 -ml-1">
                        <font-awesome icon="location-dot" class="mt-[2px]" />
                        <span class="dark:text-gray-400">Foody main</span>
                    </p>
                    <p class="font-bold mt-1 dark:text-gray-100">$3.88</p>
                    <button
                        class="bg-yellow-500 text-white font-black w-full md:mt-2 mt-1 rounded-sm py-2 cursor-pointer active:scale-95 active:transition-all hover:bg-yellow-400 hover:transition-colors">Order
                        Now</button>
                </div>
            </div>
        </div>
    </div>

    <!-- featured restaurants section -->
    <div class="w-full max-w-5xl mx-auto px-4 md:px-4 lg:px-0 mb-20">
        <h1 class="font-bold text-black dark:text-gray-100 md:text-3xl text-2xl text-center mb-6">Featured Restaurants
        </h1>
        <div class="gap-x-6 gap-y-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

            <div>
                <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
                    <NuxtImg src="/img/feature-1.png" alt="Crispy variety fried chicken platter with dipping sauce at Foodworld"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    <div class="flex gap-2 absolute top-4 left-4 text-white">
                        <div class="bg-black/80 w-fit px-2 py-1 rounded-lg text-sm">
                            <font-awesome icon="tag" class="text-yellow-400" />
                            <span class="font-bold">20</span>
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
                    <NuxtImg src="/img/friendly.png" alt="Foodworld restaurant logo" class="w-16 h-16 rounded-lg" />
                    <div>
                        <h4 class="font-bold capitalize">Foodworld</h4>
                        <p class="flex items-center gap-1 text-gray-500">
                            <font-awesome icon="star" class="text-gray-500" />
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
                <span
                    class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
                    <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
                </span>
            </div>

            <!-- item 2 -->
            <div>
                <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
                    <NuxtImg src="/img/feature-2.png" alt="Premium pepperoni pizza with extra cheese and Italian herbs at Pizza Hub"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    <div class="flex gap-2 absolute top-4 left-4 text-white">
                        <div class="bg-black w-fit px-2 py-1 rounded-lg text-sm">
                            <font-awesome icon="tag" class="text-yellow-400" />
                            <span class="font-bold">20</span>
                            <span>%</span>
                            <span class="font-extrabold">off</span>
                        </div>

                        <div class="bg-black w-fit px-2 py-1 rounded-lg text-sm">
                            <font-awesome icon="clock" class="text-blue-400" />
                            <span class="font-bold">Fast</span>
                        </div>
                    </div>
                </div>
                <div class=" flex items-center gap-2 mt-2">
                    <NuxtImg src="/img/pizzahub.png" alt="Pizza Hub restaurant logo" class="w-16 h-16 rounded-lg object-contain bg-gray-50 border border-gray-100 dark:bg-gray-80" />
                    <div>
                        <h4 class="font-bold capitalize">Pizza Hub</h4>
                        <p class="flex items-center gap-1 text-gray-500">
                            <font-awesome icon="star" class="text-gray-500" />
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
                <span
                    class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
                    <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
                </span>
            </div>

            <!-- item 3 -->
            <div>
                <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
                    <NuxtImg src="/img/feature-3.png" alt="Assorted box of glazed and chocolate-sprinkled donuts at Donuts Hut"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>


                    <div class="flex gap-2 absolute top-4 left-4 text-white">
                        <div class="bg-black/80 w-fit px-2.5 py-1 rounded-lg text-sm">
                            <font-awesome icon="tag" class="text-yellow-400" />
                            <span class="font-bold">20</span>
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
                    <NuxtImg src="/img/donuts-hut-logo.png" alt="Donuts Hut official logo" class="w-16 h-16 rounded-lg object-contain" />
                    <div>
                        <h4 class="font-bold capitalize">Donuts hut</h4>
                        <p class="flex items-center gap-1 text-gray-500">
                            <font-awesome icon="star" class="text-gray-500" />
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
                <span
                    class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
                    <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
                </span>
            </div>

            <!-- item 4 -->
            <div>
                <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
                    <NuxtImg src="/img/feature-4.png" alt="Freshly assembled footlong sub sandwich with turkey, ham, and crisp vegetables at Subway"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>


                    <div class="flex gap-2 absolute top-4 left-4 text-white">
                        <div class="bg-black/80 w-fit px-2.5 py-1 rounded-lg text-sm">
                            <font-awesome icon="tag" class="text-yellow-400" />
                            <span class="font-bold">20</span>
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
                    <NuxtImg src="/img/subway.png" alt="Subway restaurant logo" class="w-16 h-16 rounded-lg" />
                    <div>
                        <h4 class="font-bold capitalize">Donuts hut</h4>
                        <p class="flex items-center gap-1 text-gray-500">
                            <font-awesome icon="star" class="text-gray-500" />
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
                <span
                    class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
                    <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
                </span>
            </div>

            <!-- item 5 -->
            <div>
                <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
                    <NuxtImg src="/img/feature-5.png" alt="Gourmet beef burger with melted cheese, crispy fries, and a side salad at Ruby Tuesday"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>


                    <div class="flex gap-2 absolute top-4 left-4 text-white">
                        <div class="bg-black/80 w-fit px-2.5 py-1 rounded-lg text-sm">
                            <font-awesome icon="tag" class="text-yellow-400" />
                            <span class="font-bold">20</span>
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
                    <NuxtImg src="/img/ruby.png" alt="Ruby Tuesday restaurant logo" class="w-16 h-16 rounded-lg" />
                    <div>
                        <h4 class="font-bold capitalize">Ruby Tuesday</h4>
                        <p class="flex items-center gap-1 text-gray-500">
                            <font-awesome icon="star" class="text-gray-500" />
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
                <span
                    class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
                    <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
                </span>
            </div>

            <!-- item 6 -->
            <div>
                <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
                    <NuxtImg src="/img/feature-6.png" alt="Crispy golden-brown fried chicken drumsticks with a side of coleslaw at Kuakata Fried Chicken"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>


                    <div class="flex gap-2 absolute top-4 left-4 text-white">
                        <div class="bg-black/80 w-fit px-2.5 py-1 rounded-lg text-sm">
                            <font-awesome icon="tag" class="text-yellow-400" />
                            <span class="font-bold">20</span>
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
                    <NuxtImg src="/img/kfc.png" alt="Kuakata Fried Chicken brand logo" class="w-16 h-16 rounded-lg" />
                    <div>
                        <h4 class="font-bold capitalize">Kuakata Fried Chicken</h4>
                        <p class="flex items-center gap-1 text-gray-500">
                            <font-awesome icon="star" class="text-gray-500" />
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
                <span
                    class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
                    <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
                </span>
            </div>

            <!-- item 7 -->
            <div>
                <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
                    <NuxtImg src="/img/feature-7.png" alt="Authentic Middle Eastern platter with grilled kebabs, hummus, and fresh pita bread at Red Square""
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>


                    <div class="flex gap-2 absolute top-4 left-4 text-white">
                        <div class="bg-black/80 w-fit px-2.5 py-1 rounded-lg text-sm">
                            <font-awesome icon="tag" class="text-yellow-400" />
                            <span class="font-bold">20</span>
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
                    <NuxtImg src="/img/red-squre.png" alt="Red Square restaurant logo" class="w-16 h-16 rounded-lg" />
                    <div>
                        <h4 class="font-bold capitalize">Red Square</h4>
                        <p class="flex items-center gap-1 text-gray-500">
                            <font-awesome icon="star" class="text-gray-500" />
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
                <span
                    class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
                    <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
                </span>
            </div>

            <!-- item 8 -->
            <div>
                <div class="relative h-[12.5rem] w-full rounded-lg group overflow-hidden">
                    <NuxtImg src="/img/feature-8.png" alt="Crunchy beef tacos with shredded lettuce, cheddar cheese, and hot sauce at Taco Bell"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <!-- light blur overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div class="flex gap-2 absolute top-4 left-4 text-white">
                        <div class="bg-black/80 w-fit px-2.5 py-1 rounded-lg text-sm">
                            <font-awesome icon="tag" class="text-yellow-400" />
                            <span class="font-bold">20</span>
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
                    <NuxtImg src="/img/taco.png" alt="Taco Bell official logo" class="w-16 h-16 rounded-lg" />
                    <div>
                        <h4 class="font-bold capitalize">Taco Bell</h4>
                        <p class="flex items-center gap-1 text-gray-500">
                            <font-awesome icon="star" class="text-gray-500" />
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
                <span
                    class="font-bold inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 uppercase tracking-wide text-xs px-3 py-1.5 rounded-lg mt-2">
                    <font-awesome :icon="['far', 'clock']" /> Opens tomorrow
                </span>
            </div>
        </div>

        <div class="mt-4 md:mt-12 w-full md:text-center">
            <button
                class="bg-black text-white rounded-sm py-2 px-8 md:px-16 w-full md:w-fit active:scale-95 cursor-pointer active:transition-all hover:bg-gray-800 hover:transition-colors">
                <span class="font-bold">View All</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>

    <!-- search by food -->
    <div class="mt-10 px-4 lg:px-0 w-full max-w-5xl mx-auto mb-20">
        <h2 class="md:text-3xl text-2xl dark:text-gray-100 font-bold text-center md:text-left mb-6">Search by
            food</h2>
        <div class="flex gap-2 flex-wrap justify-center md:justify-between">
            <div class="flex flex-col items-center w-36 gap-4 group cursor-pointer">
                <div class="w-full h-36 rounded-full overflow-hidden">
                    <NuxtImg src="/img/pizza_search.jpg" alt="Hot cheesy pepperoni pizza slice"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <span class="font-bold dark:text-gray-100 group-hover:text-yellow-500 transition-colors duration-300">Pizza</span>
            </div>

            <div class="flex flex-col items-center w-36 gap-4 group cursor-pointer">
                <div class="w-full h-36 rounded-full overflow-hidden">
                    <NuxtImg src="/img/burger_search.jpg" alt="Grilled beef burger with melted cheese and fresh toppings"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <span class="font-bold dark:text-gray-100 group-hover:text-yellow-500 transition-colors duration-300">Burger</span>
            </div>
            <div class="flex flex-col items-center w-36 gap-4 group cursor-pointer">
                <div class="w-full h-36 rounded-full overflow-hidden">
                    <NuxtImg src="/img/noodles_search.jpg" alt="Bowl of stir-fry noodles with fresh vegetables and sesame seeds"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <span class="font-bold dark:text-gray-100 group-hover:text-yellow-500 transition-colors duration-300">Noodles</span>
            </div>
            <div class="flex flex-col items-center w-36 group gap-4">
                <div class="w-full h-36 rounded-full overflow-hidden">
                    <NuxtImg src="/img/sandwich_search.jpg" alt="Freshly prepared sub sandwich with sliced meats, cheese, and vegetables on a long baguette"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <span class="font-bold dark:text-gray-100 group-hover:text-yellow-500 transition-colors duration-300">Sub-sandiwch</span>
            </div>
            <div class="flex flex-col items-center w-36 gap-4 group cursor-pointer">
                <div class="w-full h-36 rounded-full overflow-hidden">
                    <NuxtImg src="/img/chowmein_search.jpg" alt="Stir-fried chow mein with crispy vegetables and savory soy sauce"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <span class="font-bold dark:text-gray-100 group-hover:text-yellow-500 transition-colors duration-300">Chow Mein</span>
            </div>
            <div class="flex flex-col items-center w-36 gap-4 group cursor-pointer">
                <div class="w-full h-36 rounded-full overflow-hidden">
                    <NuxtImg src="/img/steak.jpg" alt="Juicy grilled beef steak with sear marks and rosemary garnish"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <span class="font-bold dark:text-gray-100 group-hover:text-yellow-500 transition-colors duration-300">Steak</span>
            </div>
        </div>
    </div>

    <!-- deals section -->
    <div class="mb-20 max-w-5xl mx-auto px-4 lg:px-0">
        <!-- details card 1 -->
        <div class="bg-white dark:bg-gray-900 flex flex-col-reverse shadow-2xl rounded-lg mb-10 md:flex-row">
            <div class="flex flex-col p-8 md:px-8 justify-center gap-y-3 md:w-2/5 md:justify-between md:gap-2">
                <div class="gap-2 md:h-52 flex flex-col justify-center">
                    <h1 class="font-black text-3xl text-left leading-tight">
                        <span class="text-gray-900 dark:text-white">Best deals</span>
                        <span class="text-gray-500 dark:text-orange-500 block">Crispy Sandwich</span>
                    </h1>
                    <p class="text-gray-500 text-left dark:text-gray-400 text-sm leading-relaxed">
                        Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.
                    </p>
                </div>
                <button class="bg-yellow-500 text-white font-bold rounded-md text-center py-3 shadow-lg shadow-yellow-500/30 cursor-pointer
                        active:scale-95 hover:bg-yellow-400 transition-colors">PROCEED
                    TO
                    ORDER</button>
            </div>
            <div class="relative h-[12.875rem] group md:h-[20rem] md:w-3/5 rounded-tr-lg rounded-br-lg w-full overflow-hidden">
                <NuxtImg src="/img/deals-1.png" alt="Extra large crispy chicken sandwich with fresh lettuce and sauce"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
        </div>

        <div class="bg-white dark:bg-gray-900 flex flex-col-reverse shadow-xl/30 rounded-lg mb-10 md:flex-row-reverse">
            <div class="flex flex-col p-8 md:px-8 justify-center gap-y-3 md:w-2/5 md:justify-between md:gap-2">
                <div class="gap-2 md:h-52 flex flex-col justify-center">
                    <h1 class="font-black text-3xl text-left leading-tight">
                        <span class="text-gray-900 dark:text-white">Celebrate parties with</span>
                        <span class="text-gray-500 dark:text-orange-500 block">Fried Chicken</span>
                    </h1>
                    <p class="text-gray-500 text-left dark:text-gray-400 text-sm leading-relaxed">
                        Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                        best deals for fried chicken.
                    </p>
                </div>
                <button class="bg-yellow-500 text-white font-bold rounded-md text-center py-3 shadow-lg shadow-yellow-500/30 cursor-pointer
                        active:scale-95 hover:bg-yellow-400 transition-colors">PROCEED
                    TO
                    ORDER</button>
            </div>
            <div class="relative group h-[12.875rem] md:h-[20rem] md:w-3/5 rounded-tl-lg rounded-bl-lg w-full overflow-hidden">
                <NuxtImg src="/img/details-2.png" alt="Crispy golden fried chicken bucket with fresh lemon slices and chili seasoning"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            </div>
        </div>
        <div class="bg-white dark:bg-gray-900 flex flex-col-reverse shadow-2xl rounded-lg mb-10 md:flex-row">
            <div class="flex flex-col p-8 md:px-8 justify-center gap-y-3 md:w-2/5 md:justify-between md:gap-2">
                <div class="gap-2 md:h-52 flex flex-col justify-center">
                    <h1 class="font-black text-3xl text-left leading-tight">
                        <span class="text-gray-900 dark:text-white">Wanna eat hot & spicy</span>
                        <span class="text-gray-500 dark:text-orange-500 block">Pizza?</span>
                    </h1>
                    <p class="text-gray-500 text-left dark:text-gray-400 text-sm leading-relaxed">
                        Pair up with a friend and enjoy the hot and crispy pizza pops. Try it
                        with the best deals.
                    </p>
                </div>
                <button class="bg-yellow-500 text-white font-bold rounded-md text-center py-3 shadow-lg shadow-yellow-500/30 cursor-pointer
                        active:scale-95 hover:bg-yellow-400 transition-colors">PROCEED
                    TO
                    ORDER</button>
            </div>
            <div class="relative group h-[12.875rem] md:h-[20rem] md:w-3/5 rounded-tr-lg rounded-br-lg w-full overflow-hidden">
                <NuxtImg src="/img/details-3.png" alt="Freshly baked spicy pepperoni pizza with chili flakes and melted mozzarella cheese"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
        </div>

    </div>

    <!-- cta -->
    <div
        class="bg-[url('/img/cta.png')] bg-cover bg-center flex flex-col gap-4 items-center justify-center px-2 py-4 lg:py-14">
        <h1 class="text-md lg:text-2xl font-bold text-center text-white dark:text-gray-100">Are you ready to order
            with the best
            deals?</h1>
        <NuxtLink to="#"
            class="bg-yellow-500 text-white border-1 border-white font-bold rounded-sm text-center py-2 px-2 md:px-8 shadow-xl cursor-pointer active:scale-95 active:transition-transform hover:bg-yellow-400 hover:transition-colors">PROCEED
            TO ORDER</NuxtLink>
    </div>

    <footer class="bg-black/90 py-12 px-8">
        <div class="max-w-5xl mx-auto">
            <h6 class="font-bold text-sm text-center md:text-left mb-8 text-white">Our top cities</h6>
            <div class="w-full grid grid-cols-3 md:gap-[8rem] md:grid-cols-3 lg:grid-cols-5 text-gray-400 text-xs">
                <div class="space-y-3">
                    <NuxtLink to="#" class="block hover:text-white">San Francisco</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">New York</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Los Angeles</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Chicago</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Houston</NuxtLink>
                </div>
                <div class="space-y-3">
                    <NuxtLink to="#" class="block hover:text-white">Miami</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Dallas</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Boston</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Atlanta</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Denver</NuxtLink>
                </div>
                <div class="space-y-3">
                    <NuxtLink to="#" class="block hover:text-white">Seattle</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Washington</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Philadelphia</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Phoenix</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">San Antonio</NuxtLink>
                </div>
                <div class="space-y-3">
                    <NuxtLink to="#" class="block hover:text-white">Columbus</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">New Mexico</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Albuquerquo</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Sacramento</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">New Orleans</NuxtLink>
                </div>
                <div class="space-y-3">
                    <NuxtLink to="#" class="block hover:text-white">Columbus</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">New Mexico</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Albuquerquo</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">Sacramento</NuxtLink>
                    <NuxtLink to="#" class="block hover:text-white">New Orleans</NuxtLink>
                </div>
            </div>

            <!-- <hr class="border-gray-600 my-2" /> -->
            <div class="border-b border-gray-700 my-10"></div>

            <div class="flex flex-col w-full md:flex-row">
                <div class="flex flex-wrap gap-y-6 md:w-[70%] w-full gap-10 md:gap-[6rem]">
                    <div class="flex flex-col md:gap-4 gap-2 flex-1 md:flex-none">
                        <h6 class="font-bold text-white text-sm">Company</h6>
                        <ul class="list-none text-gray-400 text-xs decoration-none p-0 m-0 flex flex-col gap-2">
                            <li><NuxtLink to="#" class="block hover:text-white">About</NuxtLink></li>
                            <li><NuxtLink to="#" class="block hover:text-white">Careers</NuxtLink></li>
                            <li><NuxtLink to="#" class="block hover:text-white">Contact</NuxtLink></li>
                            <li><NuxtLink to="#" class="block hover:text-white">Press</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="flex flex-col md:gap-4 gap-2 flex-1 md:flex-none">
                        <h6 class="font-bold text-white text-sm">Contact</h6>
                        <ul class="list-none text-gray-400 text-xs decoration-none p-0 m-0 flex flex-col gap-2">
                            <li><NuxtLink to="#" class="block hover:text-white">Help & Support</NuxtLink></li>
                            <li><NuxtLink to="#" class="block hover:text-white">Partner with us</NuxtLink></li>
                            <li><NuxtLink to="#" class="block hover:text-white">Ride with us</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="flex flex-col md:gap-4 gap-2 flex-1 md:flex-none">
                        <h6 class="font-bold text-white text-sm">Legal</h6>
                        <ul class="list-none text-gray-400 text-xs decoration-none p-0 m-0 flex flex-col gap-2">
                            <li><NuxtLink to="#" class="block hover:text-white">Terms of Service</NuxtLink></li>
                            <li><NuxtLink to="#" class="block hover:text-white">Refund & Cancellation Policy</NuxtLink></li>
                            <li><NuxtLink to="#" class="block hover:text-white">Privacy Policy</NuxtLink></li>
                            <li><NuxtLink to="#" class="block hover:text-white">Cookie Policy</NuxtLink></li>
                        </ul>
                    </div>

                </div>
                <div class="flex flex-col gap-5">
                    <h6 class="font-bold text-white/50 text-sm">Follow US</h6>
                    <div>
                        <font-awesome :icon="['fab', 'facebook']" class="text-white/30 text-xl" />
                        <font-awesome :icon="['fab', 'instagram']" class="text-white/30 text-xl" />
                        <font-awesome :icon="['fab', 'twitter']" class="text-white/30 text-xl" />
                        <font-awesome :icon="['fab', 'youtube']" class="text-white/30 text-xl" />
                    </div>
                    <p class="text-white/60 text-sm font-semibold">Receive exclusive offers in your mailbox</p>
                    <form action="#" method="post" role="follow-us">
                        <div class="flex gap-2 flex-col">
                            <label for="email" class="sr-only">Enter your email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                class="border-none outline-none bg-gray-700 text-white py-2 px-3 rounded-md" />
                            <button type="submit" aria-label="Subscribe"
                                class="bg-yellow-500 text-white py-2 px-3 rounded-md shadow-lg shadow-yellow-500/50">Subscribe</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </footer>

</template>
