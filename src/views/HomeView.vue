<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMealsStore } from '@/stores/meals'
import axiosClient from '@/axiosClient'
import MealItem from '../components/MealItem.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const store = useMealsStore()
const ingredients = ref<any[]>([])

onMounted(async () => {
  store.showLoading()
  for (let i = 0; i < 10; i++) {
    const response = await axiosClient.get('random.php')
    ingredients.value.push(response.data.meals)
  }

  console.log(ingredients.value.length)
  if (ingredients.value.length === 10) store.hideLoading()
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Random food for you</h1>
    <div v-if="ingredients.length === 10" class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
      <MealItem v-for="ingredient in ingredients" :key="ingredient.idMeal" :meal="ingredient[0]" />
    </div>
    <LoadingSpinner />
  </div>
</template>
