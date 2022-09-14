<template>
  <div class="text-left p-5">
    <div>
      <font-awesome-icon
        icon="fa-solid fa-arrow-left"
        @click="openAdminSettings"
        class="text-main-color-400 hover:text-main-color-500 hover:cursor-pointer h-10 w-10"
      />
    </div>
    <div>
      <h3>Prihlasovacie údaje</h3>
      <p>{{ this.$store.state.activeLanguage }}</p>
      <p>Zmeniť e-mail</p>
      <p>Zmeniť heslo</p>
      <h3>Kontaktné údaje</h3>
      <h4>Tel. kontakt</h4>
      <p>0934234234</p>
      <h4>Adresa</h4>
      <p>Hlavná 21, 08404 Bratislava, Slovensko</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminSettings",
  methods: {
    openAdminSettings() {
      this.$emit("closeAdminSettings");
    },
  },
};
</script>

<style scoped></style>
