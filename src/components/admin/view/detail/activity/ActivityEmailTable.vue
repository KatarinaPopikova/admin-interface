<template>
  <table-design
    :colspan-count="2"
    :table-name="'Emails'"
    :current="current"
    :total="total"
    @page-changed="changePage"
  >
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
      current: 1,
      total: 0,
    };
  },
  methods: {
    log() {
      console.log("log");
    },
    changePage(page) {
      this.getEmails(page);
    },
    async getEmails(page) {
      this.current = page;
      await fetch("/json/tables-data.json")
        .then((resp) => resp.json())
        .then((json) => {
          this.emails = json.emails.results[page - 1].emails;
          this.total = json.emails.total_pages;
        });
    },
  },
  mounted() {
    this.getEmails(1);
  },
};
</script>

<style scoped></style>
