<template>
  <div
    id="modal-backdrop"
    @click.self="close"
    class="fixed inset-0 bg-opacity-20 bg-gray-800 flex justify-center items-center"
  >
    <div
      id="modal"
      class="has-radius rounded-2xl overflow-x-auto flex flex-col justify-between w-80 m-8 min-h-48 bg-white fixed"
    >
      <modal-header @close="close" />

      <modal-log-out-body @close="close" />
      <modal-log-out-footer @close="close" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalLogOutBody from "@/components/admin/modal/logOut/ModalLogOutBody.vue";
import ModalHeader from "@/components/admin/modal/ModalHeader.vue";
import ModalLogOutFooter from "@/components/admin/modal/logOut/ModalLogOutFooter.vue";

export default defineComponent({
  name: "ModalLogOut",
  components: { ModalLogOutFooter, ModalLogOutBody, ModalHeader },
  methods: {
    close() {
      this.$emit("closeLogOutModal");
    },
  },
});
</script>

<style scoped></style>
