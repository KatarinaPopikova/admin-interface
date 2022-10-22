<template>
  <tr class="border-b border-gray-200 hover:bg-gray-100 hover:cursor-pointer">
    <td class="py-3 text-left whitespace-nowrap">
      <input
        :value="`${date}`"
        @change="editEmail($event.target.value)"
        onkeydown="this.style.width = (this.value.length + 2 ) + 'ch';"
        v-bind:style="{ width: date.length + 1 + 'ch' }"
        v-bind:class="{
          'outline-none text-gray-500': !editable,
          'border-2 border-black': editable,
        }"
        :readonly="!editable"
        :name="date"
        class="bg-transparent block ml-4 pl-1.5 p-0.5 rounded-lg"
      />
    </td>
    <td class="py-3 text-left whitespace-nowrap">
      <input
        :value="`${email}`"
        @change="editEmail($event.target.value)"
        onkeydown="this.style.width = (this.value.length + 2 ) + 'ch';"
        v-bind:style="{ width: email.length + 1 + 'ch' }"
        v-bind:class="{
          'outline-none text-gray-500': !editable,
          'border-2 border-black': editable,
        }"
        :readonly="!editable"
        :name="email"
        class="bg-transparent block ml-4 pl-1.5 p-0.5 rounded-lg"
      />
    </td>
    <td class="py-3 text-left whitespace-nowrap">
      <input
        :value="`${paid}`"
        @change="editEmail($event.target.value)"
        onkeydown="this.style.width = (this.value.length + 2 ) + 'ch';"
        v-bind:style="{ width: paid.length + 1 + 'ch' }"
        v-bind:class="{
          'outline-none text-gray-500': !editable,
          'border-2 border-black': editable,
        }"
        :readonly="!editable"
        :name="paid"
        class="bg-transparent block ml-4 pl-1.5 p-0.5 rounded-lg"
      />
    </td>
    <td class="py-3 text-left whitespace-nowrap">
      <input
        :value="`${price}`"
        @change="editEmail($event.target.value)"
        onkeydown="this.style.width = (this.value.length + 2 ) + 'ch';"
        v-bind:style="{ width: price.length + 1 + 'ch' }"
        v-bind:class="{
          'outline-none text-gray-500': !editable,
          'border-2 border-black': editable,
        }"
        :readonly="!editable"
        :name="price"
        class="bg-transparent block ml-4 pl-1.5 p-0.5 rounded-lg"
      />
    </td>
  </tr>
</template>

<script>
export default {
  name: "SummarySaleTableRow",
  props: {
    date: {
      type: String,
    },
    email: {
      type: String,
    },
    paid: {
      type: String,
    },
    price: {
      type: String,
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
};
</script>

<style scoped></style>
