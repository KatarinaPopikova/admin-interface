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
      <div
        class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
      >
        <div v-for="post in filteredPosts" :key="post.id">
          <info-card @showCardModal="showCardModal" :post="post" />
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
import { Api } from "@/apis/axios";
import { defineComponent } from "vue";
import AdminNavigation from "@/components/admin/AdminNavigation.vue";
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
  },
  data() {
    return {
      openLogOutModal: false,
      isCardModalVisible: false,
      isAdminSettingsOpen: false,
      posts: [],
      filteredPosts: [],
    };
  },
  async mounted() {
    await Api.get("/posts/")
      .then((response) => {
        this.posts = response.data;
        this.filteredPosts = response.data;
      })
      .catch((err) => {
        console.log("admin error");
        console.log(err);
      });

    window.eventBus.on("filter-posts", (filterText) => {
      if (filterText === "") {
        this.filteredPosts = this.posts;
      } else {
        this.filteredPosts = this.posts.filter((post) => {
          return post.title.match(filterText);
        });
      }
    });
  },
  methods: {
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
