<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMealsStore } from '@/stores/meals'
import MealsIngredient from '@/components/MealsIngredient.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const route = useRoute()
const store = useMealsStore()
const meals = computed(() => store.getMeals)

onMounted(() => {
  store.searchMealsByIngredients(route.params.ingredient)
})
</script>

<template>
  <LoadingSpinner />
  <MealsIngredient :meals="meals" />
</template>
