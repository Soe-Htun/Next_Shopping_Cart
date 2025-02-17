<template>
    <div>
        <h3 class="my-6">Currency Lists</h3>
        {{ currency }}
    </div>
</template>

<script setup>
const { data: currency } = await useFetch('/api/currency/GBP')
</script>

<style lang="scss" scoped>

</style>