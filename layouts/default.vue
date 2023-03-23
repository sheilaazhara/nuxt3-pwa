<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <VitePwaManifest />
  <main class="max-w-lg min-h-screen mx-auto shadow-md">
    <slot />
  </main>
</template>

<script setup>
const title = ref('Nuxt PWA')
const description = ref('Nuxt 3 PWA')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>
