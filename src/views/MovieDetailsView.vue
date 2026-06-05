<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import AppFooter from "@/components/layout/AppFooter.vue";
import FilterSortPanel from "@/components/movies/FilterSortPanel.vue";
import MovieGrid from "@/components/movies/MovieGrid.vue";
import MovieHero from "@/components/movies/MovieHero.vue";
import { getMovieById, mockMovies } from "@/data/mockMovies";
import type { MovieGenre, SortOption } from "@/types/movie";

const props = defineProps<{
  id: string;
}>();

const movie = computed(() => getMovieById(props.id));
const activeGenre = ref<MovieGenre>("ALL");
const sortBy = ref<SortOption>("RELEASE DATE");

const filteredMovies = computed(() => {
  let movies = mockMovies.filter((m) => {
    return activeGenre.value === "ALL" || m.genres.includes(activeGenre.value);
  });

  movies = [...movies].sort((a, b) => {
    if (sortBy.value === "TITLE") {
      return a.title.localeCompare(b.title);
    }

    return b.year - a.year;
  });

  return movies;
});
</script>

<template>
  <div v-if="movie" class="movie-details-view">
    <MovieHero :movie="movie" />

    <div class="movie-details-view__body container">
      <FilterSortPanel
        v-model:active-genre="activeGenre"
        v-model:sort-by="sortBy"
      />

      <p class="movie-details-view__count">
        <span class="movie-details-view__count-number">{{
          filteredMovies.length
        }}</span>
        movies found
      </p>

      <MovieGrid :movies="filteredMovies" />
    </div>

    <AppFooter />
  </div>

  <div v-else class="movie-details-view movie-details-view--missing">
    <div class="container movie-details-view__missing-content">
      <p class="movie-details-view__missing-code">404</p>
      <h1 class="movie-details-view__missing-title">Movie not found</h1>
      <p class="movie-details-view__missing-text">
        The movie you are looking for does not exist.
      </p>
      <RouterLink class="movie-details-view__missing-link" to="/"
        >Back to home</RouterLink
      >
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.movie-details-view {
  min-height: 100vh;
  background-color: $color-bg-page;

  &__body {
    padding-block: $space-4 $space-10;
  }

  &__count {
    margin-top: $space-6;
    font-size: $font-size-lg;
    font-weight: $font-weight-regular;
  }

  &__count-number {
    font-weight: $font-weight-semibold;
  }

  &--missing {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  &__missing-content {
    flex: 1;
    display: grid;
    place-items: center;
    padding-block: $space-16;
    text-align: center;
  }

  &__missing-code {
    margin-bottom: $space-4;
    font-size: clamp(4rem, 20vw, $font-size-3xl);
    font-weight: $font-weight-bold;
    line-height: $line-height-tight;
    color: $color-primary;
  }

  &__missing-title {
    margin-bottom: $space-4;
    font-size: $font-size-2xl;
    font-weight: $font-weight-light;
    text-transform: uppercase;
  }

  &__missing-text {
    margin-bottom: $space-8;
    color: $color-text-muted;
  }

  &__missing-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 233px;
    min-height: 57px;
    padding-inline: $space-6;
    border-radius: $radius-sm;
    font-size: $font-size-lg;
    font-weight: $font-weight-medium;
    text-transform: uppercase;
    color: $color-text-primary;
    background-color: $color-primary;
    @include hover-opacity;
  }
}
</style>
