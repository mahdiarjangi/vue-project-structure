import { createApp } from "vue";

// starter
import App from "./App.vue";
// router
import router from "./router";
// store
import { createPinia } from "pinia";

// global styles
import "./assets/scss/app.scss";
import "./assets/css/gilroy.css";
import "./assets/css/icomoon.css";
import "./assets/css/bootstrap.min.css";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
