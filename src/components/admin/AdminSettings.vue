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
          <editable-value
            :inputData="{
              value: this.email,
              label: `E-mail:`,
              inputName: `email`,
            }"
          />
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
          <editable-value
            :inputData="{
              value: this.phone,
              label: `Tel. č.:`,
              inputName: `phone`,
            }"
          />

          <editable-value
            :inputData="{
              value: this.address,
              label: `Adresa:`,
              inputName: `address`,
            }"
          />
        </div>
      </div>
      <div>
        <h3 @click="showLogOutPermission()" class="clickable">Odhlásiť sa</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LanguagesList from "@/components/LanguagesList.vue";
import EditableValue from "@/components/admin/EditableValue.vue";
import { mapActions, mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminSettings",
  components: { LanguagesList, EditableValue },

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
  },
});
</script>

<style scoped>
h3 {
  @apply text-2xl text-center max-w-sm m-auto;
}
.clickable {
  @apply hover:text-main-color-500 hover:cursor-pointer;
}
</style>
