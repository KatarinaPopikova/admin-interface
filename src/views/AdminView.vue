<template>
  <transition name="slide">
    <div v-if="isOpen" class="w-full min-h-screen">
      <AdminSettings @closeAdminSettings="closeAdminSettings" />
    </div>
  </transition>
  <transition name="slide">
    <div v-if="!isOpen">
      <admin-navigation @openAdminSettings="openAdminSettings" />
      <div
        class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
      >
        <div v-for="post in filteredPosts" :key="post.id">
          <info-card @showModal="showModal" :post="post" />
        </div>
      </div>

      <ModalCard v-show="isModalVisible" @closeModal="closeModal"></ModalCard>
    </div>
  </transition>
</template>

<script lang="ts">
import { getAPI } from "@/axios";
import { defineComponent } from "vue";
import AdminNavigation from "@/components/admin/AdminNavigation.vue";
import AdminSettings from "@/components/admin/AdminSettings.vue";
import InfoCard from "@/components/admin/InfoCard.vue";
import ModalCard from "@/components/admin/ModalCard.vue";

export default defineComponent({
  name: "AdminView",
  components: { AdminNavigation, InfoCard, ModalCard, AdminSettings },
  data() {
    return {
      isModalVisible: false,
      isOpen: false,
      posts: [],
      filteredPosts: [],
    };
  },
  async mounted() {
    await getAPI
      .get("/posts/")
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
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    openAdminSettings() {
      this.isOpen = true;
    },
    closeAdminSettings() {
      this.isOpen = false;
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
