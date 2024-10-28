<template>
    <div>
        <h3 class="my-6">Product Lists</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-12">
            <ProductCard v-for="p in products" :key="p.id" :product="p" />
        </div>
    </div>
</template>

<script setup>
    definePageMeta({ layout: 'default' })
    const { data: products } = useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>