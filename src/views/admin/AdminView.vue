<template>
  <Transition
    leave-active-class="transition-all ease-out duration-700"
    enter-active-class="transition-all ease-out duration-700"
    leave-from-class="absolute right-0"
    leave-to-class="absolute -right-full"
    enter-from-class="absolute -right-full"
    enter-to-class="absolute right-0"
  >
    <div v-if="isAdminSettingsOpen" class="w-full min-h-screen">
      <admin-settings
        @close-admin-settings="closeAdminSettings"
        @showLogOutPermission="showLogOutPermission"
      />
    </div>
  </Transition>

  <router-view v-slot="{ Component }">
    <Transition
      leave-active-class="transition-all ease-out duration-700"
      enter-active-class="transition-all ease-out duration-700"
      leave-from-class="absolute left-0"
      leave-to-class="absolute -left-full"
      enter-from-class="absolute -left-full"
      enter-to-class="absolute left-0"
    >
      <div v-if="!isAdminSettingsOpen">
        <admin-navigation
          @showLogOutPermission="showLogOutPermission"
          @openAdminSettings="openAdminSettings"
        />
        <activity-breadcrumbs />

        <component :is="Component" />
      </div>
    </Transition>
  </router-view>
  <div>
    <modal-log-out
      v-if="openLogOutModal"
      @closeLogOutModal="closeLogOutPermission"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AdminNavigation from "@/components/admin/main-navbar/AdminNavigation.vue";
import AdminSettings from "@/components/admin/main-navbar/AdminSettings.vue";
import ModalLogOut from "@/components/admin/modal/log-out/ModalLogOut.vue";
import ActivityBreadcrumbs from "@/components/admin/view/ActivityBreadcrumbs.vue";

export default defineComponent({
  name: "AdminView",
  components: {
    AdminNavigation,
    AdminSettings,
    ModalLogOut,
    ActivityBreadcrumbs,
  },
  data() {
    return {
      openLogOutModal: false,
      isCardModalVisible: false,
      isAdminSettingsOpen: false,
    };
  },

  methods: {
    showLogOutPermission() {
      this.openLogOutModal = true;
    },
    closeLogOutPermission() {
      this.openLogOutModal = false;
    },
    openAdminSettings() {
      this.isAdminSettingsOpen = true;
    },
    closeAdminSettings() {
      this.isAdminSettingsOpen = false;
    },
  },
});
</script>

<style scoped></style>
