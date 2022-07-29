<template>
  <the-navigation />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default defineComponent({
  name: "AboutView",
  components: { TheNavigation },
});
</script>
