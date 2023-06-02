import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {
	constructor(
		@Inject("SERVICE_AUTH") private readonly clientServiceAuth: ClientProxy
	) {}

	async ping(): Promise<{ message: string }|{error: any}> {
		const pattern = { cmd: "ping" };
		const payload = {};
		try {
			const message = await this.clientServiceAuth.send<string>(pattern, payload).toPromise();
			return { message };
		} catch (error) {
			return { error };
		}
	}
}
