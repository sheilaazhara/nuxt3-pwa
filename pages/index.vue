<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <BaseContainer>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
      Our Products
    </h2>
    <div class="mt-6 grid gap-y-6 gap-x-6 grid-cols-2">
      <div
        v-for="product in products"
        :key="product.id"
        class="group relative border rounded-md p-2"
      >
        <div class="overflow-hidden rounded-md group-hover:opacity-75">
          <img
            :src="product.image"
            :alt="product.title"
            class="h-32 w-32 object-cover object-center mx-auto"
          />
        </div>
        <h3 class="mt-1 text-sm font-medium text-gray-900">
          <a :href="product.href">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.title }}
          </a>
        </h3>
        <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
        <p class="text-sm text-gray-500">{{ product.category }}</p>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

// fetch product
const { data: products } = await useFetch(`https://fakestoreapi.com/products`);
</script>
