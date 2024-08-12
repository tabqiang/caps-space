import type { App, Plugin } from 'vue';
import Button from './button/src/button.vue';

const components = [Button];

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name!, component);
  });
};

const CapsSpace: Plugin = {
  install,
};

export default CapsSpace;
