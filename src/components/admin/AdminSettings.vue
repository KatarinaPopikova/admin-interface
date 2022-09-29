<template>
  <div class="p-5 text-left">
    <div>
      <font-awesome-icon
        icon="fa-solid fa-arrow-left"
        @click="openAdminSettings"
        class="text-center text-main-color-400 hover:text-main-color-500 hover:cursor-pointer h-10 w-10"
      />
    </div>
    <div class="flex flex-col m-auto sm:w-1/2">
      <div>
        <h3
          @click="isLanguageSwitcherOpen = !isLanguageSwitcherOpen"
          v-bind:class="{
            'text-main-color-400': isLanguageSwitcherOpen,
          }"
          class="clickable"
        >
          Zmeniť jazyk
        </h3>
        <ul class="font-bold">
          <LanguagesList v-if="isLanguageSwitcherOpen" />
        </ul>
      </div>
      <div>
        <h3
          @click="isLoginDataOpen = !isLoginDataOpen"
          v-bind:class="{
            'text-main-color-400': isLoginDataOpen,
          }"
          class="clickable"
        >
          Prihlasovacie údaje
        </h3>
        <div v-if="isLoginDataOpen">
          <label>
            E-mail:
            <font-awesome-icon
              v-if="!emailEditable"
              class="self-end pl-4 h-5 w-5 text-main-color-400"
              icon="fa-regular fa-pen-to-square"
              @click="handleEmailInputArea"
            />
            <font-awesome-icon
              v-if="emailEditable"
              class="self-end pl-4 h-5 w-5 text-main-color-400"
              icon="fa-solid fa-c heck"
              @click="handleEmailInputArea"
            />
          </label>
          <input :value="this.email" name="email" class="setting-input" />

          <p
            class="text-lg font-medium underline underline-offset-2 hover:text-main-color-500 hover:cursor-pointer"
          >
            Zmeniť heslo
          </p>
        </div>
      </div>
      <div>
        <h3
          @click="isContactDataOpen = !isContactDataOpen"
          v-bind:class="{
            'text-main-color-400': isContactDataOpen,
          }"
          class="clickable"
        >
          Kontaktné údaje
        </h3>
        <div v-if="isContactDataOpen">
          <label
            >Tel. kontakt:
            <font-awesome-icon
              v-if="!emailEditable"
              class="self-end pl-4 h-5 w-5 text-main-color-400"
              icon="fa-regular fa-pen-to-square"
              @click="handleEmailInputArea" />
            <font-awesome-icon
              v-if="emailEditable"
              class="self-end pl-4 h-5 w-5 text-main-color-400"
              icon="fa-solid fa-check"
              @click="handleEmailInputArea"
          /></label>
          <input :value="this.phone" name="phone" class="setting-input" />

          <label
            >Adresa:
            <font-awesome-icon
              v-if="!emailEditable"
              class="self-end pl-4 h-5 w-5 text-main-color-400"
              icon="fa-regular fa-pen-to-square"
              @click="handleEmailInputArea" />
            <font-awesome-icon
              v-if="emailEditable"
              class="self-end pl-4 h-5 w-5 text-main-color-400"
              icon="fa-solid fa-check"
              @click="handleEmailInputArea"
          /></label>
          <input
            onkeydown="this.style.width = (this.value.length + 2 ) + 'ch';"
            :value="this.address"
            v-bind:style="{
              width:
                `Budovatelska 42, 0841 Bratislava, Slovensko`.length + 2 + 'ch',
            }"
            name="address"
            class="setting-input"
          />
        </div>
      </div>
      <div>
        <h3 @click="showLogOutPermission()" class="clickable">Odhlásiť sa</h3>
      </div>
    </div>
  </div>
</template>

<script>
import LanguagesList from "@/components/LanguagesList";
import { mapActions, mapState } from "vuex";

export default {
  name: "AdminSettings",
  components: { LanguagesList },

  data() {
    return {
      isLanguageSwitcherOpen: false,
      isLoginDataOpen: true,
      isContactDataOpen: false,
      emailEditable: false,
    };
  },

  computed: {
    ...mapState("admin", ["email", "phone", "address"]),
  },

  mounted() {
    this.getUserDetail();
  },

  methods: {
    ...mapActions("admin", ["getUserDetail"]),

    showLogOutPermission() {
      this.$emit("showLogOutPermission");
    },
    openAdminSettings() {
      this.$emit("closeAdminSettings");
    },
    handleEmailInputArea() {
      this.emailEditable = !this.emailEditable;
    },
  },
};
</script>

<style scoped>
h3 {
  @apply text-2xl text-center;
}
.clickable {
  @apply hover:text-main-color-500 hover:cursor-pointer;
}
.setting-input {
  @apply bg-transparent block pl-4 pb-5;
}
label {
  @apply text-lg font-semibold;
}
</style>
