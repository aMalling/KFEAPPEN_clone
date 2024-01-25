<template>
  <div class="static grid grid-cols-9 items-center w-full bg-kfe-secondary">
    <div class="flex items-center gap-1 ml-32 col-span-3">
      <i class="fa-solid fa-magnifying-glass text-kfe-base"></i>
      <input
        class="rounded m-1 text-gray-900 bg-kfe-base"
        autofocus
        type="text"
        id="filter-text-box"
        placeholder="Søg i hele tabellen..."
        v-on:input="onFilterTextBoxChanged()"
      />
      <span class="text-gray-700 font-light italic text-sm">
        Antal patienter:
        {{ rowNumbers }}
      </span>
    </div>
    <h2 class="col-start-5 text-gray-700 text-xl justify-center">
      Patientoversigt
    </h2>
    <div class="col-start-8 col-span-2 flex justify-center">
      <router-link :to="{ name: 'PatientOprettelse' }">
        <button
          class="ml-16 py-1 px-2 text-xs font-bold tracking-wider bg-kfe-primary text-kfe-base hover:text-kfe-secondary duration-150 cursor-pointer rounded-md"
        >
          Opret Patient
        </button>
      </router-link>
    </div>
  </div>
  <div class="px-32">
    <ag-grid-vue
      class="ag-theme-balham w-full h-screen"
      :columnDefs="columnDefs"
      :rowData="datatable"
      :defaultColDef="defaultColdDef.def"
      rowSelection="multiple"
      @grid-ready="onGridReady"
      animateRows="true"
      :pagination="true"
      paginationPageSize="100000"
      @cell-value-changed="onCellValueChanged"
      @modelUpdated="onModelUpdated"
    >
    </ag-grid-vue>
  </div>
</template>

<script setup lang="ts">
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { AgGridVue } from "ag-grid-vue3";
import { ref } from "vue";
import axios from "axios";
import { useloggedInStore } from "../stores/loggedInStore";
import datatable from "../dataPt";

const loginName = useloggedInStore();

const defaultColdDef = ref({
  def: { sortable: true, editable: true, filter: true, flex: 1 },
});

const gridColumnApi = ref();
const gridApi = ref(); // Optional - for accessing Grid's API
const rowNumbers = ref();

// Obtain API from grid's onGridReady event
const onGridReady = (params: any) => {
  gridApi.value = params.api;
  gridColumnApi.value = params.columnApi;
};

const onFilterTextBoxChanged = () => {
  gridApi.value.setQuickFilter(
    document.getElementById("filter-text-box").value
  );
};

function onModelUpdated(event: any) {
  rowNumbers.value = event.api.getDisplayedRowCount();
}

/* axios.post('http://localhost:5000/patientoversigt', {
  RM_ID: loginName.userId, Getting_data: 'Bobo'
}).then((response) => {
  datatable.value = response.data;
}); */

//TODO: rewrite full data once we have it
function onCellValueChanged(event: any) {
  axios.post("http://localhost:5000/patientoversigt", {
    tbl: "tbl_PatientBehandling",
    col: event.colDef.field,
    val: event.value,
    oldval: event.oldValue,
    row: "4",
    RM_ID: "Kir og Han",
    Getting_data: "edit",
  });

  // RM_ID edits = list of dicts {tbl, col, val, row, oldval}
}

const columnDefs: Array<any> = [
  { headerName: "Pt behandID", field: "PtBeh_ID" },
  { headername: "Navn", field: "Navn" },
  { headername: "Cpr Nr", field: "CprNr" },
  { headername: "Behandling_ID", field: "Behandling_ID" },
  { headerName: "KFE Nr", field: "KFE_Nr" },
  { headerName: "Kaldenavn", field: "Kaldenavn", editable: false },
  { headerName: "Titel", field: "Titel", editable: false },
  { headerName: "Diagnose", field: "Diagnose", editable: false },
  { headerName: "Team", field: "Diagnosegruppe", editable: false },
  {
    headerName: "BehandlingStart",
    field: "BehandlingStart",
    filter: "agDateColumnFilter",
  },
  {
    headerName: "Behandlingstype",
    field: "Behandlingstype",
    filter: "agNumberColumnFilter",
    editable: false,
  },
];
</script>
