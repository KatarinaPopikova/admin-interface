<template>
  <EmailReader />
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
