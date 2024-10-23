import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(username: string, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      return await this.prisma.user.create({
        data: { username, password: hashedPassword },
      });
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(username: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { username } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      const payload = { username: user.username };
      return { access_token: this.jwtService.sign(payload) };
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
