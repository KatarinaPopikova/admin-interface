<template>
  <label class="text-lg font-semibold">
    {{ inputData.label }}
    <font-awesome-icon
      icon="fa-regular fa-pen-to-square"
      v-if="!editable"
      class="input-manager-icon"
      @click="startEditInputArea"
    />
    <font-awesome-icon
      icon="fa-solid fa-check"
      v-if="editable"
      class="input-manager-icon"
      @click="saveEditedInputArea"
    />

    <font-awesome-icon
      icon="fa-solid fa-xmark"
      v-if="editable"
      class="input-manager-icon"
      @click="restoreEditedInputArea"
    />
  </label>
  <input
    :value="inputData.value"
    @change="editValue($event.target.value)"
    onkeydown="this.style.width = (this.value.length + 2 ) + 'ch';"
    v-bind:style="{
      width: inputData.value.length + 1 + 'ch',
    }"
    v-bind:class="{
      'outline-none text-gray-500': !editable,
      'border-2 border-black': editable,
    }"
    :readonly="!editable"
    :name="inputData.inputName"
    class="bg-transparent block ml-4 pl-1.5 p-0.5 mb-5 rounded-lg"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditableValue",

  props: {
    inputData: {
      type: Object,
    },
  },
  emits: ["change-value"],

  data() {
    return {
      editable: false,
    };
  },
  beforeUnmount() {
    this.$emit("open-save-modal");
  },
  methods: {
    startEditInputArea() {
      this.editable = true;
    },
    saveEditedInputArea() {
      this.editable = false;
      this.$emit("save-edited-value");
    },
    restoreEditedInputArea() {
      this.editable = false;
      this.$emit("restore-edited-value");
    },
    editValue(editedValue) {
      this.$emit("edit-value", editedValue);
    },
  },
});
</script>

<style scoped>
.input-manager-icon {
  @apply self-end pl-4 h-5 w-5 text-main-color-400 hover:text-main-color-500 hover:cursor-pointer;
}
</style>
