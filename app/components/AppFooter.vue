<template>
  <footer class="bg-black/90 px-8 py-12">
    <div class="mx-auto max-w-5xl">
      <h6 class="mb-8 text-center text-sm font-bold text-white md:text-left">
        Our top cities
      </h6>
      <div class="grid w-full grid-cols-3 text-xs text-gray-400 md:grid-cols-3 md:gap-32 lg:grid-cols-5">
        <div class="space-y-3">
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >San Francisco</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >New York</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Los Angeles</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Chicago</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Houston</NuxtLink>
        </div>
        <div class="space-y-3">
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Miami</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Dallas</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Boston</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Atlanta</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Denver</NuxtLink>
        </div>
        <div class="space-y-3">
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Seattle</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Washington</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Philadelphia</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Phoenix</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >San Antonio</NuxtLink>
        </div>
        <div class="space-y-3">
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Columbus</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >New Mexico</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Albuquerquo</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Sacramento</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >New Orleans</NuxtLink>
        </div>
        <div class="space-y-3">
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Columbus</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >New Mexico</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Albuquerquo</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >Sacramento</NuxtLink>
          <NuxtLink
            to="#"
            class="block hover:text-white"
          >New Orleans</NuxtLink>
        </div>
      </div>

      <!-- <hr class="border-gray-600 my-2" /> -->
      <div class="my-10 border-b border-gray-700" />

      <div class="flex w-full flex-col md:flex-row">
        <div class="flex w-full flex-wrap gap-10 gap-y-6 md:w-[70%] md:gap-24">
          <div class="flex flex-1 flex-col gap-2 md:flex-none md:gap-4">
            <h6 class="text-sm font-bold text-white">
              Company
            </h6>
            <ul class="decoration-none m-0 flex list-none flex-col gap-2 p-0 text-xs text-gray-400">
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >About</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Careers</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Contact</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Press</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-1 flex-col gap-2 md:flex-none md:gap-4">
            <h6 class="text-sm font-bold text-white">
              Contact
            </h6>
            <ul class="decoration-none m-0 flex list-none flex-col gap-2 p-0 text-xs text-gray-400">
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Help & Support</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Partner with us</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Ride with us</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-1 flex-col gap-2 md:flex-none md:gap-4">
            <h6 class="text-sm font-bold text-white">
              Legal
            </h6>
            <ul class="decoration-none m-0 flex list-none flex-col gap-2 p-0 text-xs text-gray-400">
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Terms of Service</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Refund & Cancellation Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="block hover:text-white"
                >Cookie Policy</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <h6 class="text-sm font-bold text-white/50">
            Follow US
          </h6>
          <div>
            <font-awesome
              :icon="['fab', 'facebook']"
              class="text-xl text-white/30"
            />
            <font-awesome
              :icon="['fab', 'instagram']"
              class="text-xl text-white/30"
            />
            <font-awesome
              :icon="['fab', 'twitter']"
              class="text-xl text-white/30"
            />
            <font-awesome
              :icon="['fab', 'youtube']"
              class="text-xl text-white/30"
            />
          </div>
          <p class="text-sm font-semibold text-white/60">
            Receive exclusive offers in your mailbox
          </p>
          <form
            action="#"
            method="post"
            role="follow-us"
          >
            <div class="flex flex-col gap-2">
              <label
                for="email"
                class="sr-only"
              >Enter your email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                class="rounded-md border-none bg-gray-700 px-3 py-2 text-white outline-none"
              >
              <button
                type="submit"
                aria-label="Subscribe"
                class="rounded-md bg-yellow-500 dark:bg-amber-800 px-3 py-2 text-white shadow-lg dark:shadow-amber-800/30 shadow-yellow-500/50"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>
