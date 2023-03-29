<script setup lang="ts">
import axiosClient from '@/axiosClient'
import YoutubeButton from '@/components/YoutubeButton.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const meal = ref<any>({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {}
  })
  // lookup.php?i=52772
})
</script>

<template>
  <div class="p-8 max-w-[800px] mx-auto">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-xl mx-auto mb-8 shadow" />

    <div class="grid grid-cols-1 md:grid-cols-3 mb-3">
      <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      <p>
        {{ meal.strInstructions }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="mb-3">
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(ele, idx) of new Array(20)" :key="idx">
            <li v-if="meal[`strIngredient${idx + 1}`]">{{ idx + 1 }}. {{ meal[`strIngredient${idx + 1}`] }}</li>
          </template>
        </ul>
      </div>

      <div class="mb-3">
        <h2 class="text-2xl font-semibold mb-2">Measure</h2>
        <ul>
          <template v-for="(ele, idx) of new Array(20)" :key="idx">
            <li v-if="meal[`strMeasure${idx + 1}`]">{{ idx + 1 }}. {{ meal[`strMeasure${idx + 1}`] }}</li>
          </template>
        </ul>
      </div>

      <div class="mt-4">
        <YoutubeButton :href="meal.strYoutube || ''">Go to Youtube</YoutubeButton>
        <a
          target="_blank"
          :href="meal.strSource || ''"
          class="ml-3 px-3 py-1 rounded border-2 border-transparent text-indigo-600 hover:text-white hover:bg-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>
