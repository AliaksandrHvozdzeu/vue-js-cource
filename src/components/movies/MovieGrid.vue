<script setup lang="ts">
import MovieCard from "@/components/movies/MovieCard.vue";
import type { Movie } from "@/types/movie";

defineProps<{
  movies: Movie[];
}>();
</script>

<template>
  <div class="movie-grid">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<style lang="scss" scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: $space-8 $space-6;
  margin-top: $space-6;

  @include at-lg {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include at-sm {
    grid-template-columns: 1fr;
  }
}
</style>
