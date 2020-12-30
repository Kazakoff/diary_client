import Vue from "vue";
import VueResource from "vue-resource";
import VueCharts from "vue-charts";

import Store from "./store/store";
import Router from "./router/router";
import ApplicationModule from "./module/application/application.module.vue";
//import VueApexCharts from 'vue-apexcharts';
import { ChartPlugin, ScatterSeries, Trendlines, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(VueResource);
Vue.use(VueCharts);
// Vue.use(VueApexCharts);
// Vue.component('apexchart', VueApexCharts);
Vue.use(ChartPlugin);

Vue.http.options.emulateJSON = true;

new Vue({
  el: "#application",
  store: Store,
  router: Router,
  render: h => h(ApplicationModule)
}); 
