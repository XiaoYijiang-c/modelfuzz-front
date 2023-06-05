import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import firstPage from "../components/firstPage.vue";
// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: firstPage,
    },
    {
        path: "/login",
        component: () => import("../components/loginPage.vue"),
    },
    {
        path: "/penel",
        component: () => import("../components/skeleton.vue"),
        children: [
            {
                path: "/cvfuzz", // 重定向到 /register 页面或 /register/confirm 页面不做任何操作。这是 vue-router 的一个特征。 在你的语言中是可以接受的，但不是必需的。 （请参见讨论页面） 这个页面应该是可变的，并且将来会添加一个更多重定向到 /register/recovery 的页面。 有关属性的更多信息，请参见
                component: () => import("../components/dlfuzzPenel.vue"),
            }
        ]
    },
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 3导出路由   然后去 main.ts 注册 router.ts
export default router