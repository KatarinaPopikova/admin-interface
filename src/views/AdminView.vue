<template>
  <div class="block md:flex justify-evenly md:-mx-2">
    <div
      class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0"
      v-for="posts in APIData"
      :key="posts.id"
    >
      <div
        class="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16"
      >
        <div class="card">
          <div class="card-header mx-4 -mt-6">
            <a href="https://www.material-tailwind.com">
              <img
                class="w-auto rounded-lg"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="tailwind-card-image"
              />
            </a>
          </div>
          <div class="card-body">
            <a href="#">
              <h4 class="font-semibold">{{ posts.title }}</h4>
            </a>
            <p class="opcacity-90 mb-4">
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

export default defineComponent({
  name: "AdminView",
  data() {
    return {
      authorization: "",
    };
  },
  computed: mapState(["APIData"]),
  created() {
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
