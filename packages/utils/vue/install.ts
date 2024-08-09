import type { App, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

//ref: element-plus packages/utils/vue/install.ts
//extra 作用是易用性和一致性, 例如 ElButton 和 ElButtonGroup,只需要引入 ElButton 即可
/**
 * 为组件添加 install 方法，用于 Vue.use 注册
 * @param main 主要组件
 * @param extra 其他组件
 * @returns
 */
export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};
