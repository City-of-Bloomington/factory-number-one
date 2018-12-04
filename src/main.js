// Vue Design System: The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "@/App"
import router from "@/router"
import WebFontLoader from "@/utils/webFontLoader" // eslint-disable-line no-unused-vars
import Meta from "vue-meta"

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faCoffee)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue Design System: Auto importing components globally
import DesignSystem from "@/system"

// For building Web Components
// import wrap from '@vue/web-component-wrapper';
// import BreadcrumbsComponent from '@/patterns/BreadcrumbsComponent';
// const CustomElement = wrap(Vue, BreadcrumbsComponent);
// window.customElements.define('breadcrumbs', CustomElement);

Vue.use(DesignSystem)
Vue.use(Meta)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
})
