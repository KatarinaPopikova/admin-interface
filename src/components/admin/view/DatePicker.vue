<template>
  <vue-tailwind-datepicker
    :i18n="$i18n.locale"
    :formatter="formatter"
    :options="`${$i18n.locale}` === 'sk' ? options : undefined"
    v-model="dateValue"
  />
</template>

<script>
export default {
  name: "DatePicker",
  data() {
    return {
      dateValue: "",
      formatter: {
        date: "DD MMM YYYY",
        month: "MMM",
      },

      options: {
        shortcuts: {
          today: "Dnes",
          yesterday: "Včera",
          past: (period) => " Posledných " + period + " dní",
          currentMonth: "Tento mesiac",
          pastMonth: "Minulý mesiac",
        },
        footer: {
          apply: "Použiť",
          cancel: "Zrušiť",
        },
      },
    };
  },
};
</script>

<style>
.vtd-shortcuts {
  font-weight: bold !important;
}
</style>
