<template>
  <admin-navigation />
  <div
    class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
  >
    <div v-for="post in filteredPosts" :key="post.id">
      <info-card :post="post" />
    </div>
  </div>

  <ModalCard v-show="isModalVisible" @close="closeModal"></ModalCard>
</template>

<script lang="ts">
import { getAPI } from "@/axios";
import { defineComponent } from "vue";
import AdminNavigation from "@/components/admin/AdminNavigation.vue";
import InfoCard from "@/components/admin/InfoCard.vue";
import ModalCard from "@/components/admin/ModalCard.vue";

export default defineComponent({
  name: "AdminView",
  components: { AdminNavigation, InfoCard, ModalCard },
  data() {
    return {
      isModalVisible: false,
      posts: [],
      filteredPosts: [],
    };
  },
  mounted() {
    getAPI
      .get("/posts/")
      .then((response) => {
        this.posts = response.data;
        this.filteredPosts = response.data;
      })
      .catch((err) => {
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
  },
});
</script>

<style scoped></style>
