import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from "@nestjs/microservices";
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@MessagePattern({ cmd: "ping" })
	ping(_: any) {
		setTimeout(function() {
			console.log('This printed after about 1 second');
		}, 1000);
		return "pong";
	}
}
