<script setup lang="ts">
import CTA from '~/components/CTA.vue'
import FlashDealsItem from '~/components/FlashDealsItem.vue'
import NavBar from '~/components/NavBar.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div
    id="wrapper"
    class="bg-white dark:bg-black/80"
  >
    <NavBar />

    <!-- hero section -->
    <div class="w-full bg-yellow-500 pt-4 dark:bg-amber-800">
      <div class="relative mx-auto max-w-5xl md:h-[25rem] md:px-8 lg:px-0">
        <div
          class="flex h-full flex-col items-center justify-center gap-1 px-4 text-center md:w-[28.125rem] md:items-start md:gap-2 md:px-0 md:text-left lg:w-[34.375rem]"
        >
          <h1 class="text-2xl font-bold text-white md:text-5xl">
            Are you starving?
          </h1>
          <p class="mb-4 mt-1 text-sm text-black/70">
            Within a few clicks, find meals that are accessible near you
          </p>

          <div class="w-full rounded-xl bg-white p-4 shadow-xl">
            <div class="mb-12 flex items-center gap-4">
              <div class="flex items-center gap-2">
                <font-awesome
                  icon="motorcycle"
                  class="text-[#F58D00] dark:text-amber-800"
                />
                <span class="font-bold text-[#F58D00] dark:text-amber-800">Delivery</span>
              </div>
              <div class="flex items-center gap-2">
                <font-awesome
                  icon="bag-shopping"
                  class="text-gray-500 dark:text-amber-800"
                />
                <span class="font-bold text-gray-500 dark:text-amber-800">Pickup</span>
              </div>
            </div>

            <form
              action="#"
              method="get"
              role="food-search"
              class="flex flex-col items-center gap-4 md:flex-row"
            >
              <div class="relative w-full">
                <font-awesome
                  icon="location-dot"
                  class="absolute left-3 top-4 z-10 text-[#F58D00] dark:text-amber-800"
                />
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  class="relative w-full bg-gray-200 py-4 pl-10 focus-visible:outline-yellow-500 dark:focus-visible:outline-amber-800"
                >
              </div>
              <button
                class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-yellow-500 px-8 py-4 transition-transform hover:bg-[#F58D00]/80 active:scale-95 dark:bg-amber-800 dark:hover:bg-amber-600"
              >
                <span class="font-bold text-white">Find Food</span>
              </button>
            </form>
          </div>
        </div>
        <NuxtImg
          src="/img/Image Base.png"
          alt="food-image"
          class="mx-auto mt-8 block h-[12.5rem] w-[15.625rem] md:absolute md:bottom-0 md:right-[7%] md:mx-0 md:mt-0 md:h-[15.625rem] md:w-[18.75rem] lg:right-[1%] lg:h-[21.875rem] lg:w-[25rem]"
        />
      </div>
    </div>

    <!-- flash deals -->
    <div
      class="mx-auto my-12 grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4"
    >
      <!-- food item 1 -->
      <FlashDealsItem
        title="Greys Vage"
        img-path="/img/fdeals-1.png"
        :discount="15"
        :days-remaining="2"
      />
      <FlashDealsItem
        title="Greys Vage"
        img-path="/img/fdeals-2.png"
        :discount="15"
        :days-remaining="6"
      />
      <FlashDealsItem
        title="Greys Vage"
        img-path="/img/fdeals-3.png"
        :discount="15"
        :days-remaining="10"
      />
      <FlashDealsItem
        title="Greys Vage"
        img-path="/img/fdeals-4.png"
        :discount="15"
        :days-remaining="7"
      />
    </div>

    <!-- how does it work section -->
    <div
      class="mb-12 bg-gradient-to-b from-gray-100 to-white px-4 py-6 dark:from-gray-800 dark:to-[#121212] md:px-0 md:py-12"
    >
      <h1
        class="mb-12 text-center text-2xl font-bold text-black dark:text-gray-100 md:text-3xl"
      >
        How does it work
      </h1>
      <div
        class="flex flex-col gap-5 md:mx-auto md:w-[85%] md:flex-row md:justify-center"
      >
        <div
          class="flex w-full flex-col items-center text-center md:w-[18.75rem] md:gap-4"
        >
          <font-awesome
            icon="location-dot"
            class="text-7xl dark:text-amber-800"
          />
          <div>
            <h6
              class="mb-0 text-lg font-bold text-[#434343] dark:text-gray-100 md:mb-1"
            >
              Select location
            </h6>
            <p class="text-sm text-gray-500">
              Choose the location where your food will be delivered.
            </p>
          </div>
        </div>

        <div
          class="flex w-full flex-col items-center gap-2 text-center md:w-[18.75rem] md:gap-4"
        >
          <font-awesome
            icon="list-check"
            class="text-7xl dark:text-amber-800"
          />
          <div>
            <h6
              class="mb-0 text-lg font-bold text-[#434343] dark:text-gray-100 md:mb-1"
            >
              Choose order
            </h6>
            <p class="text-sm text-gray-500">
              Choose the location where your food will be delivered.
            </p>
          </div>
        </div>

        <div
          class="flex w-full flex-col items-center gap-2 text-center md:w-[18.75rem] md:gap-4"
        >
          <font-awesome
            icon="money-bill-transfer"
            class="text-7xl dark:text-amber-800"
          />
          <div>
            <h6
              class="mb-0 text-lg font-bold text-[#434343] dark:text-gray-100 md:mb-1"
            >
              Pay advance
            </h6>
            <p class="text-sm text-gray-500">
              Choose the location where your food will be delivered.
            </p>
          </div>
        </div>

        <div
          class="flex w-full flex-col items-center gap-2 text-center md:w-[18.75rem] md:gap-4"
        >
          <font-awesome
            icon="utensils"
            class="text-7xl dark:text-amber-800"
          />
          <div>
            <h6
              class="mb-0 text-lg font-bold text-[#434343] dark:text-gray-100 md:mb-1"
            >
              Enjoy meals
            </h6>
            <p class="text-sm text-gray-500">
              Choose the location where your food will be delivered.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- popular items section -->
    <div class="mx-auto mb-20 w-full max-w-5xl px-4 lg:px-0">
      <h1
        class="mb-6 text-center text-2xl font-bold text-black dark:text-gray-100 md:text-3xl"
      >
        Popular items
      </h1>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <!-- food item 1 -->
        <PopularItem
          title="Cheese Burger"
          brand-title="Burger Arena"
          img-path="/img/cheese_burger.jpg"
          :price="10.99"
          currency-symbol="$"
          details-page-link="#"
          :rating="4.5"
        />

        <!-- food item 2 -->
        <PopularItem
          title="Toffe’s Cake"
          brand-title="Top Sticks"
          img-path="/img/toffe_cake.png"
          :price="3.88"
          currency-symbol="$"
          details-page-link="#"
          :rating="4.5"
        />

        <!-- food item 3 -->
        <PopularItem
          title="Dancake"
          brand-title="Cake World"
          img-path="/img/dancake.png"
          :price="3.88"
          currency-symbol="$"
          details-page-link="#"
          :rating="4.5"
        />

        <!-- food item 4 -->
        <PopularItem
          title="Crispy Sandwitch"
          brand-title="Fastfood Dine"
          img-path="/img/crispy_cake.png"
          :price="3.88"
          currency-symbol="$"
          details-page-link="#"
          :rating="4.5"
        />

        <!-- food item 5 -->
        <PopularItem
          title="Thai Soup"
          brand-title="Foody main"
          img-path="/img/thai_soup.png"
          :price="3.88"
          currency-symbol="$"
          details-page-link="#"
          :rating="4.5"
        />
      </div>
    </div>

    <!-- featured restaurants section -->
    <div class="mx-auto mb-20 w-full max-w-5xl px-4 md:px-4 lg:px-0">
      <h1
        class="mb-6 text-center text-2xl font-bold text-black dark:text-gray-100 md:text-3xl"
      >
        Featured Restaurants
      </h1>
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
      >
        <FeaturedRestaurant
          img-path="/img/feature-1.png"
          brand-title="Foodworld"
          brand-img-path="/img/friendly.png"
          :discount="15"
          :is-open-tomorrow="true"
          :rating="4.5"
        />

        <!-- item 2 -->
        <FeaturedRestaurant
          img-path="/img/feature-2.png"
          brand-title="Pizza Hub"
          brand-img-path="/img/pizzahub.png"
          :discount="15"
          :is-open-tomorrow="true"
          :rating="4.5"
        />

        <!-- item 3 -->
        <FeaturedRestaurant
          img-path="/img/feature-3.png"
          brand-title="Donuts hut"
          brand-img-path="/img/donuts-hut-logo.png"
          :discount="15"
          :is-open-tomorrow="true"
          :rating="4.5"
        />

        <!-- item 4 -->
        <FeaturedRestaurant
          img-path="/img/feature-4.png"
          brand-title="Donuts hut"
          brand-img-path="/img/subway.png"
          :discount="15"
          :is-open-tomorrow="true"
          :rating="4.5"
        />

        <!-- item 5 -->
        <FeaturedRestaurant
          img-path="/img/feature-5.png"
          brand-title="Ruby Tuesday"
          brand-img-path="/img/ruby.png"
          :discount="15"
          :is-open-tomorrow="true"
          :rating="4.5"
        />

        <!-- item 6 -->
        <FeaturedRestaurant
          img-path="/img/feature-6.png"
          brand-title="Kuakata Fried Chicken"
          brand-img-path="/img/kfc.png"
          :discount="15"
          :is-open-tomorrow="true"
          :rating="4.5"
        />

        <!-- item 7 -->
        <FeaturedRestaurant
          img-path="/img/feature-7.png"
          brand-title="Red Square"
          brand-img-path="/img/red-squre.png"
          :discount="15"
          :is-open-tomorrow="true"
          :rating="4.5"
        />

        <!-- item 8 -->
        <FeaturedRestaurant
          img-path="/img/feature-8.png"
          brand-title="Taco Bell"
          brand-img-path="/img/taco.png"
          :discount="15"
          :is-open-tomorrow="true"
          :rating="4.5"
        />
      </div>

      <div class="mt-4 w-full md:mt-12 md:text-center">
        <button
          class="w-full cursor-pointer rounded-sm bg-black px-8 py-2 text-white hover:bg-gray-800 hover:transition-colors active:scale-95 active:transition-all dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300 md:w-fit md:px-16"
        >
          <span class="font-bold">View All</span>
          <i class="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>

    <!-- search by food -->
    <div class="mx-auto mb-20 mt-10 w-full max-w-5xl px-4 lg:px-0">
      <h2
        class="mb-6 text-center text-2xl font-bold dark:text-gray-100 md:text-left md:text-3xl"
      >
        Search by food
      </h2>
      <div class="flex flex-wrap justify-center gap-2 md:justify-between">
        <SearchByFoodItem
          title="Pizza"
          img-path="/img/pizza_search.jpg"
          page-link="#"
        />
        <SearchByFoodItem
          title="Burger"
          img-path="/img/burger_search.jpg"
          page-link="#"
        />
        <SearchByFoodItem
          title="Noodles"
          img-path="/img/noodles_search.jpg"
          page-link="#"
        />
        <SearchByFoodItem
          title="Sub-sandiwch"
          img-path="/img/chowmein_search.jpg"
          page-link="#"
        />
        <SearchByFoodItem
          title="Chow Mein"
          img-path="/img/noodles_search.jpg"
          page-link="#"
        />
        <SearchByFoodItem
          title="Steak"
          img-path="/img/steak.jpg"
          page-link="#"
        />
      </div>
    </div>

    <!-- deals section -->
    <div class="mx-auto mb-20 max-w-5xl px-4 lg:px-0">
      <!-- details card 1 -->
      <BestDealsItem
        title="Best Deals"
        title-sub-part="Crispy Sandwich"
        description="Enjoy the large size of sandwiches. Complete perfect slice of sandwiches."
        img-path="/img/deals-1.png"
      />

      <BestDealsItem
        title="Celebrate parties with"
        title-sub-part="Fried Chicken"
        description="Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                      best deals for fried chicken."
        img-path="/img/details-2.png"
        :is-reverse="true"
      />

      <BestDealsItem
        title="Wanna eat hot & spicy"
        title-sub-part="Pizza?"
        description="Pair up with a friend and enjoy the hot and crispy pizza pops. Try it
                      with the best deals."
        img-path="/img/details-2.png"
      />
    </div>

    <!-- cta -->
    <CTA />

    <!-- cta -->
    <AppFooter />
  </div>
</template>
