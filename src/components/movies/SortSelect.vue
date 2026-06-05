<script setup lang="ts">
import type { SortOption } from "@/types/movie";

const sortOptions: SortOption[] = ["RELEASE DATE", "TITLE"];

const sortBy = defineModel<SortOption>({ default: "RELEASE DATE" });
</script>

<template>
  <div class="sort-select">
    <span class="sort-select__label">Sort by</span>
    <label class="visually-hidden" for="sort-by">Sort movies by</label>
    <select id="sort-by" v-model="sortBy" class="sort-select__control">
      <option v-for="option in sortOptions" :key="option" :value="option">
        {{ option.toLowerCase() }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.sort-select {
  display: flex;
  align-items: center;
  gap: $space-3;
  margin-left: auto;

  &__label {
    @include uppercase-label;
    font-weight: $font-weight-regular;
    color: $color-text-sort-label;
    white-space: nowrap;
  }

  &__control {
    min-width: 135px;
    padding: 0 $space-6 0 0;
    border: 0;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    letter-spacing: $letter-spacing-sort;
    text-transform: uppercase;
    color: $color-text-primary;
    background: transparent
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath fill='%23F65261' d='M6 7 0 0h12z'/%3E%3C/svg%3E")
      no-repeat right center;
    appearance: none;
    cursor: pointer;

    &:focus-visible {
      @include focus-ring;
    }
  }
}
</style>
