<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { AgGridVue } from "ag-grid-vue3";
import { useloggedInStore } from '../stores/loggedInStore';

const loginName = useloggedInStore()
const route = useRoute()
const datatable = ref()


axios.post('http://localhost:5000/kfe-nr-help-department-route', {
  RM_ID: loginName.userId, KFE_NR: route.params.id
}).then((response) => {
  datatable.value = response.data;
});

const defaultColdDef = ref({
  def: { sortable: true, filter: true, flex: 1, editable: true, resizable: true }
})

const columnDefsEcon3: Array<any> = [

  { headerName: 'Afdeling', field: 'Modtager_Hjaelp', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Afdeling', field: 'Modtager', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'forbrug i alt', field: 'FaktiskForbrugMedKvote', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'betalt', field: 'Expr1', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'skylder', field: 'profit', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

]

</script>

<template>
  <ag-grid-vue fluid class="ag-theme-balham h-24 px-10" :columnDefs=" columnDefsEcon3 " :rowData=" datatable "
    :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false " paginationPageSize="100000">
  </ag-grid-vue>
</template>