<template>
  <button @click="closeLogOutModal">x</button>
  <p>Skutočne odhlásiť?</p>
  <button @click="logOut" class="p-2 bg-main-color-400 hover:bg-main-color-500">
    Odhlásiť
  </button>
  <button @click="closeLogOutModal" class="underline">Nie, ďakujem</button>
</template>

<script>
export default {
  name: "LogOutModal",

  methods: {
    closeLogOutModal() {
      this.$emit("closeLogOutModal");
    },
    logOut() {
      this.$store.dispatch("userLogout").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>

<style scoped></style>
