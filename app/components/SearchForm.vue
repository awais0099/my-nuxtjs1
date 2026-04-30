<script lang="ts" setup>
const searchQuery = ref<string>("");

const error = ref<string>("");

const emit = defineEmits<{
  (e: "submit-search", query: string): void;
}>();

const props = defineProps({
  maxLength: {
    type: Number,
    default: 2,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  debounceDelay: {
    type: Number,
    default: 500,
  },
});

const isValid = computed<boolean>(() => {
  return searchQuery.value.length >= props.maxLength;
});

function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  if (!isValid.value) {
    alert(`Search query must be at least ${props.maxLength} characters long.`);
    return;
  }

  emit("submit-search", searchQuery.value);
}
</script>

<template>
  <form @submit="handleSubmit" method="get" role="search" class="w-full">
    <div class="flex w-full items-center">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <input
          id="search"
          type="text"
          v-model="searchQuery"
          name="searchQuery"
          placeholder="Search"
          :disabled="props.isLoading"
          class="flex-1 rounded-l-md border-2 border-gray-300 px-3 py-2 focus-visible:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <button
        type="submit"
        :disabled="props.isLoading"
        :aria-label="
          props.isLoading ? 'Searching, please wait' : 'Submit search'
        "
        class="cursor-pointer rounded-r-md bg-black px-4 py-[10px] shadow-lg hover:bg-gray-800 active:scale-95 dark:bg-gray-100 dark:hover:bg-gray-300"
      >
        <font-awesome
          v-if="!props.isLoading"
          icon="magnifying-glass"
          aria-hidden="true"
          class="text-base font-bold text-white dark:text-black"
        />

        <font-awesome
          v-else
          icon="spinner"
          aria-hidden="true"
          class="animate-spin text-base font-bold text-white dark:text-black"
        />
      </button>
    </div>
  </form>
</template>
