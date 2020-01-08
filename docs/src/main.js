// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { VDrawer } from "vuetensils";
import DefaultLayout from "~/layouts/Default.vue";

import "./main.scss";

export default function(Vue, { router, head, isClient }) {
  // Components
  const globals = require.context("@/components/global", false, /.*\.vue$/);
  globals.keys().forEach(fileName => {
    const exported = globals(fileName);
    const config = exported.default || exported;

    const name = config.name || fileName.replace(/^\.\/(.*)\.\w+$/, "$1");

    Vue.component(name, config);
  });

  Vue.component("VDrawer", VDrawer);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
