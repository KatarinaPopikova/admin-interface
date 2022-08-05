<template>
  <section id="modal-body" class="px-4 py-6">
    <img
      src="https://via.placeholder.com/150x100"
      alt="close button"
      class="w-80 h-80"
    />
    <p>Im modal body</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalCardBody",
});
</script>

<style scoped></style>
