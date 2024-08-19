import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HerosModule } from './heros/heros.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://btadamz:Adamsbite11@cluster1.wmt59rk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',
    ),
    HerosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 