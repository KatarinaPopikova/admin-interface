<template>
  <summary-detail-info />
  <summary-sale-table />
</template>

<script>
import SummarySaleTable from "@/components/admin/view/detail/summary/SummarySaleTable";
import SummaryDetailInfo from "@/components/admin/view/detail/summary/SummaryDetailInfo";
export default {
  name: "SummaryDetail",
  components: { SummarySaleTable, SummaryDetailInfo },
};
</script>

<style scoped></style>
