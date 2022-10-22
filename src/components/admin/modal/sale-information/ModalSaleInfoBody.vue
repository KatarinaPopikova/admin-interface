<template>
  <div class="px-8 pb-8">
    <div>
      <button
        class="text-sm px-3 py-1 mb-3 has-radius rounded-md bg-gray-200 hover:bg-gray-300 shadow-sm"
      >
        Resend email
      </button>
    </div>

    <editable-value
      :inputData="{
        value: 'sample@sample.com',
        label: `Email:`,
        inputName: `email`,
      }"
      @edit-value="(newPhone) => methodToDo"
      @save-edited-value="methodToDo"
      @restore-edited-value="methodToDo"
      @open-save-modal="methodToDo"
    />

    <editable-value
      :inputData="{
        value: 'Paid',
        label: `State:`,
        inputName: `state`,
      }"
      @edit-value="(newPhone) => methodToDo"
      @save-edited-value="methodToDo"
      @restore-edited-value="methodToDo"
      @open-save-modal="methodToDo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditableValue from "@/components/admin/EditableValue.vue";

export default defineComponent({
  name: "ModalSaleInfoBody",
  components: { EditableValue },
  methods: {
    methodToDo() {
      console.log("TODO");
    },
  },
});
</script>

<style scoped></style>
