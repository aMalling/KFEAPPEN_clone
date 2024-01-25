<template>
  <div class="w-full justify-center">
    <DataTable
      :columnDefs="columnDefs"
      :linkToData="linkToData"
      :pageName="pageName"
      :onlyTable="onlyTable"
      :showOpretBtn="showOpretBtn"
      :start-filter="startFilter"
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

const customClasses: string = "w-full h-[80vh] ";

const linkToData: string = "http://localhost:5000/standard_behandling";

const pageName: string = "Standardbehandling";

const onlyTable: boolean = false;

const showOpretBtn: boolean = true;
</script>
