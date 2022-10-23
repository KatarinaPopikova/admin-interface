<template>
  <tr>
    <td colspan="4">
      <button
        class="text-sm px-3 py-1 m-3 has-radius rounded-md bg-gray-200 hover:bg-gray-300 shadow-sm"
      >
        Date picker
      </button>
      <button
        class="text-sm px-3 py-1 m-3 has-radius rounded-md bg-gray-200 hover:bg-gray-300 shadow-sm"
      >
        Search bar
      </button>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RowPicker",
});
</script>

<style scoped></style>
