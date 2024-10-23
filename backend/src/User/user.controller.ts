import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto'; 

@Controller('user')
export class UserController {
  constructor(private readonly UserService:UserService ) {}

  @Post('register')
  async register(@Body() UserDto:UserDto ) {
    const {username, password} = UserDto
    return this.UserService.register(username, password);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.UserService.login(body.username, body.password);
  }
}
