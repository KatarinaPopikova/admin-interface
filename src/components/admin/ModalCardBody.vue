<template>
  <section id="modal-body" class="px-4 py-6">
    <div CLASS="flex">
      <img
        src="https://via.placeholder.com/150x100"
        alt="close button"
        class="w-80 h-80 object-cover"
      />
      <div>
        <p class="ml-3 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <font-awesome-icon icon="fa-regular fa-pen-to-square" />
      </div>
    </div>
    <div class="p-4">
      <div class="flex items-center mb-4">
        <input
          id="checkbox-1"
          type="checkbox"
          value=""
          class="checkbox-input"
        />
        <label for="checkbox-1" class="checkbox-label">Checkbox 1</label>
      </div>
      <div class="flex items-center mb-4">
        <input
          checked
          id="checkbox-2"
          type="checkbox"
          value=""
          class="checkbox-input"
        />
        <label for="checkbox-2" class="checkbox-label">Checkbox 2</label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="checkbox-3"
          type="checkbox"
          value=""
          class="checkbox-input"
        />
        <label for="checkbox-3" class="checkbox-label">Checkbox 3</label>
      </div>
      <div class="flex items-center mb-4">
        <input
          checked
          id="checkbox-4"
          type="checkbox"
          value=""
          class="checkbox-input"
        />
        <label for="checkbox-4" class="checkbox-label">Checkbox 4</label>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalCardBody",
});
</script>

<style scoped>
.checkbox-input {
  @apply w-4 h-4 text-blue-600 rounded border-gray-300;
}
.checkbox-label {
  @apply ml-2 text-sm font-medium text-black;
}
</style>
