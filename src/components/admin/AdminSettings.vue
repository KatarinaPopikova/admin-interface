<template>
  <div class="p-5 text-left">
    <div>
      <font-awesome-icon
        icon="fa-solid fa-arrow-left"
        @click="closeAdminSettings"
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
            @edit-value="(mail) => this.changeEmail(mail)"
            @save-edited-value="this.saveNewEmail()"
            @open-save-modal="handleSaveModal"
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
            @edit-value="(phone) => this.changePhone(phone)"
            @save-edited-value="this.saveNewPhone()"
            @open-save-modal="handleSaveModal"
          />

          <editable-value
            :inputData="{
              value: this.address,
              label: `Adresa:`,
              inputName: `address`,
            }"
            @edit-value="(address) => this.changeAddress(address)"
            @save-edited-value="(address) => this.changeAddress(address)"
            @open-save-modal="handleSaveModal"
          />
        </div>
      </div>
      <div>
        <h3 @click="showLogOutPermission()" class="clickable">Odhlásiť sa</h3>
      </div>
    </div>
  </div>

  <div>
    <modal-save-values v-if="isSaveModalOpen" @make-decision="makeDecision" />
  </div>
</template>

<script lang="ts">
import LanguagesList from "@/components/LanguagesList.vue";
import EditableValue from "@/components/admin/EditableValue.vue";
import ModalSaveValues from "@/components/admin/modal/saveValues/ModalSaveValues.vue";
import { mapActions, mapState, mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminSettings",
  components: { LanguagesList, EditableValue, ModalSaveValues },

  data() {
    return {
      isLanguageSwitcherOpen: false,
      isLoginDataOpen: true,
      isContactDataOpen: false,
      isSaveModalOpen: false,
      isCloseAdminSettingsActive: false,
    };
  },

  computed: {
    ...mapState("admin", ["email", "phone", "address"]),
  },

  mounted() {
    this.getUserDetail();
  },

  methods: {
    ...mapActions("admin", [
      "getUserDetail",
      "changeEmail",
      "changePhone",
      "changeAddress",
      "saveNewEmail",
      "saveNewPhone",
    ]),

    ...mapGetters("admin", ["isStateChanged"]),

    showLogOutPermission() {
      this.$emit("showLogOutPermission");
    },
    closeAdminSettings() {
      if (this.isStateChanged()) {
        this.isSaveModalOpen = true;
        this.isCloseAdminSettingsActive = true;
      } else {
        this.$emit("close-admin-settings");
      }
    },
    handleSaveModal() {
      if (this.isStateChanged()) {
        this.isSaveModalOpen = true;
      }
    },
    makeDecision(isDecisionMade) {
      if (isDecisionMade && this.isCloseAdminSettingsActive) {
        this.$emit("close-admin-settings");
      }
      this.isCloseAdminSettingsActive = false;
      this.isSaveModalOpen = false;
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
