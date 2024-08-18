// Configs
import { devConfig, prodConfig, stagingConfig } from "~/configs"

// Types
interface Settings {
	[key: string]: string
}

enum Env {
	DEV = "dev",
	staging = "staging",
	PROD = "prod"
}

export function useConfig() {
	const config = useRuntimeConfig()

	const env: Env = (config.public?.APP_ENV as Env) || Env.DEV

	let activeConfig: Settings

	switch (env) {
		case Env.DEV:
			activeConfig = devConfig
			break
		case Env.staging:
			activeConfig = stagingConfig
			break
		case Env.PROD:
			activeConfig = prodConfig
			break
	}

	const {
		// Todo: Set your config here
		ENVIRONMENT: environment = "dev",
		NODE_ENV: nodeEnv = "dev",
		APP_ENV: appEnv = "dev"
	} = activeConfig

	const isDev: boolean = environment.includes("dev")

	return {
		environment,
		nodeEnv,
		appEnv,
		isDev
	}
}
