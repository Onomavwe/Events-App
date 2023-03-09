import React from 'react'

const Hero = () => {
  return (
    <section class="bg-[url(/src/assets/images/events-bg.jpg)] bg-no-repeat bg-cover bg-center bg-gray-300 bg-blend-multiply">
      <div class="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 xl:px-0 z-1">
        <div class="mb-6 max-w-screen-md lg:mb-0">
          <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">Special events</h1>
          <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">for you</h1>
          <p class="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">Search events that suit your needs and interests</p>
          <a
            href="#"
            class="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-md bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Find your next event
          </a>
        </div>
      </div>
      <form action="#" class="grid gap-y-4 p-4 mt-8 w-md bg-white rounded lg:gap-x-4 lg:grid-cols-9 lg:mt-12 dark:bg-gray-800">
        <div class="lg:col-span-3">
          <label for="location-form" class="sr-only">
            Location
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              id="location-form"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search events"></input>
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
          </div>
        </div>
        <button
          type="submit"
          class="lg:col-span-2 justify-center md:w-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center">
          <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"></path>
          </svg>
          Search
        </button>
      </form>
    </section>
  );
}

export default Hero