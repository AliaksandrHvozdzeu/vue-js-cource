<script setup lang="ts">
import type { MovieGenre } from "@/types/movie";

const genres: MovieGenre[] = [
  "ALL",
  "DOCUMENTARY",
  "COMEDY",
  "HORROR",
  "CRIME",
];

const activeGenre = defineModel<MovieGenre>({ default: "ALL" });
</script>

<template>
  <div class="filter-bar">
    <div class="filter-bar__tabs" role="tablist" aria-label="Filter by genre">
      <button
        v-for="genre in genres"
        :key="genre"
        class="filter-bar__tab"
        :class="{ 'filter-bar__tab--active': activeGenre === genre }"
        type="button"
        role="tab"
        :aria-selected="activeGenre === genre"
        @click="activeGenre = genre"
      >
        {{ genre.toLowerCase() }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-bar {
  &__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: $space-6;

    @include at-md {
      gap: $space-4;
    }
  }

  &__tab {
    position: relative;
    padding: 0 0 $space-3;
    border: 0;
    background: transparent;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    text-transform: uppercase;
    color: $color-text-primary;
    cursor: pointer;
    transition: color $transition-base;

    &:hover,
    &:focus-visible {
      color: $color-primary;
    }

    &--active::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 35px;
      height: 4px;
      background-color: $color-primary;
    }
  }
}
</style>
