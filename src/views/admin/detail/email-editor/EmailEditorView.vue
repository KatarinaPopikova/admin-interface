<template>
  <div class="relative">
    <div class="-top-8 right-2 absolute">
      <router-link
        :to="`/${$i18n.locale}/admin/${this.$route.params.id}/activity`"
      >
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          title="Back"
          class="text-main-color-400 hover:text-main-color-500 hover:cursor-pointer h-10 w-10 mr-7"
        />
      </router-link>
    </div>
    <EmailReader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmailReader from "@/components/admin/view/detail/activity/EmailReader.vue";

export default defineComponent({
  name: "EmailEditorView",
  components: { EmailReader },
});
</script>

<style scoped></style>
