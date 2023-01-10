const path = require("path");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@import "./src/css/gilroy.css";`,
    //         },
    //     },
    // },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    define: {
        "process.env": {},
    },
    plugins: [vue()],
});
