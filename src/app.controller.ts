import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/merve")
  getHello(): string {
    console.log("hello controller")
    return this.appService.getHello();
  }

  @Get("/exampleapi")
  getExampleApi(): string {
    console.log("exampleapi controller")
    return this.appService.getExampleApi();
  }
}
