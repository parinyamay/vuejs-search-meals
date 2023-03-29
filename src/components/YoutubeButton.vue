<script lang="ts" setup>
const props = defineProps({
  href: { type: String as any, required: true },
})
</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    class="px-3 py-1 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
  >
    <slot></slot>
  </a>
</template>
