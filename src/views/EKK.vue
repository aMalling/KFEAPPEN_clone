<template>
  <div class="justify-center">
    <DataTable
      :columnDefs="columnDefs"
      :linkToData="linkToData"
      :pageName="pageName"
      :onlyTable="onlyTable"
      :start-filter="startFilter"
      :showOpretBtn="showOpretBtn"
      :customClasses="customClasses"
    >
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from "../components/DataTable.vue";

const columnDefs: Array<any> = [
  { headerName: "KFE Nr", field: "KFE_Nr" },
  { headerName: "Kaldenavn", field: "Kaldenavn" },
  { headerName: "Startdato", field: "StartDato" },
  { headerName: "Slutdato", field: "SlutDato" },
  { headerName: "Diagnose", field: "Diagnose" },
  { headerName: "Team", field: "Diagnosegruppe" },
  { headerName: "Behandlingstype", field: "Behandlingstype" },
  { headerName: "Status", field: "Protokolstatus" },
];

const linkToData: string = "http://localhost:5000/ekk";

const pageName: string = "EKK";

const onlyTable: boolean = false;

const showOpretBtn: boolean = true;

const customClasses: string = "w-full h-[80vh] ";
</script>
