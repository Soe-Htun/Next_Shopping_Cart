<template>
    <div>
        <h3 class="my-6">Product Lists</h3>
        <p v-if="pending">Loading</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
            <ProductCard v-for="p in products" :key="p.id" :product="p" />
        </div>
        <Pagination
			class="my-8 justify-start"
			:total="totalRecords"
            :page="page"
            :page-size="pageSize"
            @update:page="fetchProducts"
            @update:pageSize="fetchProducts"
		/>
    </div>
</template>

<script setup>
    definePageMeta({ layout: 'default' })
   
    const page = ref(1);
    const pageSize = ref(10);
    const products = ref([])
    const totalRecords = ref(20)

    const fetchProducts = ()=> {
        const { data, pending, error } = useFetch('https://fakestoreapi.com/products', {
            params: {
                limit: pageSize.value,
                skip: (page.value - 1) * pageSize.value,
            }
        })
        if (!error.value) {
            products.value = data.value || [];
        }
    }

    // const { data: products, pending } = useFetch('/api/products')
    watch([page, pageSize], fetchProducts, { immediate: true });

</script>

<style lang="scss" scoped>

</style>