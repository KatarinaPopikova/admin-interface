<template>
  <nav id="admin-navigation" class="flex items-center justify-end">
    <router-link to="/">Infinela</router-link>
    <div class="rounded-full bg-white p-3 m-4">Jazyk</div>
    <button class="rounded-full bg-white p-3" @click="logOut()">
      Odhlasit
    </button>
  </nav>
</template>

<script>
export default {
  name: "AdminNavigation",
  methods: {
    logOut() {
      this.$store.dispatch("userLogout").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>

<style scoped></style>
