<template>
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
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">About</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Careers</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Contact</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Press</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col md:gap-4 gap-2 flex-1 md:flex-none">
                        <h6 class="font-bold text-white text-sm">Contact</h6>
                        <ul class="list-none text-gray-400 text-xs decoration-none p-0 m-0 flex flex-col gap-2">
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Help & Support</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Partner with us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Ride with us</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col md:gap-4 gap-2 flex-1 md:flex-none">
                        <h6 class="font-bold text-white text-sm">Legal</h6>
                        <ul class="list-none text-gray-400 text-xs decoration-none p-0 m-0 flex flex-col gap-2">
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Terms of Service</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Refund & Cancellation Policy</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Privacy Policy</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="block hover:text-white">Cookie Policy</NuxtLink>
                            </li>
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