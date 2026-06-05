<script setup lang="ts">
import AppLogo from "@/components/common/AppLogo.vue";
</script>

<template>
  <footer class="app-footer">
    <AppLogo variant="footer" />
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: $footer-height;
  background-color: $color-bg-bar;
}
</style>
