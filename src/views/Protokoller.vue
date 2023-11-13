<template>
  <div class="grid grid-cols-5 items-center w-full bg-kfe-secondary">
    <div class="flex items-center gap-1 ml-32 col-span-2">
      <i class="fa-solid fa-magnifying-glass text-kfe-base "></i>
      <input class="rounded m-1 text-gray-900 bg-kfe-base" autofocus type="text" id="filter-text-box"
        placeholder="Søg i hele tabellen..." v-on:input="onFilterTextBoxChanged()">
      <span class="text-gray-700 font-light italic text-sm ">
        Antal Protokoller:
        {{ rowNumbers }}
      </span>
    </div>
    <h2 class="col-start-3 text-gray-700 text-xl justify-center ">Protokoller </h2>
    <div class="flex content-center col-start-4">

      <button class="ml-2 mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
        hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" restoreFromHardCodedA()">
        Team A
      </button>
      <button class=" mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
        hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" restoreFromHardCodedB()">
        Team B
      </button>
      <button class=" mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
        hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" restoreFromHardCodedC()">
        Team C
      </button>
      <button class=" mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
        hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" restoreFromHardCodedD()">
        Team D
      </button>
      <button class=" mr-16 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
        hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" restoreFromHardCodedF()">
        Fælles
      </button>
      <button class=" mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
        hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" restoreFromHardCoded()">
        "I gang"
      </button>
    </div>
    <div class="flex col-start-5">
      <button class="ml-[155px] mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
        hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" resetFilters()">
        Nulstil Filtre
      </button>
      <router-link :to=" { name: 'ProtokolOpret' } ">
        <button
          class="my-1 py-1 px-2 text-xs font-bold tracking-wider  flex-none bg-kfe-primary text-kfe-base hover:text-kfe-secondary duration-150 cursor-pointer rounded-md">
          Tilføj Protokol
        </button>
      </router-link>

    </div>
  </div>
  <div class="px-32">
    <ag-grid-vue class="ag-theme-balham w-full h-[80vh]  " :columnDefs=" columnDefs " :rowData=" datatable "
      :defaultColDef=" defaultColdDef.def " @grid-ready=" onGridReady " rowSelection="multiple" animateRows="true"
      :pagination=" true " paginationPageSize="100000" @rowClicked=" onRowClicked
        " @modelUpdated=" onModelUpdated ">
    </ag-grid-vue>
  </div>
</template>
  
<script setup lang="ts">
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { AgGridVue } from "ag-grid-vue3";
import { ref } from 'vue';
import axios from 'axios';
import router from "../router";
import { useloggedInStore } from '../stores/loggedInStore';

const loginName = useloggedInStore()
const datatable = ref('')
const defaultColdDef = ref({
  def: { sortable: true, filter: true, flex: 1 }
})

const gridColumnApi = ref();
const gridApi = ref();
const rowNumbers = ref()


// Obtain API from grid's onGridReady event
const onGridReady = (params: any) => {
  gridApi.value = params.api;
  gridColumnApi.value = params.columnApi;
  // restoreFromHardCoded()
}


axios.post('http://localhost:5000/protokoller', {
  RM_ID: loginName.userId
}).then((response) => {
  datatable.value = response.data;
});

const onFilterTextBoxChanged = () => {
  gridApi.value.setQuickFilter(
    document.getElementById('filter-text-box').value
  );
};

const restoreFromHardCoded = () => {
  var hardcodedFilter = {
    Protokolstatus: {
      type: 'startsWith',
      filter: ['i gang,'],
    },
  };
  gridApi.value.setFilterModel(hardcodedFilter);

}
const restoreFromHardCodedA = () => {
  var hardcodedFilter = {
    Diagnosegruppe: {
      type: 'startsWith',
      filter: ['A'],
    },

  };
  gridApi.value.setFilterModel(hardcodedFilter);

}
const restoreFromHardCodedB = () => {
  var hardcodedFilter = {
    Diagnosegruppe: {
      type: 'startsWith',
      filter: ['B'],
    },

  };
  gridApi.value.setFilterModel(hardcodedFilter);

}
const restoreFromHardCodedC = () => {
  var hardcodedFilter = {
    Diagnosegruppe: {
      type: 'startsWith',
      filter: ['C'],
    },

  };
  gridApi.value.setFilterModel(hardcodedFilter);

}
const restoreFromHardCodedD = () => {
  var hardcodedFilter = {
    Diagnosegruppe: {
      type: 'startsWith',
      filter: ['D'],
    },

  };
  gridApi.value.setFilterModel(hardcodedFilter);

}
const restoreFromHardCodedF = () => {
  var hardcodedFilter = {
    Diagnosegruppe: {
      type: 'startsWith',
      filter: ['Fælles'],
    },

  };
  gridApi.value.setFilterModel(hardcodedFilter);

}



function resetFilters() {
  gridApi.value.setFilterModel(null)
}
function onModelUpdated(event: any) {
  rowNumbers.value = event.api.getDisplayedRowCount();
}

function onRowClicked(params: any) {
  router.push('/KfeNr/' + params.node.data.KFE_Nr)
}

const columnDefs: Array<any> = [
  { headerName: 'KFE Nr', field: "KFE_Nr" },
  { headerName: 'Kaldenavn', field: "Kaldenavn" },
  { headerName: 'Startdato', field: 'StartDato' },
  { headerName: 'Slutdato', field: 'SlutDato' },
  { headerName: 'Diagnose', field: 'Diagnose' },
  { headerName: 'Team', field: 'Diagnosegruppe' },
  { headerName: 'Behandlingstype', field: 'Behandlingstype' },
  { headerName: 'Status', field: "Protokolstatus" }
]

</script>