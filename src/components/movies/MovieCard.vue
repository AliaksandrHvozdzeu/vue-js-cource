<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import type { Movie } from "@/types/movie";

defineProps<{
  movie: Movie;
}>();

const isMenuOpen = ref(false);
</script>

<template>
  <article class="movie-card" @mouseleave="isMenuOpen = false">
    <RouterLink class="movie-card__poster-link" :to="`/movie/${movie.id}`">
      <img
        class="movie-card__poster"
        :src="movie.posterUrl"
        :alt="movie.title"
        loading="lazy"
      />
    </RouterLink>

    <div class="movie-card__menu">
      <button
        class="movie-card__menu-button"
        type="button"
        aria-label="Movie actions"
        @click.stop="isMenuOpen = !isMenuOpen"
      >
        <span /><span /><span />
      </button>

      <div v-if="isMenuOpen" class="movie-card__menu-dropdown">
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </div>

    <div class="movie-card__info">
      <RouterLink class="movie-card__title" :to="`/movie/${movie.id}`">
        {{ movie.title }}
      </RouterLink>
      <span class="movie-card__year">{{ movie.year }}</span>
    </div>

    <p class="movie-card__genre">{{ movie.genre }}</p>
  </article>
</template>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover &__menu-button,
  &__menu-button:focus-visible {
    opacity: 1;
  }

  &__poster-link {
    display: block;
    aspect-ratio: 322 / 455;
    overflow: hidden;
    background-color: $color-bg-card;
  }

  &__poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__menu {
    position: absolute;
    top: $space-3;
    right: $space-3;
  }

  &__menu-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 1px solid $color-border-menu;
    border-radius: 50%;
    background-color: rgba($color-bg-page, 0.8);
    cursor: pointer;
    opacity: 0;
    transition: opacity $transition-base;

    span {
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: $color-text-primary;
    }
  }

  &__menu-dropdown {
    position: absolute;
    top: calc(100% + $space-2);
    right: 0;
    min-width: 120px;
    padding: $space-2;
    border-radius: $radius-sm;
    background-color: $color-bg-bar;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);

    button {
      display: block;
      width: 100%;
      padding: $space-2 $space-3;
      border: 0;
      text-align: left;
      color: $color-text-primary;
      background: transparent;
      cursor: pointer;

      &:hover,
      &:focus-visible {
        color: $color-primary;
      }
    }
  }

  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: $space-3;
    margin-top: $space-5;
  }

  &__title {
    flex: 1;
    font-size: $font-size-md;
    font-weight: $font-weight-medium;
    color: $color-text-secondary;
    transition: color $transition-base;

    &:hover,
    &:focus-visible {
      color: $color-text-primary;
    }
  }

  &__year {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 66px;
    height: 26px;
    padding-inline: $space-2;
    border: 1px solid $color-border-year;
    border-radius: $radius-sm;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    color: $color-text-secondary;
    opacity: 0.7;
  }

  &__genre {
    margin-top: $space-2;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    color: $color-text-muted;
  }
}
</style>
