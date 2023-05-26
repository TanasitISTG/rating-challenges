import { createRouter, createWebHistory } from "vue-router";
import RatingView from "../views/RatingView.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: RatingView,
    },
  ],
});

export default routes;
