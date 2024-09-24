import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
// import { PrismaModule } from 'prisma/prisma.module';
import { ChatModule } from './Chat/chat.module';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';


@Module({
  imports: [UserModule , ChatModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
