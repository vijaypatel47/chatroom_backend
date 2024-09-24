import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController{
    @Get('')
    getConfirmationMsg():string{
        return "Hey I am Ready to Run"
    }
}