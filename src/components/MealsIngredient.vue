<script lang="ts" setup>
import MealItem from '../components/MealItem.vue'
const props = defineProps({
  meals: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3 p-8">
    <MealItem v-for="meal in props.meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!props.meals.length" class="flex justify-center text-gray-600">There are no meals</div>
</template>
