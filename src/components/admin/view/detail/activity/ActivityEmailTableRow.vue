<template>
  <tr class="border-b border-gray-200 hover:bg-gray-100">
    <td class="py-3 text-left whitespace-nowrap">
      <input
        :value="`${email}`"
        @change="editEmail($event.target.value)"
        onkeydown="this.style.width = (this.value.length + 2 ) + 'ch';"
        v-bind:style="{ width: email.length + 2 + 'ch' }"
        v-bind:class="{
          'outline-none text-gray-500': !editable,
          'border-2 border-black': editable,
        }"
        :readonly="!editable"
        :name="email"
        class="bg-transparent block ml-4 pl-1.5 p-0.5 rounded-lg"
      />
    </td>
    <td class="py-3 px-6 text-center">
      <div class="w-4">
        <router-link
          :to="`/${$i18n.locale}/admin/${this.$route.params.id}/activity/email/${email_id}`"
        >
          <font-awesome-icon
            icon="fa-regular fa-pen-to-square"
            title="Edit"
            v-if="!editable"
            class="input-manager-icon"
            @click="startEditInputArea"
          />
        </router-link>
      </div>
      <div class="w-4 flex">
        <font-awesome-icon
          icon="fa-solid fa-check"
          title="Save"
          v-if="editable"
          class="input-manager-icon"
          @click="saveEditedInputArea"
        />

        <font-awesome-icon
          icon="fa-solid fa-xmark"
          title="Do not save"
          v-if="editable"
          class="input-manager-icon"
          @click="restoreEditedInputArea"
        />
      </div>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActivityEmailTableRow",
  props: {
    email: {
      type: String,
    },
    email_id: {
      type: Number,
    },
  },
  data() {
    return {
      editable: false,
    };
  },

  beforeUnmount() {
    console.log("save");
  },
  methods: {
    startEditInputArea() {
      this.editable = true;
    },
    saveEditedInputArea() {
      this.editable = false;
      this.$emit("save-edited-value");
    },
    restoreEditedInputArea() {
      this.editable = false;
      this.$emit("restore-edited-value");
    },
    editEmail(editedValue) {
      this.$emit("edit-value", editedValue);
    },
  },
});
</script>

<style scoped>
.input-manager-icon {
  @apply self-end pr-4 h-5 w-5 text-main-color-400 hover:text-main-color-500 hover:cursor-pointer;
}
</style>
