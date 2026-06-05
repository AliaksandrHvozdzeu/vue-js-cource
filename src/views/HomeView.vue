<script setup lang="ts">
import { computed, ref, watch } from "vue";
import HeroHeader from "@/components/layout/HeroHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import FilterSortPanel from "@/components/movies/FilterSortPanel.vue";
import MovieGrid from "@/components/movies/MovieGrid.vue";
import { mockMovies } from "@/data/mockMovies";
import { useSearchQuery } from "@/composables/usePagination";
import type { MovieGenre, SortOption } from "@/types/movie";

const { searchQuery, setSearchQuery } = useSearchQuery();

const searchInput = ref(searchQuery.value);
const activeGenre = ref<MovieGenre>("ALL");
const sortBy = ref<SortOption>("RELEASE DATE");

watch(searchQuery, (value) => {
  searchInput.value = value;
});

const filteredMovies = computed(() => {
  let movies = mockMovies.filter((movie) => {
    const matchesGenre =
      activeGenre.value === "ALL" || movie.genres.includes(activeGenre.value);
    const matchesQuery =
      !searchQuery.value ||
      movie.title.toLowerCase().includes(searchQuery.value.toLowerCase());

    return matchesGenre && matchesQuery;
  });

  movies = [...movies].sort((a, b) => {
    if (sortBy.value === "TITLE") {
      return a.title.localeCompare(b.title);
    }

    return b.year - a.year;
  });

  return movies;
});

const handleSearchSubmit = (value: string) => {
  setSearchQuery(value);
};
</script>

<template>
  <div class="home-view">
    <HeroHeader
      v-model:search-value="searchInput"
      @search="handleSearchSubmit"
    />

    <div class="home-view__body container">
      <FilterSortPanel
        v-model:active-genre="activeGenre"
        v-model:sort-by="sortBy"
      />

      <p class="home-view__count">
        <span class="home-view__count-number">{{ filteredMovies.length }}</span>
        movies found
      </p>

      <MovieGrid :movies="filteredMovies" />
    </div>

    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  min-height: 100vh;
  background-color: $color-bg-page;

  &__body {
    padding-block: $space-4 $space-10;
  }

  &__count {
    margin-top: $space-6;
    font-size: $font-size-lg;
    font-weight: $font-weight-regular;
    color: $color-text-primary;
  }

  &__count-number {
    font-weight: $font-weight-semibold;
  }
}
</style>
