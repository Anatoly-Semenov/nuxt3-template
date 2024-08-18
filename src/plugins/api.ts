declare module "#app" {
	interface NuxtApp {
		$apiService: any
	}
}
declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$apiService: any
	}
}

export default defineNuxtPlugin(() => {
	return {
		provide: {
			// Todo: Set your rest-api services here
			apiService: null
		}
	}
})
