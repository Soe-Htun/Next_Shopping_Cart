<script lang="ts">
/**
 * ## Doc
 *
 * Pagination that renders the hyperlink instead of buttons. Existing search
 * parameters from the URL are preserved, and it adds `page` and `page_size`
 * search parameters to make the URLs shareable.
 *
 * ### Usage
 *
 * #### Script
 *
 * ```js
 * const total = ref(1000);
 * ```
 *
 * #### Template
 *
 * ```html
 * <CPagination :total="total" :page-size="20" />
 * ```
 */
</script>

<script setup lang="ts">
const props = defineProps({
	/**
	 * current page
	 *
	 * @default 1
	 */
	page: {
		type: Number,
		default: 1,
	},
	/**
	 * page size
	 *
	 * @default 10
	 */
	pageSize: {
		type: Number,
		default: 10,
	},
	/**
	 * total number of records
	 */
	total: {
		type: Number,
		default: 10,
	},
});

const emit = defineEmits<{
	(event: 'update:pageSize', pageSize: number): void;
	(event: 'update:page', page: number): void;
}>();

const route = useRoute()

const page = toRef(() => +(route.query.page || props.page));
const limit = toRef(() => +(route.query.page_size || props.pageSize));

const totalPages = computed(() => {
	return Math.max(1, Math.ceil(props.total / props.pageSize));
});

const pages = computed(() => {
	const length = 7;

	if (totalPages.value <= length) {
		return Array.from({ length: totalPages.value }, (_, i) => i + 1);
	}

	return Array.from({ length }, (_, i) => {
		// '...' on the right side
		if (page.value < length - 2) {
			if (i === length - 2) {
				return '...';
			} else if (i === length - 1) {
				return totalPages.value;
			}
			return i + 1;
		}
		// '...' on the left side
		// + 1 here since we are comparing with index from `length`
		else if (totalPages.value - page.value + 1 < length - 2) {
			if (i === 0) {
				return 1;
			} else if (i === 1) {
				return '...';
			}
			return totalPages.value - length + i + 1;
		}
		// '...' on both sides
		else if (i === 0) {
			return 1;
		} else if (i === 1 || i === length - 2) {
			return '...';
		} else if (i === length - 1) {
			return totalPages.value;
		}
		// 2 division and floor operation to have same pagination amounts on each side
		return i + page.value - Math.floor(length / 2);
	});
});

watch(
	[() => route.query.page, () => route.query.page_size],
	([newPage, newPageSize], [oldPage, oldPageSize]) => {
		if (newPage !== oldPage) {
			emit('update:page', newPage ? +newPage : 1);
		}
		if (newPage !== oldPageSize) {
			emit('update:pageSize', newPageSize ? +newPageSize : 10);
		}
	},
);
</script>

<template>
	<nav
		v-if="totalPages > 1"
		class="flex items-center h-[40px] gap-x-1 justify-end"
		aria-label="pagination"
	>
		<div
			v-if="page === 1"
			class="cursor-not-allowed p-1"
		>
			<Icons
				name="caret-left"
				class="flex items-center text-[#aaaaaa] h-6 w-6"
			/>
		</div>
		<NuxtLink
			v-else
			class="rounded p-1 hover:bg-[#f78e33]]"
			:to="{
				query: {
					...route.query,
					page: page - 1,
					page_size: limit,
				},
			}"
		>
			<Icons
				name="caret-left"
				class="flex items-center text-[#aaaaaa] h-6 w-6"
			/>
			<span class="sr-only">Previous Page</span>
		</NuxtLink>

		<ol class="no-scrollbar flex items-center gap-x-1 overflow-x-auto">
			<template
				v-for="(p, i) of pages"
				:key="i"
			>
				<li
					v-if="typeof p === 'number'"
					class="h-full w-full"
				>
					<NuxtLink
						:to="{ query: { ...route.query, page: p, page_size: limit } }"
						class="flex items-center justify-center rounded px-2 py-0 hover:bg-[#f78e33]]"
						:class="{ 'active bg-[#f9b322]': page === p }"
					>
						<span class="sr-only">Page </span>{{ p }}
					</NuxtLink>
				</li>
				<li
					v-else
					class="h-full w-full"
				>
					<NuxtLink
						:to="{
							query: {
								...route.query,
								page: i === 1 ? 2 : totalPages - 1,
								page_size: limit,
							},
						}"
						:aria-label="`Skip to page ${i === 1 ? 2 : totalPages - 1}`"
						class="flex items-center justify-center rounded px-2 py-0 hover:bg-[#f78e33]]"
					>
						{{ p }}
					</NuxtLink>
				</li>
			</template>
		</ol>

		<div
			v-if="page === totalPages"
			class="cursor-not-allowed p-1"
		>
			<Icons
				name="caret-right"
				class="flex items-center text-[#aaaaaa] h-6 w-6"
			/>
			<span
				class="sr-only"
				aria-disabled="true"
				>Next Page</span
			>
		</div>
		<NuxtLink
			v-else
			class="rounded p-1 hover:bg-[#f78e33]]"
			:to="{
				query: {
					...route.query,
					page: page + 1,
					page_size: limit,
				},
			}"
		>
			<Icons
				name="caret-right"
				class="flex items-center text-[#aaaaaa] h-6 w-6"
			/>
			<span class="sr-only">Next Page</span>
		</NuxtLink>
	</nav>
</template>
