<template>
  <div class="py-3">
    <h3
      @click="isOpen = !isOpen"
      v-bind:class="{
        'text-main-color-400': isOpen,
      }"
      class="clickable"
    >
      {{ headerString }}
    </h3>
    <div v-if="isOpen" class="py-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminSettingsSlot",
  props: {
    isLoginData: {
      type: Boolean,
      default: false,
    },
    headerString: {
      type: String,
    },
  },
  data() {
    return {
      isOpen: this.isLoginData,
    };
  },
});
</script>

<style scoped>
h3 {
  @apply text-2xl;
}
.clickable {
  @apply hover:text-main-color-500 hover:cursor-pointer;
}
</style>
