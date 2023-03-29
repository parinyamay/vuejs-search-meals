<script lang="ts" setup>
import YoutubeButton from '@/components/YoutubeButton.vue'

const props = defineProps({
  meal: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white shadow rounded-xl transition-all hover:scale-105 hover:shadow-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: props.meal.idMeal } }">
      <img :src="props.meal.strMealThumb" :alt="props.meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ props.meal.strMeal }}</h3>
      <p v-if="props.meal.strInstructions" class="mb-4">
        {{ props.meal.strInstructions.slice(0, 200) + '...' }}
      </p>

      <div v-if="props.meal.strYoutube" class="flex items-center justify-between">
        <YoutubeButton :href="props.meal.strYoutube">Youtube</YoutubeButton>
      </div>
    </div>
  </div>
</template>
