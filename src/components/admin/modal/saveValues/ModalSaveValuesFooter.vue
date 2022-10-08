<template>
  <footer class="p-4 overflow-y-auto flex justify-end">
    <button
      @click="saveAllData"
      class="font-medium px-4 py-2 m-2 has-radius rounded-md bg-main-color-400 hover:bg-main-color-500"
    >
      Uložiť
    </button>
    <button @click="close" class="underline text-sm">Nie, ďakujem</button>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "ModalLogOutFooter",
  methods: {
    ...mapActions("admin", ["saveAllNewData"]),
    close() {
      this.$emit("close");
    },
    saveAllData() {
      this.saveAllNewData();
      this.close();
    },
  },
});
</script>

<style scoped></style>
