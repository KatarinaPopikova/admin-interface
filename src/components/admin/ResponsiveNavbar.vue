<template>
  <language-switcher />

  <font-awesome-icon class="w-7 h-7 pr-3" icon="fa-solid fa-user-gear" />
  <button
    type="button"
    class="rounded-full bg-white w-12 h-12 p-3 w-max box-border"
    @click="logOut()"
    title="Odhlásiť sa"
  >
    <font-awesome-icon
      class="w-5 h-5"
      icon="fa-solid fa-arrow-right-from-bracket"
    />
  </button>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default {
  name: "ResponsiveNavbar",
  components: { LanguageSwitcher },

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
