<template>
  <transition name="slide">
    <div v-if="isAdminSettingsOpen" class="w-full min-h-screen">
      <admin-settings
        @close-admin-settings="closeAdminSettings"
        @showLogOutPermission="showLogOutPermission"
      />
    </div>
  </transition>

  <router-view v-slot="{ Component }">
    <transition name="slide">
      <div v-if="!isAdminSettingsOpen">
        <admin-navigation
          @showLogOutPermission="showLogOutPermission"
          @openAdminSettings="openAdminSettings"
        />
        <activity-breadcrumbs :activitySubNav="isActivitySubNav" />

        <component :is="Component" />
      </div>
    </transition>
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
import AdminNavigation from "@/components/admin/navbar/AdminNavigation.vue";
import AdminSettings from "@/components/admin/navbar/AdminSettings.vue";
import ModalLogOut from "@/components/admin/modal/log-out/ModalLogOut.vue";
import ActivityBreadcrumbs from "@/components/admin/view/detail/ActivityBreadcrumbs.vue";

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

    closeCardModal() {
      this.isCardModalVisible = false;
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

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
