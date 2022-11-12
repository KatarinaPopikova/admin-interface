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
  @apply font-bold !important;
}
#headlessui-popover-panel-2 > div {
  @apply -left-8 md:left-0 right-auto  !important;
}

.vtd-datepicker.place-right:before {
  @apply left-9 md:left-5  !important;
}
.vtd-datepicker.place-left:before {
  @apply left-9 md:left-5  !important;
}
</style>
