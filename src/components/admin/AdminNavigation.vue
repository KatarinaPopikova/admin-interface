<template>
  <nav id="admin-navigation" class="flex items-center justify-between">
    <router-link
      :to="`/${$i18n.locale}/`"
      class="pr-3 text-main-color-400 text-2xl"
      >Infinela {{ $t("hello") }}</router-link
    >
    <div class="flex items-center">
      <div class="search-input">
        <div class="flex items-center">
          <div class="absolute inset-y-0 left-0 flex items-center pl-4">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
          <input
            type="text"
            v-model="query"
            @input="search"
            :placeholder="$t('search')"
          />
        </div>
      </div>
      <language-switcher />
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
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
// import i18n from "@/locales/i18n";

export default defineComponent({
  name: "AdminNavigation",
  components: { LanguageSwitcher },
  data() {
    return {
      query: "" as string,
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("userLogout").then(() => {
        this.$router.push({ name: "login" });
      });
    },
    search() {
      window.eventBus.emit("filter-posts", this.query);
    },
  },
});
</script>

<style scoped>
.search-input {
  @apply overflow-hidden w-full max-w-2xl bg-white rounded-2xl h-12 relative;
}
input {
  @apply w-full box-border pl-12 border-b outline-none placeholder-gray-400 h-12;
}
</style>
