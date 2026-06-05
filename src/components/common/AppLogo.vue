<script setup lang="ts">
defineProps<{
  variant?: "default" | "footer" | "header-light";
}>();
</script>

<template>
  <span
    class="app-logo"
    :class="{
      'app-logo--footer': variant === 'footer',
      'app-logo--header-light': variant === 'header-light',
    }"
  >
    <span class="app-logo__brand">netflix</span
    ><span class="app-logo__suffix">roulette</span>
  </span>
</template>

<style lang="scss" scoped>
.app-logo {
  font-size: $font-size-lg;
  line-height: $line-height-tight;
  white-space: nowrap;

  &__brand,
  &__suffix {
    color: $color-primary;
  }

  &__brand {
    font-weight: $font-weight-black;
  }

  &__suffix {
    font-weight: $font-weight-medium;
  }

  &--footer {
    font-size: $font-size-lg;
  }

  &--header-light &__brand,
  &--header-light &__suffix {
    font-weight: $font-weight-light;
  }
}
</style>
