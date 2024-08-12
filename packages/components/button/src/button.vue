<template>
  <button
    class="caps-space-button"
    :class="[
      `caps-space-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="clickHandle"
  >
    <i v-if="icon" :class="`caps-space-icon-${icon}`"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { buttonProps } from './button';
export default defineComponent({
  name: 'CapsSpaceButton',
  props: buttonProps,
  emits: ['click'],
  setup(_, { emit }) {
    function clickHandle(e: Event) {
      emit('click', e);
    }
    return {
      clickHandle,
    };
  },
});
</script>

<style scoped></style>
