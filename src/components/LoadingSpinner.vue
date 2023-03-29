<script lang="ts" setup>
import { computed } from 'vue'
import { useMealsStore } from '../stores/meals'

const store = useMealsStore()
const isLoad = computed(() => store.isLoading)
</script>

<template>
  <div>
    <div v-if="isLoad" class="flex justify-center">
      <div class="w-12 h-12 rounded-full animate-spin border-4 border-solid border-gray-600 border-t-transparent" />
    </div>
  </div>
</template>
