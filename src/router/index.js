import { createRouter, createWebHistory } from "vue-router";

import home from "./routes/home";

export default createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes: [
        { path: "/", redirect: { name: "home" } },
        ...home,
        {
            path: "/:pathMatch(.*)*",
            component: () => import("@/pages/errors/Error404.vue"),
        },
    ],
});
