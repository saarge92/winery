
require('./bootstrap');
window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('filter-price', require('./components/filter_price.vue'));
const app = new Vue({
    el: '#vines'
});

