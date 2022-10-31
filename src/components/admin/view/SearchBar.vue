<template>
  <div class="search-input">
    <div class="flex items-center">
      <div class="absolute inset-y-0 left-0 flex items-center pl-4">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <input
        type="text"
        v-model="query"
        @input="search"
        :placeholder="$t('search')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },

  methods: {
    search() {
      console.log(this.query);
    },
  },
});
</script>

<style scoped>
.search-input {
  @apply md:w-1/3 w-1/2 max-w-2xl h-12 relative;
}
input {
  @apply w-full m-1 pl-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm transition-colors bg-white border
  focus:border-vtd-primary-500 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-20;
}
</style>
