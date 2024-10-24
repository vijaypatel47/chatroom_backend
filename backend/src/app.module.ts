import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
// import { PrismaModule } from 'prisma/prisma.module';
import { ChatModule } from './Chat/chat.module';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';


@Module({
  imports: [UserModule , ChatModule],
  controllers: [],
  providers: [PrismaService,AppService],
})
export class AppModule {}
