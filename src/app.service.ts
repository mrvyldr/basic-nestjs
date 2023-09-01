import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("hello service 1")
    return 'Hello World!';
  }
  getExampleApi(): string {
    console.log("exampleapi service")


    return 'Hello World!';
  }
}
