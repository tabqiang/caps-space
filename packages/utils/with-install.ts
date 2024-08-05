import type { App, Plugin } from "vue"

export type SFCWithInstall<T> = T & Plugin

//统一处理组件的install方法，便于组件名的注册与修改
export const withInstall = <T>(com: T) => {
	;(com as SFCWithInstall<T>).install = function (app: App) {
		app.component((com as any).name, com as SFCWithInstall<T>)
	}
	return com
}
