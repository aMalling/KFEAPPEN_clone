
<template>
  <div class="w-full justify-center">

    <div class="grid grid-cols-5 items-center w-full bg-kfe-secondary">
      <div class="flex items-center gap-1 ml-32 col-span-2">
        <i class="fa-solid fa-magnifying-glass text-kfe-base "></i>
        <input class="rounded m-1 bg-kfe-base text-gray-900 " autofocus type="text" id="filter-text-box"
          placeholder="Søg i hele tabellen..." v-on:input="onFilterTextBoxChanged()">
        <span class="text-gray-700 font-light italic text-sm ">
          Antal Protokoller:
          {{ rowNumbers }}
        </span>
      </div>



      <h2 class="col-start-3  text-gray-700 text-xl justify-center ">Inklusionsstatistik {{ date }} </h2>
      <div class=" col-start-4 cole-span-2 flex ">
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

        </div>
        <div class="flex col-start-5">
          <button class="ml-[155px] mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
  hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" resetFilters()">
            Nulstil Filtre
          </button>
        </div>
      </div>
    </div>
    <div class="px-32">
      <div class="grid grid-cols-4 gap-2 mb-2">
        <div>
          <p class="text-gray-700 italic text-md p-1 "> Patienter inkluderet <span class="font-semibold font">i
              alt</span>: </p>
          <apexchart class="border-2" type="line" :options=" options2 " :series=" series "></apexchart>
          <!--   <p v-for="       item       in       datatable       ">{{ parseDateISO(item.StartDato) }}</p -->
        </div>
        <div>
          <p class="text-gray-700 italic text-md p-1 "> Patienter inkluderet i <span
              class="font-semibold font">firma</span>
            protokoller: </p>

          <apexchart class="border-2" type="line" :options=" options2 " :series=" series2 "></apexchart>
          <!--   <p v-for="       item       in       datatable       ">{{ parseDateISO(item.StartDato) }}</p -->
        </div>
      </div>
      <ag-grid-vue class="w-full h-[80vh] ag-theme-balham" :columnDefs=" columnDefs " :rowData=" datatable "
        :defaultColDef=" defaultColdDef.def " rowSelection="multiple" @grid-ready=" onGridReady " animateRows="true"
        @rowClicked=" onRowClicked " tooltipShowDelay="250" @modelUpdated=" onModelUpdated ">
      </ag-grid-vue>
    </div>
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
import parseDatatableStringToShortDates from '../helpers/ParseDatatableStringToShortDate.ts'

const loginName = useloggedInStore()
const datatable = ref('')
const datatable2 = ref('')
const defaultColdDef = ref({
  def: { sortable: true, filter: true, flex: 1 }
})
const inkl_5_aar_data = ref('')
const inkl_5_aar_aar = ref('')


const gridColumnApi = ref();
const gridApi = ref(); // Optional - for accessing Grid's API
const rowNumbers = ref()

// Obtain API from grid's onGridReady event
const onGridReady = (params: any) => {
  gridApi.value = params.api;
  gridColumnApi.value = params.columnApi;
}

axios.post('http://localhost:5000/inkl-data', {
  RM_ID: loginName.userId
}).then((response) => {
  //loop igennem response.data og pars med isoparse jeg har lavet
  datatable.value = response.data
  parseDatatableStringToShortDates(datatable, "StartDato")

});

axios.post('http://localhost:5000/inkl_5_aar', {
  RM_ID: loginName.userId
}).then((response) => {
  //loop igennem response.data og pars med isoparse jeg har lavet
  datatable2.value = response.data
  inkl_5_aar_data.value = splitarrayOfObjectsToArraysOfObjects(response.data, "Antal60")
  inkl_5_aar_aar.value = splitarrayOfObjectsToArraysOfObjects(response.data, "YearStart")

});


const onFilterTextBoxChanged = () => {
  gridApi.value.setQuickFilter(
    document.getElementById('filter-text-box').value
  );
};

function onModelUpdated(event: any) {
  rowNumbers.value = event.api.getDisplayedRowCount();

}

function splitarrayOfObjectsToArraysOfObjects(oldarray: Array<object>, key: string) {
  const result = oldarray.map(itemOldarray => {
    const resultToReturn = itemOldarray[key]
    return resultToReturn;
  });
  return result;
}


const restoreFromHardCodedA = () => {
  var hardcodedFilter = {
    Diagnosegruppe: {
      type: 'startsWith',
      filter: ['A'],
    },
    Protokolstatus: {
      type: 'startsWith',
      filter: ['i gang,'],
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
    Protokolstatus: {
      type: 'startsWith',
      filter: ['i gang,'],
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
    Protokolstatus: {
      type: 'startsWith',
      filter: ['i gang,'],
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
    Protokolstatus: {
      type: 'startsWith',
      filter: ['i gang,'],
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
    Protokolstatus: {
      type: 'startsWith',
      filter: ['i gang,'],
    },
  };
  gridApi.value.setFilterModel(hardcodedFilter);

}

function resetFilters() {
  gridApi.value.setFilterModel(null)
}

function onRowClicked(params: any) {
  router.push('/KfeNr/' + params.node.data.KFE_Nr)
}





//data taget 14/12/2023 ændre data til live data og ændre options til option1
const series: Array<object> = [{
  name: 'inkluderede patienter',
  /* data: inkl_5_aar_data */
  data: [532, 481, 730, 667, 785]
}];
const series2: Array<object> = [{
  name: 'inkluderede patienter',
  data: [26, 9, 8, 1, 7]
}];

//convert dataformat TODO refactor this function  
const parseDateISO = (date1: any) => {
  const date2 = Date.parse(date1)
  let date3 = new Date(date2)
  const date4 = (date3.getDate() + "-" + (date3.getMonth() + 1) + "-" + date3.getFullYear())
  return date4;
}



const current = new Date();
const date = `${ current.getDate() }/${ current.getMonth() + 1 }/${ current.getFullYear() }`;

const options: any = ref({
  chart: {
    id: 'Inklusionsstatistik '
  },
  xaxis: {
    categories: [current.getFullYear() - 5, current.getFullYear() - 4, current.getFullYear() - 3, current.getFullYear() - 2, current.getFullYear() - 1, current.getFullYear()],
  },
  dataLabels: {
    enabled: true,
  }
})

const options2: any = ref({
  chart: {
    id: 'Inklusionsstatistik '
  },
  xaxis: {
    categories: [2019, 2020, 2021, 2022, 2023],
  },
  dataLabels: {
    enabled: true,
  }
})


const columnDefs: Array<any> = [
  { headerName: 'Team', field: 'Diagnosegruppe', cellStyle: { 'background-color': 'rgb(114, 192, 228, 0.5)' } },
  { headerName: 'Diagnose', field: 'Diagnose', tooltipField: 'StartDato' },
  { headerName: 'KFE Nr', field: "KFE_Nr", cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Kaldenavn', field: "Kaldenavn", tooltipField: "Kaldenavn", cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Fase', field: 'Fase', cellStyle: { 'background-color': 'rgb(114, 192, 228, 0.5)' } },
  { headerName: 'Initiering', field: 'Initiering', cellStyle: { 'background-color': 'rgb(114, 192, 228, 0.5)' } },
  { headerName: 'Inkl.start', type: 'dateColumn', field: 'StartDato', tooltipField: 'StartDato', cellStyle: { 'background-color': 'rgb(114, 192, 228, 0.5)' } },
  { headerName: 'Investigator', field: 'InvNavn', tooltipField: 'InvNavn' },
  { headerName: 'InvRolle', field: 'InvRolle' },
  { headerName: 'Pspl', field: "PsplNavn", tooltipField: "PsplNavn" },
  { headerName: 'Forventet inkl. Pr år', field: 'ForvAntalPatienter_PrAar', cellStyle: { 'background-color': 'rgb(63, 124, 172, 0.6)' } },
  { headerName: 'Forventet inkl. i alt', field: 'ForvAntalPatienter_Ialt', cellStyle: { 'background-color': 'rgb(63, 124, 172, 0.6)' } },
  { headerName: 'Inkl. seneste 2 mdr', field: 'Antal36', cellStyle: { 'background-color': 'rgb(133, 204, 89, 0.5)' } },
  { headerName: 'Inkl. seneste 12 mdr', field: 'Antal60', cellStyle: { 'background-color': 'rgb(133, 204, 89, 0.5)' } },
  { headerName: 'Inkl. Total', field: 'AntalPatienter', cellStyle: { 'background-color': 'rgb(133, 204, 89, 0.5)' } },

]

</script>
