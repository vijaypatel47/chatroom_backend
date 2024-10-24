import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/app.service";

@Controller()
export class AppController {
  constructor(private readonly appServices:AppService ) {}

  @Get()
  async gettest() {
   return this.appServices.getHello();
  }
}

