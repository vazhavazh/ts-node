import { IPerson } from "./PersonType";

const storeData: IPerson[] = [];

export default class PersonService {
	async getAll(): Promise<IPerson[]> {
		return storeData;
	}

	async getById(id: number): Promise<IPerson | {}> {
		const person = storeData.find((el) => {
			return el.id === id;
		});

		return person || {};
	}

	async setPerson(data: IPerson): Promise<true> {
		storeData.push(data);

		return true;
	}
}
