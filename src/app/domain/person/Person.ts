import { App } from "infra/App";
import { Get, JsonController } from "routing-controllers";


@JsonController()
export class Person {
	public app = new App();

	@Get("/api/person/getHello")
	async getHello() {
		return "Hello my friend=)";
	}
}

