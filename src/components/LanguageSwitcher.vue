<template>
  <div class="relative">
    <button
      class="flex items-center hover:text-main-color-500"
      @click="toggleVisibility"
      title="Language"
    >
      <flag class="fa-xl" :iso="flags[`${$i18n.locale}`]" />
      <span class="ml-2 font-bold">{{ $i18n.locale.toUpperCase() }}</span>
      <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        ></path>
      </svg>
    </button>
    <transition name="dropdown-fade">
      <ul
        v-click-away="hideDropdown"
        v-if="isVisible"
        ref="dropdown"
        class="absolute z-20 mt-2 bg-white shadow overflow-hidden rounded w-48 border py-1"
      >
        <LanguagesList @hideDropdown="hideDropdown" />
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mixin as VueClickAway } from "vue3-click-away";
import LanguagesList from "/src/components/LanguagesList.vue";

export default defineComponent({
  name: "LanguageSwitcher",
  components: { LanguagesList },

  data() {
    return {
      isVisible: false,
      flags: {
        en: "gb",
        sk: "sk",
      },
    };
  },
  mixins: [VueClickAway],
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
    },
  },
});
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
