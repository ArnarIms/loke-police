import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
Vue.filter('formatDate', function(value) {
  if(value){
return moment(String(value)).format('DD.MM.YYYY hh:mm')
}
});
Vue.filter('formatYear', function(value) {
  if(value){
return moment(String(value)).format('DD.MM.YYYY')
}
});