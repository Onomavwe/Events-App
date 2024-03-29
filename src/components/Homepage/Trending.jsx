import React from 'react'

const Trending = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="text-center text-gray-900">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">Get the most from your events</h2>
          <a
            href="#"
            class="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
            Learn more
            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-0 max-w-screen-sm text-left mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Events in London</h2>
          </div>
          <div class="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <a href="/event">
              <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img class="absolute inset-0 h-full w-full object-cover" src="assets/images/event-1.jpg" alt="" />
                </div>
                <div class="float-right text-gray-900 mt-[-2px] p-2 mr-3 ml-1 rounded-full border">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </span>
                </div>
                <div class="p-4">
                  <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dance and Flex Festival - Birminggham - 2023</h5>
                  <div class="mt-2 flex font-medium dark:text-white">
                    <div class="text-sm font-normal text-red-500 dark:text-gray-400">Sat, Feb 18, 2023, 11:00</div>
                  </div>
                  <div class="mt-2 flex font-medium dark:text-white">
                    <div class="text-sm font-normal text-gray-500 dark:text-gray-400">The Stadium Stand . Birmingham</div>
                  </div>
                  <div class="mb-5 mt-1 text-sm font-medium">
                    <p class="mt-2 text-gray-700 dark:text-gray-400">Meatle Heath Club</p>
                    <div class="flex items-center mt-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </span>
                      <p class="px-2 text-gray-700 dark:text-gray-400">16.9k followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src="assets/images/event-2.jpg" alt="" />
              </div>
              <div class="float-right text-gray-900 mt-[-2px] p-2 mr-3 ml-1 rounded-full border">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              </div>
              <div class="p-4">
                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dance and Flex Festival - Birminggham - 2023</h5>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-red-500 dark:text-gray-400">Sat, Feb 18, 2023, 11:00</div>
                </div>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">The Stadium Stand . Birmingham</div>
                </div>
                <div class="mb-5 mt-1 text-sm font-medium">
                  <p class="mt-2 text-gray-700 dark:text-gray-400">Meatle Heath Club</p>
                  <div class="flex items-center mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <p class="px-2 text-gray-700 dark:text-gray-400">16.9k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src="assets/images/event-3.jpg" alt="" />
              </div>
              <div class="float-right text-gray-900 mt-[-2px] p-2 mr-3 ml-1 rounded-full border">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              </div>
              <div class="p-4">
                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dance and Flex Festival - Birminggham - 2023</h5>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-red-500 dark:text-gray-400">Sat, Feb 18, 2023, 11:00</div>
                </div>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">The Stadium Stand . Birmingham</div>
                </div>
                <div class="mb-5 mt-1 text-sm font-medium">
                  <p class="mt-2 text-gray-700 dark:text-gray-400">Meatle Heath Club</p>
                  <div class="flex items-center mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <p class="px-2 text-gray-700 dark:text-gray-400">16.9k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src="assets/images/event-5.jpg" alt="" />
              </div>
              <div class="float-right text-gray-900 mt-[-2px] p-2 mr-3 ml-1 rounded-full border">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              </div>
              <div class="p-4">
                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dance and Flex Festival - Birminggham - 2023</h5>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-red-500 dark:text-gray-400">Sat, Feb 18, 2023, 11:00</div>
                </div>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">The Stadium Stand . Birmingham</div>
                </div>
                <div class="mb-5 mt-1 text-sm font-medium">
                  <p class="mt-2 text-gray-700 dark:text-gray-400">Meatle Heath Club</p>
                  <div class="flex items-center mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <p class="px-2 text-gray-700 dark:text-gray-400">16.9k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src="assets/images/event-6.jpg" alt="" />
              </div>
              <div class="float-right text-gray-900 mt-[-2px] p-2 mr-3 ml-1 rounded-full border">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              </div>
              <div class="p-4">
                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dance and Flex Festival - Birminggham - 2023</h5>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-red-500 dark:text-gray-400">Sat, Feb 18, 2023, 11:00</div>
                </div>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">The Stadium Stand . Birmingham</div>
                </div>
                <div class="mb-5 mt-1 text-sm font-medium">
                  <p class="mt-2 text-gray-700 dark:text-gray-400">Meatle Heath Club</p>
                  <div class="flex items-center mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <p class="px-2 text-gray-700 dark:text-gray-400">16.9k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src="assets/images/event-7.jpg" alt="" />
              </div>
              <div class="float-right text-gray-900 mt-[-2px] p-2 mr-3 ml-1 rounded-full border">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              </div>
              <div class="p-4">
                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dance and Flex Festival - Birminggham - 2023</h5>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-red-500 dark:text-gray-400">Sat, Feb 18, 2023, 11:00</div>
                </div>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">The Stadium Stand . Birmingham</div>
                </div>
                <div class="mb-5 mt-1 text-sm font-medium">
                  <p class="mt-2 text-gray-700 dark:text-gray-400">Meatle Heath Club</p>
                  <div class="flex items-center mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <p class="px-2 text-gray-700 dark:text-gray-400">16.9k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src="assets/images/event-1.jpg" alt="" />
              </div>
              <div class="float-right text-gray-900 mt-[-2px] p-2 mr-3 ml-1 rounded-full border">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              </div>
              <div class="p-4">
                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dance and Flex Festival - Birminggham - 2023</h5>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-red-500 dark:text-gray-400">Sat, Feb 18, 2023, 11:00</div>
                </div>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">The Stadium Stand . Birmingham</div>
                </div>
                <div class="mb-5 mt-1 text-sm font-medium">
                  <p class="mt-2 text-gray-700 dark:text-gray-400">Meatle Heath Club</p>
                  <div class="flex items-center mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <p class="px-2 text-gray-700 dark:text-gray-400">16.9k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src="assets/images/event-2.jpg" alt="" />
              </div>
              <div class="float-right text-gray-900 mt-[-2px] p-2 mr-3 ml-1 rounded-full border">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              </div>
              <div class="p-4">
                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Dance and Flex Festival - Birminggham - 2023</h5>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-red-500 dark:text-gray-400">Sat, Feb 18, 2023, 11:00</div>
                </div>
                <div class="mt-2 flex font-medium dark:text-white">
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">The Stadium Stand . Birmingham</div>
                </div>
                <div class="mb-5 mt-1 text-sm font-medium">
                  <p class="mt-2 text-gray-700 dark:text-gray-400">Meatle Heath Club</p>
                  <div class="flex items-center mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <p class="px-2 text-gray-700 dark:text-gray-400">16.9k followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending