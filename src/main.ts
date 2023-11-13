import { createApp, watch } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import VueApexCharts from 'vue3-apexcharts'


/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(createPinia());
vue.use(VueApexCharts)

// Run!
router.isReady().then(() => {
  vue.mount('#app');
});