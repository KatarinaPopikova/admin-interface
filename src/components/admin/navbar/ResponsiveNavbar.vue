<template>
  <div class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex sm:items-center justify-between pl-5 py-3 sm:p-0">
      <div class="sm:hidden">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          @click="openAdminSettings"
          class="w-7 h-7 py-3 pr-3 text-main-color-400 hover:text-main-color-500"
        />
      </div>
    </div>
    <div
      class="hidden px-2 pt-2 pb-4 flex sm:flex sm:p-0 sm:items-center flex-col sm:flex-row"
    >
      <language-switcher />

      <transition name="slide">
        <font-awesome-icon
          icon="fa-solid fa-user-gear"
          @click="openAdminSettings"
          class="w-7 h-7 pl-3 pr-4 hover:text-main-color-500 hover:cursor-pointer"
        />
      </transition>
      <font-awesome-icon
        class="w-6 h-6 hover:text-main-color-500 hover:cursor-pointer"
        @click="showLogOutPermission()"
        icon="fa-solid fa-arrow-right-from-bracket"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default defineComponent({
  name: "ResponsiveNavbar",
  components: { LanguageSwitcher },
  methods: {
    showLogOutPermission() {
      this.$parent.$emit("showLogOutPermission");
    },

    openAdminSettings() {
      this.$parent.$emit("openAdminSettings");
    },
  },
});
</script>

<style scoped></style>
