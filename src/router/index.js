import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    children: [
      {
        path: "dashboard/:courseId",
        name: "dashboard",
        component: () => import("../components/HelloWorld.vue")
      }
    ]
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("../views/Todos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
