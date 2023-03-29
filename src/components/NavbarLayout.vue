<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5"> Home </router-link>

    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'Ingredients' }"
        class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100"
      >
        Meals By ingredients
      </router-link>
    </div>
  </header>
</template>
