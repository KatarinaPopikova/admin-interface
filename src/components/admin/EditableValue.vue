<template>
  <label class="text-lg font-semibold">
    {{ inputData.label }}
    <font-awesome-icon
      v-if="!editable"
      class="input-manager-icon"
      icon="fa-regular fa-pen-to-square"
      @click="handleInputArea" />
    <font-awesome-icon
      v-if="editable"
      class="input-manager-icon"
      icon="fa-solid fa-check"
      @click="handleInputArea"
  /></label>
  <input
    :value="inputData.value"
    :readonly="!editable"
    onkeydown="this.style.width = (this.value.length + 2 ) + 'ch';"
    v-bind:style="{
      width: inputData.value.length + 1 + 'ch',
    }"
    v-bind:class="{
      'outline-none text-gray-500': !editable,
      'border-2 border-black': editable,
    }"
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
  data() {
    return {
      editable: false,
    };
  },

  methods: {
    handleInputArea() {
      this.editable = !this.editable;
    },
  },
});
</script>

<style scoped>
.input-manager-icon {
  @apply self-end pl-4 h-5 w-5 text-main-color-400 hover:text-main-color-500 hover:cursor-pointer;
}
</style>
