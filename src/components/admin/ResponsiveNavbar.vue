<template>
  <div class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex sm:items-center justify-between pl-5 py-3 sm:p-0">
      <div class="sm:hidden">
        <router-link
          :to="`/${$i18n.locale}/info`"
          class="pr-3 text-main-color-400 hover:text-main-color-500"
        >
          <font-awesome-icon icon="fa-solid fa-bars" class="w-7 h-7 py-3" />
        </router-link>
      </div>
    </div>
    <div
      class="hidden px-2 pt-2 pb-4 flex sm:flex sm:p-0 sm:items-center flex-col sm:flex-row"
    >
      <language-switcher />
      <router-link
        :to="`/${$i18n.locale}/info`"
        class="hover:text-main-color-500"
      >
        <font-awesome-icon
          class="w-7 h-7 pl-3 pr-4"
          icon="fa-solid fa-user-gear"
        />
      </router-link>
      <font-awesome-icon
        class="w-6 h-6 hover:text-main-color-500"
        @click="logOut()"
        icon="fa-solid fa-arrow-right-from-bracket"
      />
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default {
  name: "ResponsiveNavbar",
  components: { LanguageSwitcher },
  data() {
    return {
      isOpen: false,
    };
  },
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
