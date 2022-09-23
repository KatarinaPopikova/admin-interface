<template>
  <p>Skutočne odhlásiť?</p>
  <button @click="logOut" class="p-2 bg-main-color-400 hover:bg-main-color-500">
    Odhlásiť
  </button>
  <button @click="close" class="underline">Nie, ďakujem</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogOutModal",

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
