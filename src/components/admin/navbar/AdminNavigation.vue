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
      <responsive-navbar />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResponsiveNavbar from "/src/components/admin/navbar/ResponsiveNavbar.vue";

export default defineComponent({
  name: "AdminNavigation",
  components: { ResponsiveNavbar },

  data() {
    return {
      query: "" as string,
    };
  },
  methods: {
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
