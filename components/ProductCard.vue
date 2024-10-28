<template>
    <div class="card text-center">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold m-4 text-gray-500 truncate"> {{ product.title }} </p>
        <p class="text-xl my-7"> Price - ${{ product.price }} </p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    defineProps(["product"])
</script>

<style scoped>
.thumb {
    max-width: 70%;
    max-height: 120px;
    margin: 0 auto;
}
</style>