<template>
  <AdminSettingsSlot :header-string="'Zmeniť jazyk'">
    <ul class="font-bold">
      <LanguagesList />
    </ul>
  </AdminSettingsSlot>
  <AdminSettingsSlot
    :header-string="'Prihlasovacie údaje'"
    :is-login-data="true"
  >
    <editable-value
      :inputData="{
        value: email,
        label: `E-mail:`,
        inputName: `email`,
      }"
      @edit-value="(newEmail) => changeEmail(newEmail)"
      @save-edited-value="saveNewEmail"
      @restore-edited-value="restoreEmail"
      @open-save-modal="handleSaveModal"
    />
    <p
      class="text-lg font-medium underline underline-offset-2 hover:text-main-color-500 hover:cursor-pointer"
    >
      Zmeniť heslo
    </p>
  </AdminSettingsSlot>
  <AdminSettingsSlot :header-string="'Kontaktné údaje'">
    <editable-value
      :inputData="{
        value: phone,
        label: `Tel. č.:`,
        inputName: `phone`,
      }"
      @edit-value="(newPhone) => changePhone(newPhone)"
      @save-edited-value="saveNewPhone"
      @restore-edited-value="restorePhone"
      @open-save-modal="handleSaveModal"
    />

    <editable-value
      :inputData="{
        value: address,
        label: `Adresa:`,
        inputName: `address`,
      }"
      @edit-value="(newAddress) => changeAddress(newAddress)"
      @save-edited-value="saveNewAddress"
      @restore-edited-value="restoreAddress"
      @open-save-modal="handleSaveModal"
    />
  </AdminSettingsSlot>
  <div class="flex flex-col m-auto sm:w-1/2">
    <div>
      <h3 @click="showLogOutPermission" class="clickable">Odhlásiť sa</h3>
    </div>
  </div>
</template>

<script>
import AdminSettingsSlot from "@/components/admin/main-navbar/AdminSettingsSlot";
import LanguagesList from "@/components/LanguagesList";
import EditableValue from "@/components/admin/EditableValue";
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "AdminSettingsBody",
  components: {
    AdminSettingsSlot,
    LanguagesList,
    EditableValue,
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
      "saveNewAddress",
      "restoreEmail",
      "restorePhone",
      "restoreAddress",
    ]),

    ...mapGetters("admin", ["isStateChanged"]),
  },
  showLogOutPermission() {
    this.$emit("showLogOutPermission");
  },
  handleSaveModal() {
    this.$emit("handleSaveModal");
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
