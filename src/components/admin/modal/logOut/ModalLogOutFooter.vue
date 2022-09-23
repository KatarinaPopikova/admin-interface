<template>
  <footer class="p-4 overflow-y-auto flex justify-end">
    <button
      @click="logOut"
      class="font-bold px-4 py-2 m-2 has-radius rounded-md bg-main-color-400 hover:bg-main-color-500"
    >
      Odhlásiť
    </button>
    <button @click="close" class="underline text-sm">Nie, ďakujem</button>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalLogOutFooter",
  methods: {
    close() {
      this.$emit("close");
    },
    logOut() {
      this.$store.dispatch("userLogout").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
});
</script>

<style scoped></style>
