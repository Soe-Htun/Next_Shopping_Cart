<template>
    <div class="mt-6">
        <h3>Product Details {{ product.title}}</h3>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })
</script>

<style lang="scss" scoped>

</style>