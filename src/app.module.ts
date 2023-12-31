import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),

  MongooseModule.forRoot(process.env.DB_CONNECT, {
  }),
  ArticleModule,
],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
