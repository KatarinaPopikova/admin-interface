<template>
  <tr>
    <td colspan="4">
      <div class="flex flex-row mt-2">
        <div class="w-1/2 m-1 md:w-1/3">
          <date-picker @updated-date="filterAccordingDate" />
        </div>
        <search-bar />
      </div>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";
import DatePicker from "@/components/admin/view/DatePicker.vue";
import SearchBar from "@/components/admin/view/SearchBar.vue";

export default defineComponent({
  name: "RowPicker",
  components: {
    DatePicker,
    SearchBar,
  },
  data() {
    return {
      dateValue: String,
    };
  },
  methods: {
    filterAccordingDate(newDate) {
      this.dateValue = newDate;
      console.log(this.dateValue);
    },
  },
});
</script>

<style scoped></style>
