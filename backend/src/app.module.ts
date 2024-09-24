import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ChatModule } from './Chat/chat.module';
import { AppController } from './app.controller';


@Module({
  imports: [UserModule , PrismaModule, ChatModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
