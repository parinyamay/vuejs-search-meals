<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue'
import { alphabet } from '@/types/alphabet'
import { useMealsStore } from '@/stores/meals'
import { useRoute } from 'vue-router'
import MealItem from '@/components/MealItem.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const route = useRoute()
const store = useMealsStore()
const meals = computed(() => store.getMeals)

watch(route, () => {
  if (route.name === 'byLetter') {
    console.log('Call from watch hook', route.params.letter)
    store.searchMealsByLetter(route.params.letter)
    store.showLoading()
  }
})

onMounted(() => {
  store.searchMealsByLetter(route.params.letter)
})
</script>

<template>
  <div class="flex justify-center gap-1 mt-4">
    <router-link v-for="(letter, index) of alphabet" :key="index" :to="{ name: 'byLetter', params: { letter } }">
      {{ letter }}
    </router-link>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <LoadingSpinner />
</template>
