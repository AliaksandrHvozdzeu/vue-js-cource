<script setup lang="ts">
import { RouterLink } from "vue-router";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <div class="not-found-view">
    <div class="not-found-view__content container">
      <p class="not-found-view__code">404</p>
      <h1 class="not-found-view__title">Page not found</h1>
      <p class="not-found-view__text">
        The page you are looking for does not exist.
      </p>
      <RouterLink class="not-found-view__link" to="/">Back to home</RouterLink>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.not-found-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $color-bg-page;

  &__content {
    flex: 1;
    display: grid;
    place-items: center;
    padding-block: $space-16;
    text-align: center;
  }

  &__code {
    margin-bottom: $space-4;
    font-size: clamp(4rem, 20vw, $font-size-3xl);
    font-weight: $font-weight-bold;
    line-height: $line-height-tight;
    color: $color-primary;
  }

  &__title {
    margin-bottom: $space-4;
    font-size: $font-size-2xl;
    font-weight: $font-weight-light;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
  }

  &__text {
    margin-bottom: $space-8;
    color: $color-text-muted;
  }

  &__link {
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
