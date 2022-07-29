<template>
  <admin-navigation />
  <div
    class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
  >
    <div v-for="posts in APIData" :key="posts.id">
      <div
        class="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16"
      >
        <div class="card">
          <div class="card-header mx-4 -mt-6">
            <a href="https://www.material-tailwind.com">
              <img
                class="w-full rounded-lg"
                src="https://via.placeholder.com/150x100"
                alt="tailwind-card-image"
              />
            </a>
          </div>
          <div class="card-body">
            <a href="#">
              <h4 class="font-semibold">{{ posts.title }}</h4>
            </a>
            <p class="mb-4">
              {{ posts.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAPI } from "@/axios";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import AdminNavigation from "@/components/AdminNavigation.vue";

export default defineComponent({
  name: "AdminView",
  components: { AdminNavigation },
  data() {
    return {
      authorization: "",
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
});
</script>

<style scoped></style>
