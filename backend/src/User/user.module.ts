import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './user.controller'; 
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma.service';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-jwt-secret', // Change this to a secure secret
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
