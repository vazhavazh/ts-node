import { App } from "infra/App";
import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import PersonService from "./PersonService";
import { IPerson } from "./PersonType";



@JsonController("/person")
export class Person {
	public app = new App();
	public service = new PersonService();

	// @Get("/getHello")
	// async getHello() {
	// 	return "Hello my friend=)";
	// }

	@Get()
	async getAll() {
		return this.service.getAll();
	}

	@Get('/:id')
	async getById(@Param('id') id:number ) {
		return this.service.getById(id);
	}

	@Post()
	async setPerson(@Body() body: IPerson) {
		await this.service.setPerson(body);

		return "Person added";
	}
}

