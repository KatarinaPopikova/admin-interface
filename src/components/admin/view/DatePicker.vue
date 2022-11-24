<template>
  <vue-tailwind-datepicker
    :i18n="$i18n.locale"
    :formatter="formatter"
    :options="`${$i18n.locale}` === 'sk' ? options : undefined"
    v-model="dateValue"
    @update:modelValue="updatedDate"
  />
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "DatePicker",
  data() {
    return {
      dateValue: {
        startDate: "",
        endDate: "",
      },
      formatter: {
        value: "YYYY/MM/DD",
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

      months_in_sk: {
        ["máj"]: "05",
        ["jún"]: "06",
        ["júl"]: "07",
        ["okt"]: "10",
      },
    };
  },
  methods: {
    updatedDate() {
      let dateRange = [
        this.parseDate(this.dateValue.startDate),
        this.parseDate(this.dateValue.endDate),
      ];
      this.$emit("filter-date", dateRange);
    },

    parseDate(date) {
      if (date === "") return "";
      let dateToSave = dayjs(date).format("YYYY-MM-DD");
      if (dateToSave === "Invalid Date") {
        let dateSplit = this.dateValue.startDate.split(" ");
        let monthCount = this.months_in_sk[dateSplit[1]];
        dateToSave = `${dateSplit[2]}-${monthCount}-${dateSplit[0]}`;
      }

      return dateToSave;
    },
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
