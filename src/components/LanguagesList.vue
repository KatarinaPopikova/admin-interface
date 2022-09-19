<template>
  <li>
    <a href="#" @click.prevent="setLocale('en')" class="dropdown-element">
      <flag iso="gb" />
      <span
        class="ml-2"
        v-bind:class="{
          'underline underline-offset-2': this.$i18n.locale === 'en',
        }"
        >English</span
      >
    </a>
  </li>
  <li>
    <a href="#" @click.prevent="setLocale('sk')" class="dropdown-element">
      <flag iso="sk" />
      <span
        class="ml-2"
        v-bind:class="{
          'underline underline-offset-2': this.$i18n.locale === 'sk',
        }"
        >Slovenský</span
      >
    </a>
  </li>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LanguagesList",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
      this.$emit("hideDropdown");
    },
  },
});
</script>

<style scoped>
.dropdown-element {
  @apply flex items-center px-3 py-3 hover:bg-gray-200;
}
</style>
