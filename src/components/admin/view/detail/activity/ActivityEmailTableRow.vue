<template>
  <tr class="border-b border-gray-200 hover:bg-gray-100">
    <td class="py-3 text-left whitespace-nowrap block ml-4">
      {{ email }}
    </td>
    <td class="py-3 px-6 text-center">
      <div class="w-4">
        <router-link
          :to="`/${$i18n.locale}/admin/${this.$route.params.id}/activity/email/${email_id}`"
        >
          <font-awesome-icon
            icon="fa-regular fa-pen-to-square"
            title="Open email editor"
            class="input-manager-icon"
          />
        </router-link>
      </div>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActivityEmailTableRow",
  props: {
    email: {
      type: String,
    },
    email_id: {
      type: Number,
    },
  },
});
</script>

<style scoped>
.input-manager-icon {
  @apply self-end pr-4 h-5 w-5 text-main-color-400 hover:text-main-color-500 hover:cursor-pointer;
}
</style>
