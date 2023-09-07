import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleService } from './article/article.service';
import { ArticleModule } from './article/article.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),
  
  MongooseModule.forRoot(process.env.DB_CONNECT, {
  }),
  ArticleModule,
],
  controllers: [AppController],
  providers: [AppService, ArticleService,],
})
export class AppModule {}
