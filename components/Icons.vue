<template>
    <div>
        <svg
            v-if="name === 'caret-left'"
            aria-hidden="true"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 26L10 16L20 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-else-if="name === 'caret-right'"
            aria-hidden="true"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 6L22 16L12 26"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </div>
</template>

<script setup lang="ts">
type IconsProps = {
	name: 'caret-left'
		| 'caret-right'
}
defineProps<IconsProps>();
</script>

<style lang="scss" scoped>

</style>