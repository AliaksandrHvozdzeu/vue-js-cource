<script setup lang="ts">
const emit = defineEmits<{
  submit: [value: string];
}>();

const model = defineModel<string>({ default: "" });

const handleSubmit = () => {
  emit("submit", model.value.trim());
};
</script>

<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <label class="visually-hidden" for="movie-search">Search movies</label>
    <input
      id="movie-search"
      v-model="model"
      class="search-form__input"
      type="search"
      name="query"
      placeholder="What do you want to watch?"
      autocomplete="off"
    />
    <button class="search-form__button" type="submit">Search</button>
  </form>
</template>

<style lang="scss" scoped>
.search-form {
  display: flex;
  gap: $space-3;
  width: 100%;
  max-width: 960px;

  &__input {
    flex: 1;
    min-height: 57px;
    padding: 0 $space-5;
    border: 0;
    border-radius: $radius-sm;
    font-size: $font-size-lg;
    font-weight: $font-weight-regular;
    color: $color-text-primary;
    background-color: $color-bg-input;
    opacity: 0.7;

    &::placeholder {
      color: $color-text-primary;
      opacity: 0.3;
    }

    &:focus-visible {
      @include focus-ring;
      opacity: 1;
    }
  }

  &__button {
    min-width: 233px;
    min-height: 57px;
    padding-inline: $space-6;
    border: 0;
    border-radius: $radius-sm;
    font-size: $font-size-lg;
    font-weight: $font-weight-medium;
    text-transform: uppercase;
    color: $color-text-primary;
    background-color: $color-primary;
    cursor: pointer;
    @include hover-opacity;
  }
}
</style>
