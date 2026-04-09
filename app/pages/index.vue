<script setup lang="ts">
import CTA from '~/components/CTA.vue';
import FlashDealsItem from '~/components/FlashDealsItem.vue';
import NavBar from '~/components/NavBar.vue';

</script>

<template>
    <NavBar />

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
        <FlashDealsItem title="Greys Vage" imgPath="/img/fdeals-1.png" :discount="15" :daysRemaining="2" />
        <FlashDealsItem title="Greys Vage" imgPath="/img/fdeals-2.png" :discount="15" :daysRemaining="6" />
        <FlashDealsItem title="Greys Vage" imgPath="/img/fdeals-3.png" :discount="15" :daysRemaining="10" />
        <FlashDealsItem title="Greys Vage" imgPath="/img/fdeals-4.png" :discount="15" :daysRemaining="7" />
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
            <PopularItem title="Cheese Burger" brandTitle="Burger Arena" imgPath="/img/cheese_burger.jpg" :price="10.99"
                currencySymbol="$" detailsPageLink="#" :rating="4.5" />

            <!-- food item 2 -->
            <PopularItem title="Toffe’s Cake" brandTitle="Top Sticks" imgPath="/img/toffe_cake.png" :price="3.88"
                currencySymbol="$" detailsPageLink="#" :rating="4.5" />

            <!-- food item 3 -->
            <PopularItem title="Dancake" brandTitle="Cake World" imgPath="/img/dancake.png" :price="3.88"
                currencySymbol="$" detailsPageLink="#" :rating="4.5" />

            <!-- food item 4 -->
            <PopularItem title="Crispy Sandwitch" brandTitle="Fastfood Dine" imgPath="/img/crispy_cake.png"
                :price="3.88" currencySymbol="$" detailsPageLink="#" :rating="4.5" />

            <!-- food item 5 -->
            <PopularItem title="Thai Soup" brandTitle="Foody main" imgPath="/img/thai_soup.png" :price="3.88"
                currencySymbol="$" detailsPageLink="#" :rating="4.5" />
        </div>
    </div>

    <!-- featured restaurants section -->
    <div class="w-full max-w-5xl mx-auto px-4 md:px-4 lg:px-0 mb-20">
        <h1 class="font-bold text-black dark:text-gray-100 md:text-3xl text-2xl text-center mb-6">Featured Restaurants
        </h1>
        <div class="gap-x-6 gap-y-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

            <FeaturedRestaurant imgPath="/img/feature-1.png" brandTitle="Foodworld" brandImgPath="/img/friendly.png"
                :discount="15" :isOpenTomorrow="true" :rating="4.5" />

            <!-- item 2 -->
            <FeaturedRestaurant imgPath="/img/feature-2.png" brandTitle="Pizza Hub" brandImgPath="/img/pizzahub.png"
                :discount="15" :isOpenTomorrow="true" :rating="4.5" />

            <!-- item 3 -->
            <FeaturedRestaurant imgPath="/img/feature-3.png" brandTitle="Donuts hut"
                brandImgPath="/img/donuts-hut-logo.png" :discount="15" :isOpenTomorrow="true" :rating="4.5" />

            <!-- item 4 -->
            <FeaturedRestaurant imgPath="/img/feature-4.png" brandTitle="Donuts hut"
                brandImgPath="/img/subway.png" :discount="15" :isOpenTomorrow="true" :rating="4.5" />

            <!-- item 5 -->
            <FeaturedRestaurant imgPath="/img/feature-5.png" brandTitle="Ruby Tuesday" brandImgPath="/img/ruby.png"
                :discount="15" :isOpenTomorrow="true" :rating="4.5" />

            <!-- item 6 -->
            <FeaturedRestaurant imgPath="/img/feature-6.png" brandTitle="Kuakata Fried Chicken"
                brandImgPath="/img/kfc.png" :discount="15" :isOpenTomorrow="true" :rating="4.5" />

            <!-- item 7 -->
            <FeaturedRestaurant imgPath="/img/feature-7.png" brandTitle="Red Square" brandImgPath="/img/red-squre.png"
                :discount="15" :isOpenTomorrow="true" :rating="4.5" />

            <!-- item 8 -->
            <FeaturedRestaurant imgPath="/img/feature-8.png" brandTitle="Taco Bell" brandImgPath="/img/taco.png"
                :discount="15" :isOpenTomorrow="true" :rating="4.5" />

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
            <SearchByFoodItem title="Pizza" imgPath="/img/pizza_search.jpg" pageLink="#" />
            <SearchByFoodItem title="Burger" imgPath="/img/burger_search.jpg" pageLink="#" />
            <SearchByFoodItem title="Noodles" imgPath="/img/noodles_search.jpg" pageLink="#" />
            <SearchByFoodItem title="Sub-sandiwch" imgPath="/img/chowmein_search.jpg" pageLink="#" />
            <SearchByFoodItem title="Chow Mein" imgPath="/img/noodles_search.jpg" pageLink="#" />
            <SearchByFoodItem title="Steak" imgPath="/img/steak.jpg" pageLink="#" />
        </div>
    </div>

    <!-- deals section -->
    <div class="mb-20 max-w-5xl mx-auto px-4 lg:px-0">
        <!-- details card 1 -->
        <BestDealsItem
            title="Best Deals"
            titleSubPart="Crispy Sandwich"
            description="Enjoy the large size of sandwiches. Complete perfect slice of sandwiches."
            imgPath="/img/deals-1.png"
        />

        <BestDealsItem
            title="Celebrate parties with"
            titleSubPart="Fried Chicken"
            description="Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                        best deals for fried chicken."
            imgPath="/img/details-2.png"
            :isReverse="true"
        />

        <BestDealsItem
            title="Wanna eat hot & spicy"
            titleSubPart="Pizza?"
            description="Pair up with a friend and enjoy the hot and crispy pizza pops. Try it
                        with the best deals."
            imgPath="/img/details-2.png"
        />
    </div>

    <!-- cta -->
    <CTA />

    <!-- cta -->
    <Footer />

</template>
