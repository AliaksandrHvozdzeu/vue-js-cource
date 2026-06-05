<script setup lang="ts">
import { RouterLink } from "vue-router";
import AppLogo from "@/components/common/AppLogo.vue";
import SearchForm from "@/components/search/SearchForm.vue";
import { HERO_BACKGROUND_URL } from "@/data/mockMovies";

defineProps<{
  searchValue: string;
}>();

const emit = defineEmits<{
  "update:searchValue": [value: string];
  search: [value: string];
}>();
</script>

<template>
  <header class="hero-header">
    <div class="hero-header__background" aria-hidden="true">
      <img
        class="hero-header__background-image"
        :src="HERO_BACKGROUND_URL"
        alt=""
      />
    </div>

    <div class="hero-header__content container">
      <div class="hero-header__top">
        <RouterLink class="hero-header__logo-link" to="/">
          <AppLogo />
        </RouterLink>

        <button class="hero-header__add-button" type="button">
          + ADD MOVIE
        </button>
      </div>

      <h1 class="hero-header__title">FIND YOUR MOViE</h1>

      <SearchForm
        :model-value="searchValue"
        @update:model-value="emit('update:searchValue', $event)"
        @submit="emit('search', $event)"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.hero-header {
  position: relative;
  min-height: $hero-height;
  overflow: hidden;
  background-color: $color-bg-hero;

  &__background {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  &__background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur($hero-blur);
    opacity: $hero-overlay-opacity;
    transform: scale(1.05);
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: $space-6;
    padding-block: $space-5 $space-10;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-4;
  }

  &__logo-link {
    display: inline-flex;
  }

  &__add-button {
    min-height: 46px;
    padding-inline: $space-4;
    border: 0;
    border-radius: $radius-sm;
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    text-transform: uppercase;
    color: $color-primary;
    background-color: $color-bg-button-secondary;
    cursor: pointer;
    @include hover-opacity(0.85);
  }

  &__title {
    align-self: center;
    font-size: clamp(1.75rem, 4vw, $font-size-2xl);
    font-weight: $font-weight-light;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    text-align: center;
  }

  @include at-md {
    &__add-button {
      font-size: $font-size-sm;
      min-height: 40px;
    }
  }
}
</style>
