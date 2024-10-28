<template>
    <div class="m-3">
        <header class="shadow-sm bg-white">
            <nav class="flex justify-between items-center">
                <NuxtLink to="/">Shopping Cart</NuxtLink>
                <ul class="mt-4 mr-6 flex gap-3 items-center">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>