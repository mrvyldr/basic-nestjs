import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("hello service")
    return 'Hello World!';
  }
  getExampleApi(): string {
    console.log("exampleapi service")


    return 'Hello World!';
  }
}
