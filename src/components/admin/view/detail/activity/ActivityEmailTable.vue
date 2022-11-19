<template>
  <table-design :colspan-count="2" :table-name="'Emails'">
    <activity-email-table-row
      class="even:bg-gray-50"
      v-for="index in 5"
      :key="index"
      email="example@email.com"
      :email_id="index"
      @edit-value="(newPhone) => console.log(newPhone)"
      @save-edited-value="log"
      @restore-edited-value="log"
      @open-save-modal="log"
    />
  </table-design>
</template>

<script>
import ActivityEmailTableRow from "@/components/admin/view/detail/activity/ActivityEmailTableRow";
import TableDesign from "@/components/admin/view/detail/TableDesign";
export default {
  name: "EmailTable",
  components: { TableDesign, ActivityEmailTableRow },
  methods: {
    log() {
      console.log("asdasdas");
    },
  },
};
</script>

<style scoped></style>
