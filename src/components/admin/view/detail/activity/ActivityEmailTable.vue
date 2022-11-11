<template>
  <div class="overflow-x-auto">
    <div
      class="max-w-screen-2xl bg-gray-100 flex items-center justify-center bg-gray-100 overflow-hidden m-auto"
    >
      <div class="table-size">
        <div class="bg-white shadow-md my-6 rounded-md">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200">
                <th colspan="2" class="py-3 px-6 text-left rounded-t-md">
                  Emails
                </th>
              </tr>
            </thead>
            <tbody>
              <activity-email-table-row
                class="even:bg-gray-50"
                v-for="index in 5"
                :key="index"
                email="example@email.com"
                @edit-value="(newPhone) => console.log(newPhone)"
                @save-edited-value="log"
                @restore-edited-value="log"
                @open-save-modal="log"
                @show-email="handleEmail(true)"
                @close-email="handleEmail(false)"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <EmailReader v-if="showEmail" />
  </div>
</template>

<script>
import ActivityEmailTableRow from "@/components/admin/view/detail/activity/ActivityEmailTableRow";
import EmailReader from "@/components/admin/view/detail/activity/EmailReader";
export default {
  name: "EmailTable",
  components: { EmailReader, ActivityEmailTableRow },
  data() {
    return {
      showEmail: false,
    };
  },
  methods: {
    handleEmail(showEmail) {
      this.showEmail = showEmail;
    },
    log() {
      console.log("asdasdas");
    },
  },
};
</script>

<style scoped></style>
