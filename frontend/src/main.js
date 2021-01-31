import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./sass/general_wrapper.sass";
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
