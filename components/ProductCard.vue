<template>
    <div class="card text-center flex flex-col gap-y-4">
        <div>
            <img :src="product.image" alt="product thumb" class="thumb">
            <p class="font-bold my-4 text-gray-500 truncate"> {{ product.title }} </p>
            <p class="text-xl "> Price - ${{ product.price }} </p>
        </div>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn mt-3">View Details</p>
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