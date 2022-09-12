<template>
  <div class="relative">
    <button
      class="flex items-center hover:text-main-color-500"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
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
        class="absolute normal-case z-30 font-normal xs:left-0 lg:right-0 mt-2 bg-white shadow overflow-hidden rounded w-48 border py-1 lg:z-20"
      >
        <li>
          <a
            href="#"
            @click.prevent="setLocale('en')"
            ref="account"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <flag iso="gb" />
            <span class="ml-2">English</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="setLocale('sk')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <flag iso="sk" />
            <span class="ml-2">Slovensky</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mixin as VueClickAway } from "vue3-click-away";

export default defineComponent({
  name: "LanguageSwitcher",

  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
      lang: "sk",
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
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
      this.hideDropdown();
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
