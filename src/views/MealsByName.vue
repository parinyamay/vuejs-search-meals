<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useMealsStore } from '@/stores/meals'
import { useRoute } from 'vue-router'
import MealItem from '@/components/MealItem.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const route = useRoute()
const store = useMealsStore()
const keyword = ref<string | string[]>('')
const meals = computed(() => store.getMeals)

function searchMeals() {
  store.searchMeals(keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name

  if (keyword.value) {
    store.searchMeals(keyword.value)
  }
})
</script>

<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <!-- <pre>{{ meals }}</pre> -->

  <LoadingSpinner />
  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
