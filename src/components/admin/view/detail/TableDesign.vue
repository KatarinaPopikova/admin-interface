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
                <th
                  :colspan="colspanCount"
                  class="py-3 px-6 text-left rounded-t-md"
                >
                  {{ tableName }}
                </th>
              </tr>
            </thead>
            <tbody>
              <slot></slot>
            </tbody>
          </table>
          <TablePagination :current="current" :total="total" v-if="total > 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TablePagination from "@/components/admin/view/detail/TablePagination.vue";

export default defineComponent({
  name: "TableDesign",
  components: { TablePagination },
  props: {
    colspanCount: {
      type: Number,
    },
    tableName: {
      type: String,
    },
    current: {
      type: Number,
    },
    total: {
      type: Number,
    },
  },
});
</script>

<style scoped></style>
