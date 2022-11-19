<template>
  <div class="p-5 text-left">
    <div>
      <font-awesome-icon
        icon="fa-solid fa-arrow-left"
        @click="closeAdminSettings"
        class="text-center text-main-color-400 hover:text-main-color-500 hover:cursor-pointer h-10 w-10"
      />
    </div>
    <AdminSettingsBody
      @show-log-out-permission="showLogOutPermission"
      @handle-save-modal="handleSaveModal"
    />
  </div>

  <div>
    <modal-save-values v-if="isSaveModalOpen" @make-decision="makeDecision" />
  </div>
</template>

<script lang="ts">
import ModalSaveValues from "@/components/admin/modal/save-values/ModalSaveValues.vue";
import { defineComponent } from "vue";
import AdminSettingsBody from "@/components/admin/main-navbar/admin-settings/AdminSettingsBody.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "AdminSettings",
  components: {
    AdminSettingsBody,
    ModalSaveValues,
  },

  data() {
    return {
      isSaveModalOpen: false,
      isCloseAdminSettingsActive: false,
    };
  },

  methods: {
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

<style scoped></style>
