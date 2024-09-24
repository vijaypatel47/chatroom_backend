import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: { username, password: hashedPassword },
    });
  }

  async login(username: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return  new Error('Invalid credentials');
    }
    const payload = { username: user.username };
    // console.log({ access_token: this.jwtService.sign(payload) })
    return { access_token: this.jwtService.sign(payload) };
  }
}
