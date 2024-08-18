import { Response } from "~/types"

// Todo: This is example of api-service types
export namespace ApiService {
	export interface Entity {}

	export type EntityResponse = Response<Entity>
}
