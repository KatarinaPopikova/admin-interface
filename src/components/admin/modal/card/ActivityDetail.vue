<template>
  <modal-card-body />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalCardBody from "@/components/admin/modal/card/ModalCardBody.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "ModalCard",
  components: { ModalCardBody },
  mounted() {
    this.getActivities();
  },
  methods: {
    ...mapActions("activity", ["getActivities"]),
  },
});
</script>
<style scoped></style>
