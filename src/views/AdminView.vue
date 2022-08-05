<template>
  <admin-navigation />
  <div
    class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
  >
    <div v-for="post in APIData" :key="post.id">
      <info-card :post="post" />
    </div>
  </div>

  <ModalCard v-show="isModalVisible" @close="closeModal"></ModalCard>
</template>

<script lang="ts">
import { getAPI } from "@/axios";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import AdminNavigation from "@/components/AdminNavigation.vue";
import InfoCard from "@/components/admin/InfoCard.vue";
import ModalCard from "@/components/admin/ModalCard.vue";

export default defineComponent({
  name: "AdminView",
  components: { AdminNavigation, InfoCard, ModalCard },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: mapState(["APIData"]),
  created() {
    console.log(`Bearer ${localStorage.getItem("access")}`);
    getAPI
      .get("/posts/")
      .then((response) => {
        this.$store.state.APIData = response.data;
      })
      .catch((err) => {
        console.log(err);
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
