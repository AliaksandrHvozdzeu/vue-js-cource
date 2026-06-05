<script setup lang="ts">
defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  change: [page: number];
}>();
</script>

<template>
  <nav v-if="totalPages > 1" class="pagination" aria-label="Pagination">
    <button
      class="pagination__button"
      type="button"
      :disabled="currentPage <= 1"
      @click="emit('change', currentPage - 1)"
    >
      Previous
    </button>

    <span class="pagination__status">{{ currentPage }} / {{ totalPages }}</span>

    <button
      class="pagination__button"
      type="button"
      :disabled="currentPage >= totalPages"
      @click="emit('change', currentPage + 1)"
    >
      Next
    </button>
  </nav>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $space-4;
  margin-top: $space-10;

  &__button {
    min-height: 40px;
    padding-inline: $space-5;
    border: 1px solid $color-border-year;
    border-radius: $radius-sm;
    color: $color-text-primary;
    background: transparent;
    cursor: pointer;
    transition:
      border-color $transition-base,
      color $transition-base;

    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      border-color: $color-primary;
      color: $color-primary;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__status {
    min-width: 72px;
    text-align: center;
    font-size: $font-size-sm;
    color: $color-text-secondary;
  }
}
</style>
