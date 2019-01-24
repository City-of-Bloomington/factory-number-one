import Vue from "vue"
import Router from "vue-router"
import Index from "@/templates/Header"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Header",
      component: Header,
    },
  ],
})
