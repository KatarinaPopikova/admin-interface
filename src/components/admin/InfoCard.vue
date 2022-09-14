<template>
  <div
    class="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 hover:scale-110 transition duration-300 ease-in-out"
    @click="showModal"
  >
    <div class="card">
      <div class="card-header mx-4 -mt-6">
        <a href="#">
          <img
            class="w-full rounded-lg"
            src="https://via.placeholder.com/150x100"
            alt="{{ post.title }}"
          />
        </a>
      </div>
      <div class="card-body">
        <a href="#">
          <h4 class="font-semibold">{{ post.title }}</h4>
        </a>
        <p class="mb-4">
          {{ post.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "@/types";

export default defineComponent({
  name: "InfoCard",
  props: {
    post: Object as PropType<Post>,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.$emit("showModal");
    },
  },
});
</script>

<style scoped></style>
