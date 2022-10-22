<template>
  <div class="activity-card">
    <router-link
      :to="`/${$i18n.locale}/admin/${post.id}/activity`"
      class="card"
    >
      <div class="card-header mx-4 -mt-6">
        <img
          class="w-full rounded-lg"
          src="https://via.placeholder.com/150x100"
          alt="{{ post.title }}"
        />
      </div>
      <div class="card-body">
        <h4 class="font-semibold text-center">
          {{ post.title }} {{ $t("hello") }}
        </h4>
        <p class="px-5 py-2">
          {{ post.content }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Activity } from "@/types";

export default defineComponent({
  name: "ActivityCard",
  props: {
    post: Object as PropType<Activity>,
  },
});
</script>

<style scoped>
.activity-card {
  @apply relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 hover:scale-110 transition duration-300 ease-in-out;
}
</style>
