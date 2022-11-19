<template>
  <tr class="border-b border-gray-200 hover:bg-gray-100 hover:cursor-pointer">
    <td class="py-3 text-left whitespace-nowrap block ml-4">
      {{ date }}
    </td>
    <td class="py-3 text-left whitespace-nowrap">
      {{ email }}
    </td>
    <td class="py-3 text-left whitespace-nowrap">
      <span class="flex items-center">
        <font-awesome-icon icon="fa-solid fa-square-check" class="pr-1.5" />
        {{ paid }}
      </span>
    </td>
    <td class="py-3 text-left whitespace-nowrap">
      {{ price }}
    </td>
  </tr>
</template>

<script lang="ts">
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
};
</script>

<style scoped></style>
