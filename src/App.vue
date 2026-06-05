<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-shell">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app-shell {
  min-height: 100vh;
  background-color: $color-bg-page;
}
</style>
