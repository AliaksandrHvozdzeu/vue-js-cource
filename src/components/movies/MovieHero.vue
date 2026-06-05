<script setup lang="ts">
import { RouterLink } from "vue-router";
import AppLogo from "@/components/common/AppLogo.vue";
import type { Movie } from "@/types/movie";

defineProps<{
  movie: Movie;
}>();
</script>

<template>
  <header class="movie-hero">
    <div class="movie-hero__top container">
      <RouterLink class="movie-hero__logo-link" to="/">
        <AppLogo variant="header-light" />
      </RouterLink>

      <RouterLink
        class="movie-hero__search-link"
        to="/"
        aria-label="Back to search"
      >
        <svg width="21" height="21" viewBox="0 0 21 21" aria-hidden="true">
          <circle
            cx="9"
            cy="9"
            r="7.5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          />
          <line
            x1="14.5"
            y1="14.5"
            x2="19"
            y2="19"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </RouterLink>
    </div>

    <div class="movie-hero__headline container">
      <h1 class="movie-hero__title">{{ movie.title }}</h1>
      <div v-if="movie.rating" class="movie-hero__rating">
        {{ movie.rating }}
      </div>
    </div>

    <div class="movie-hero__body container">
      <img
        class="movie-hero__poster"
        :src="movie.posterUrl"
        :alt="movie.title"
      />

      <div class="movie-hero__details">
        <p class="movie-hero__genre">{{ movie.genre }}</p>

        <div class="movie-hero__meta">
          <span>{{ movie.year }}</span>
          <span v-if="movie.runtime">{{ movie.runtime }}</span>
        </div>

        <p v-if="movie.description" class="movie-hero__description">
          {{ movie.description }}
        </p>
      </div>
    </div>

    <div class="movie-hero__divider" aria-hidden="true" />
  </header>
</template>

<style lang="scss" scoped>
.movie-hero {
  padding-top: $space-5;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $space-6;
  }

  &__logo-link {
    display: inline-flex;
  }

  &__search-link {
    display: inline-flex;
    color: $color-primary;
    @include hover-opacity(0.8);
  }

  &__headline {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin-bottom: $space-6;
  }

  &__title {
    font-size: clamp(1.75rem, 4vw, $font-size-2xl);
    font-weight: $font-weight-light;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    text-align: center;
  }

  &__rating {
    position: absolute;
    right: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    height: 60px;
    border: 1px solid $color-text-primary;
    border-radius: 50%;
    font-size: $font-size-lg;
    font-weight: $font-weight-light;
    text-transform: uppercase;
  }

  &__body {
    display: grid;
    grid-template-columns: minmax(200px, 323px) 1fr;
    gap: $space-10;
    align-items: start;
  }

  &__poster {
    width: 100%;
    aspect-ratio: 323 / 486;
    object-fit: cover;
    background-color: $color-bg-card;
  }

  &__genre {
    margin-bottom: $space-4;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    color: $color-text-muted;
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: $space-6;
    margin-bottom: $space-6;
    font-size: $font-size-xl;
    font-weight: $font-weight-light;
    color: $color-primary;
  }

  &__description {
    font-size: $font-size-lg;
    font-weight: $font-weight-light;
    line-height: $line-height-base;
    color: $color-text-muted;
  }

  &__divider {
    height: 10px;
    margin-top: $space-10;
    background-color: $color-bg-divider;
    opacity: 0.5;
  }

  @include at-md {
    &__headline {
      flex-direction: column;
      gap: $space-4;
    }

    &__rating {
      position: static;
    }

    &__body {
      grid-template-columns: 1fr;
    }

    &__poster {
      max-width: 280px;
    }
  }
}
</style>
