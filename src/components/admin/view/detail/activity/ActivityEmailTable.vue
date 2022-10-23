<template>
  <div class="overflow-x-auto">
    <div
      class="max-w-screen-2xl bg-gray-100 flex items-center justify-center bg-gray-100 overflow-hidden m-auto"
    >
      <div class="w-full lg:w-5/6 m-3">
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
                @save-edited-value="console.log(saveNewPhone)"
                @restore-edited-value="console.log(restorePhone)"
                @open-save-modal="console.log(handleSaveModal)"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityEmailTableRow from "@/components/admin/view/detail/activity/ActivityEmailTableRow";
export default {
  name: "EmailTable",
  components: { ActivityEmailTableRow },
};
</script>

<style scoped></style>
