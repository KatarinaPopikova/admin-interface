<template>
  <the-navigation />
  <div class="home">
    <p>Vitajte</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default defineComponent({
  name: "HomeView",
  components: { TheNavigation },
});
</script>
