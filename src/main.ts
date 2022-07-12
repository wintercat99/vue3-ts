import { createApp } from "vue";
import App from "./App.vue";
import { loadAllPlugins, globalProperties } from "./plugins";
import "./assets/css/index.less";
import "normalize.css";
import "/public/Cesium/Widgets/widgets.css";
// import 'cesium/Build/Cesium/Widgets/widgets.css'
import router from "./router";

import store from "./store";
import { setupStore } from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
loadAllPlugins(app);
app.use(globalProperties);
app.use(store);
setupStore();
app.use(router);

app.mount("#app");
