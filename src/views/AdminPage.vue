<template>
  <div class="grid grid-cols-5 items-center w-full bg-kfe-secondary">
    <h2 class="col-start-3 text-center justify-center text-gray-700 text-xl  ">Admin Page </h2>
    <div class="flex content-center col-start-4">
    </div>
    <div class="flex col-start-5">

    </div>
  </div>
  <div class="px-32 flex-row">
    <div class="grid grid-cols-2 h-1/2 gap-12 ">
      <div>
        Bruger Data
        <DataTable :columnDefs= columnDefs0  :linkToData= linkToData0  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
      <div>
        Change log
        <DataTable :columnDefs= columnDefs1  :linkToData= linkToData1  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-10 mt-10">
      <div>
        Status
        <DataTable :columnDefs= columnDefs2  :linkToData= linkToData2  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
      <div>
        Sponsorer
        <DataTable :columnDefs= columnDefs3  :linkToData= linkToData3  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
      <div>
        Investigatorer
        <DataTable :columnDefs= columnDefs4  :linkToData= linkToData4  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
      <div>
        Projektsygeplejesker
        <DataTable :columnDefs= columnDefs5  :linkToData= linkToData5  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-10 mt-10">
      <div class="text-pink-200">
        Modtagere
        <DataTable :columnDefs= columnDefs3  :linkToData= linkToData3  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
      <div>
        Diagnoser
        <DataTable :columnDefs= columnDefs3  :linkToData= linkToData3  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
      <div>
        KFE-Medarbejdere
        <DataTable :columnDefs= columnDefs3  :linkToData= linkToData3  :onlyTable= onlyTable  :customClasses= customClasses  />
        <crudBtn />
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import crudBtn from "../components/crudBtn.vue";
import DataTable from "../components/DataTable.vue";

const apiLink: string = 'http://localhost:5000'
const linkToData0: string = `${ apiLink }/user-data-list`
const linkToData1: string = `${ apiLink }/change_log_route`
const linkToData2: string = `${ apiLink }/protokol_status`
const linkToData3: string = `${ apiLink }/admin_sponsorer`
const linkToData4: string = `${ apiLink }/investigatorer`
const linkToData5: string = `${ apiLink }/projektsygeplejesker`
const linkToData6: string = `${ apiLink }/modtagere`
const linkToData7: string = `${ apiLink }/diagnoser `
const linkToData8: string = `${ apiLink }/kfe-medarbejdere `

const onlyTable: boolean = true

const customClasses: string = " h-80 "

const columnDefs0: Array<any> = [
  { headerName: 'UserId', field: "UserId" },
  { headerName: 'tempUserName', field: "UserName" },
  { headerName: 'RM_ID', field: 'RM_ID' },
  { headerName: 'AccessGroup', editable: true, field: 'AccessGroup' },
  { headerName: 'Favorites', editable: true, field: 'Favorites' },
]

const columnDefs1: Array<any> = [
  { headerName: 'KFE Nr', field: "kfe_nr" },
  { headerName: 'Tbl Navn', field: "tabel_navn" },
  { headerName: 'TidlReg', field: 'old_val' },
  { headerName: 'NyReg', field: 'new_value' },
  { headerName: 'RM_ID', field: 'rm_id' },
  { headerName: 'change_type', field: 'change_type' },
]

const columnDefs2: Array<any> = [
  { headerName: 'Status id', editable: true, field: "Status_ID" },
  { headerName: 'Status', editable: true, field: "Protokolstatus" },
]

const columnDefs3: Array<any> = [
  { headerName: 'Sponsor_ID', editable: true, field: "Sponsor_ID" },
  { headerName: 'SponsorNavn', editable: true, field: "SponsorNavn" },
  { headerName: 'Sponsortype', editable: true, field: "Sponsortype" },

]
const columnDefs4: Array<any> = [
  { headerName: 'Inv_ID', editable: true, field: "Inv_ID" },
  { headerName: 'InvInitialer', editable: true, field: "InvInitialer" },
  { headerName: 'InvNavn', editable: true, field: "InvNavn" },

]

const columnDefs5: Array<any> = [
  { headerName: 'Pspl_ID', editable: true, field: "Pspl_ID" },
  { headerName: 'PsplInitialer', editable: true, field: "PsplInitialer" },
  { headerName: 'PsplNavn', editable: true, field: "PsplNavn" },
  { headerName: 'Aktiv', editable: true, field: "Aktiv" },

]

</script>