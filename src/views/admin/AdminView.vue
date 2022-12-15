<template>
  <div class="relative">
    <div>
      <admin-navigation
        @showLogOutPermission="showLogOutPermission"
        @openAdminSettings="openAdminSettings"
      />
      <activity-breadcrumbs />
    </div>
    <router-view> </router-view>

    <Transition
      leave-active-class="transition-all ease-out duration-700"
      enter-active-class="transition-all ease-out duration-700"
      leave-to-class="-right-[550px]"
      enter-from-class="-right-[550px]"
    >
      <div
        v-if="isAdminSettingsOpen"
        class="w-[550px] min-h-screen backdrop-blur-xl z-20 absolute right-0 top-0 shadow-lg"
      >
        <admin-settings
          @close-admin-settings="closeAdminSettings"
          @showLogOutPermission="showLogOutPermission"
        />
      </div>
    </Transition>
    <div>
      <modal-log-out
        v-if="openLogOutModal"
        @closeLogOutModal="closeLogOutPermission"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AdminNavigation from "@/components/admin/main-navbar/AdminNavigation.vue";
import AdminSettings from "@/components/admin/main-navbar/admin-settings/AdminSettings.vue";
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
