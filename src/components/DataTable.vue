<template>
    <div>
        <div v-if=" !props.onlyTable " class="grid grid-cols-5 items-center w-full bg-kfe-secondary">
            <div class="flex items-center gap-1 col-span-2 ml-32">
                <i class="fa-solid fa-magnifying-glass text-kfe-base "></i>
                <input class="text-gray-900 bg-kfe-base rounded m-1" autofocus type="text" id="filter-text-box"
                    placeholder="Søg i hele tabellen..." v-on:input="onFilterTextBoxChanged()">
                <span class="text-gray-700 font-light italic text-sm ">
                    Antal Protokoller:
                    {{ rowNumbers }}
                </span>
            </div>
            <h2 class="col-start-3 text-gray-700 text-xl justify-center ">{{ props.pageName }} </h2>
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
                <button class=" mr-10 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
  hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" restoreFromHardCodedF()">
                    Fælles
                </button>
                <button class=" mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
  hover:text-kfe-secondary duration-150 cursor-pointer rounded-md z-10" @click=" restoreFromHardCoded()">
                    Aktiv
                </button>
                <button class=" mr-2 my-1 py-1 px-2 text-xs whitespace-nowrap font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
  hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click=" resetFilters()">
                    Nulstil Filtre
                </button>
                <router-link v-if=" props.showOpretBtn " :to=" { name: `${ props.pageName }Opret` } ">
                    <button class=" my-1 py-1 whitespace-nowrap px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary
                    text-kfe-base hover:text-kfe-secondary duration-150 cursor-pointer rounded-md ">
                        Tilføj {{ props.pageName }}
                    </button>
                </router-link>
            </div>
        </div>
        <div class="px-32" v-if=" !props.onlyTable ">
            <ag-grid-vue class=" ag-theme-balham" :class=" props.customClasses " :columnDefs=" props.columnDefs "
                :rowData=" datatable " :defaultColDef=" defaultColdDef.def " rowSelection="multiple" animateRows="true"
                @grid-ready=" onGridReady " @modelUpdated=" onModelUpdated " @rowClicked=" onRowClicked "
                tooltipShowDelay="250" @cell-value-changed=" onCellValueChanged ">
            </ag-grid-vue>
        </div>
        <div v-if=" props.onlyTable ">
            <ag-grid-vue class=" ag-theme-balham" :class=" props.customClasses " :columnDefs=" props.columnDefs "
                :rowData=" datatable " :defaultColDef=" defaultColdDef.def " rowSelection="multiple" animateRows="true"
                @grid-ready=" onGridReady " @modelUpdated=" onModelUpdated " @cell-value-changed=" onCellValueChanged "
                @rowClicked=" onRowClicked " tooltipShowDelay="250">
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


const auth = useloggedInStore()
const loginName = useloggedInStore()

const datatable = ref('')
const defaultColdDef = ref({
    def: { sortable: true, filter: true, flex: 1 }
})
const gridColumnApi = ref();
const gridApi = ref(); // Optional - for accessing Grid's API
const rowNumbers = ref()

const props = defineProps(['columnDefs', 'linkToData', 'pageName', 'onlyTable', 'showOpretBtn', 'startFilter', 'customClasses'])

async function getDataAxios() {
    axios.post(props.linkToData, {
        RM_ID: auth.userId
    })
        .then((response) => {
            datatable.value = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            console.log("errormsg from axios call");
        })

};

const onGridReady = (params: any) => {
    gridApi.value = params.api;
    gridColumnApi.value = params.columnApi;
    restoreFromHardCoded()
}

const onFilterTextBoxChanged = () => {
    gridApi.value.setQuickFilter(
        document.getElementById('filter-text-box').value
    );
};


function onRowClicked(params: any) {
    if (params.node.data.KFE_Nr) {
        router.push('/KfeNr/' + params.node.data.KFE_Nr)
    }
}

getDataAxios()

const restoreFromHardCoded = () => {
    var hardcodedFilter = {
        Protokolstatus: {
            type: 'startsWith',
            filter: [props.startFilter],
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
        Protokolstatus: {
            type: 'startsWith',
            filter: ['aktiv'],
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
            filter: ['aktiv'],
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
            filter: ['aktiv'],
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
            filter: ['aktiv'],
        },
    };
    gridApi.value.setFilterModel(hardcodedFilter);
};

const restoreFromHardCodedF = () => {
    var hardcodedFilter = {
        Diagnosegruppe: {
            type: 'startsWith',
            filter: ['Fælles'],
        },
        Protokolstatus: {
            type: 'startsWith',
            filter: ['aktiv'],
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


let changesToBeMade: any = []

/* function saveEdit(toEdit: any) {
  axios.post('http://localhost:5000/edit-data-kfe-nr', toEdit);
} */



function onCellValueChanged(event: any) {
    changesToBeMade.push({
        tbl: 'xxx_xxx', KFE_NR: "4", col: event.colDef.field, val: event.value,
        oldval: event.oldValue, row: 4, RM_ID: loginName.userId, Getting_data: 'edit',
        targetId: 'Sponsor_ID'
    })
    console.log(props.columnDefs)
    console.log(typeof (changesToBeMade))
    saveEdit(changesToBeMade[0])
    changesToBeMade = []
}


function saveEdit(toEdit: any) {
    axios.post('http://localhost:5000/edit-data-kfe-nr', toEdit);
}

</script>
