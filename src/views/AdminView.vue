<template>
  <transition name="slide">
    <div v-if="isAdminSettingsOpen" class="w-full min-h-screen">
      <admin-settings
        @closeAdminSettings="closeAdminSettings"
        @showLogOutPermission="showLogOutPermission"
      />
    </div>
  </transition>
  <transition name="slide">
    <div v-if="!isAdminSettingsOpen">
      <admin-navigation
        @showLogOutPermission="showLogOutPermission"
        @openAdminSettings="openAdminSettings"
      />

      <sub-navigation-overview />

      <div
        class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
      >
        <div v-for="activity in this.activities" :key="activity.id">
          <info-card @showCardModal="showCardModal" :post="activity" />
        </div>
      </div>

      <modal-card
        v-show="isCardModalVisible"
        @closeCardModal="closeCardModal"
      ></modal-card>
    </div>
  </transition>
  <div>
    <modal-log-out
      v-if="openLogOutModal"
      @closeLogOutModal="closeLogOutPermission"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import AdminNavigation from "@/components/admin/AdminNavigation.vue";
import SubNavigationOverview from "@/components/admin/SubNavigationOverview.vue";
import AdminSettings from "@/components/admin/AdminSettings.vue";
import InfoCard from "@/components/admin/InfoCard.vue";
import ModalCard from "@/components/admin/modal/card/ModalCard.vue";
import ModalLogOut from "@/components/admin/modal/logOut/ModalLogOut.vue";

export default defineComponent({
  name: "AdminView",
  components: {
    AdminNavigation,
    InfoCard,
    ModalCard,
    AdminSettings,
    ModalLogOut,
    SubNavigationOverview,
  },
  data() {
    return {
      openLogOutModal: false,
      isCardModalVisible: false,
      isAdminSettingsOpen: false,
    };
  },
  computed: {
    ...mapState("activity", ["activities"]),
    ...mapGetters("activity", ["activitiesFilter"]),
  },

  mounted() {
    this.getActivities();

    window.eventBus.on("filter-posts", (filterText) => {
      if (filterText !== "") {
        console.log(this.activitiesFilter(filterText));
      }
    });
  },
  methods: {
    ...mapActions("activity", ["getActivities"]),

    showLogOutPermission() {
      this.openLogOutModal = true;
    },
    closeLogOutPermission() {
      this.openLogOutModal = false;
    },
    showCardModal() {
      this.isCardModalVisible = true;
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
