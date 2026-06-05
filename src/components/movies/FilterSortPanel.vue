<script setup lang="ts">
import FilterBar from "@/components/movies/FilterBar.vue";
import SortSelect from "@/components/movies/SortSelect.vue";
import type { MovieGenre, SortOption } from "@/types/movie";

const activeGenre = defineModel<MovieGenre>("activeGenre", { default: "ALL" });
const sortBy = defineModel<SortOption>("sortBy", { default: "RELEASE DATE" });
</script>

<template>
  <section class="filter-sort-panel">
    <div class="filter-sort-panel__row">
      <FilterBar v-model="activeGenre" />
      <SortSelect v-model="sortBy" />
    </div>
    <div class="filter-sort-panel__divider" aria-hidden="true" />
  </section>
</template>

<style lang="scss" scoped>
.filter-sort-panel {
  padding-top: $space-4;

  &__row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: $space-6;
    flex-wrap: wrap;
  }

  &__divider {
    height: 2px;
    margin-top: $space-1;
    background-color: $color-bg-bar;
  }
}
</style>
