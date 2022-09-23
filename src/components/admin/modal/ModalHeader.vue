<template>
  <header id="modal-header" class="px-4 py-6 flex justify-between items-center">
    <h3 class="font-semibold text-lg text-main-color-400 pl-2">Some title</h3>
    <button type="button" class="w-10 h-10 rounded-full" @click="close">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalHeader",
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style scoped></style>
