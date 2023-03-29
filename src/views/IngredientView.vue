<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useMealsStore } from '@/stores/meals'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import axiosClient from '../axiosClient'

const store = useMealsStore()
const ingredients = ref<any[]>([])

onMounted(() => {
  store.showLoading()
  axiosClient.get('list.php?i=list').then(({ data }) => {
    ingredients.value = data.meals
    store.hideLoading()
  })
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <LoadingSpinner />
    <router-link
      v-for="ingredient of ingredients"
      :key="ingredient.idIngredient"
      :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p v-if="ingredient.strDescription">{{ ingredient.strDescription.slice(0, 250) + '...' }}</p>
    </router-link>
  </div>
</template>
