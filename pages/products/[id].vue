<template>
    <div class="mt-6">
       <div class="my-3">
            <NuxtLink to="/products">
                <div class="flex">
                    <Icons
                        name="caret-left"
                        class="flex items-center text-[#1e1d1d] h-6 w-6"
                    />
                    <span class="ml-2">Back</span>
                </div> 
            </NuxtLink>
       </div>
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