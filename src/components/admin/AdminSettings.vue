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
        <LanguageSwitcher v-if="isLanguageSwitcherOpen" />
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
          <label>E-mail</label>
          <input :value="this.$store.state.activeLanguage" name="email" />
          <p>Zmeniť heslo</p>
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
          <label>Tel. kontakt</label>
          <input value="0934234234" name="phone" />
          <br />
          <label>Adresa</label>
          <input
            value="Hlavná 21, 08404 Bratislava, Slovensko"
            name="address"
          />
        </div>
      </div>
      <div>
        <h3 @click="logOut()" class="clickable">Odhlásiť sa</h3>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default {
  name: "AdminSettings",
  components: { LanguageSwitcher },
  data() {
    return {
      isLanguageSwitcherOpen: false,
      isLoginDataOpen: true,
      isContactDataOpen: false,
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("userLogout").then(() => {
        this.$router.push({ name: "login" });
      });
    },
    openAdminSettings() {
      this.$emit("closeAdminSettings");
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
</style>
