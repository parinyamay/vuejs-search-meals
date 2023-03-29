<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarLayout.vue'
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <Navbar />

    <main class="max-w-[1200px] mx-auto">
      <RouterView />
    </main>
  </div>
</template>
