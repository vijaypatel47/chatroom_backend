import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ChatModule } from './Chat/chat.module';


@Module({
  imports: [UserModule , PrismaModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
