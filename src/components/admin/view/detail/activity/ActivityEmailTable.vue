<template>
  <table-design :colspan-count="2" :table-name="'Emails'">
    <activity-email-table-row
      class="even:bg-gray-50"
      v-for="(email, index) in emails"
      :key="index"
      :email="email.email"
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
  data() {
    return {
      emails: [],
    };
  },
  methods: {
    log() {
      console.log("log");
    },
  },
  async mounted() {
    await fetch("/json/tables-data.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.emails = json.emails;
      });
  },
};
</script>

<style scoped></style>
