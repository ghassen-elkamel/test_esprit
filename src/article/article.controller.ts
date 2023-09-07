import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { updateArticleDto } from './dto/update-article.dto';

@Controller('articles/')
export class ArticleController {
    constructor(   
          private readonly articleService: ArticleService
        ) { }
@Post()
async createArticle(@Res()res, @Body() createArticleDto: CreateArticleDto) {
    const article = await this.articleService.create(createArticleDto);
if(!article) {
    return res.status(HttpStatus.BAD_REQUEST).send({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'article not created!'
      });
}else {
    return res.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        message: 'article created successfully!',
        data: article
      });
}
}
@Get(':id')
async getArticleById(@Res() res, @Param('id') id: string) {
    const article = await this.articleService.getArticleById(id);
    if(!article) {
        return res.status(HttpStatus.BAD_REQUEST).send({
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'article not found!'
          });
    }else {
        return res.status(HttpStatus.OK).send({
            statusCode: HttpStatus.OK,
            message: 'article found!',
            article: article
          });
    }
}
@Get('author/:author')
async getArticlesByAuthor(@Res() res, @Param('author') author: string) {
    const articles = await this.articleService.getArticlesByAuthor(author);
    if(!articles) {
        return res.status(HttpStatus.BAD_REQUEST).send({
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'no articles was found for this author!'
          });
    }else {
        return res.status(HttpStatus.OK).send({
            statusCode: HttpStatus.OK,
            message: 'articles found!',
            articles: articles
          });
    }
}
@Put(':id')
async updateArticle(@Res() res,  @Param('id') id: string, @Body() articleDto: updateArticleDto) {
    const article = await this.articleService.updateArticle(id, articleDto);
    if(!article) {
        return res.status(HttpStatus.BAD_REQUEST).send({
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'article not updated!'
          });
    }else {
        return res.status(HttpStatus.OK).send({
            statusCode: HttpStatus.OK,
            message: 'article updated successfully!',
            article: article
          });
    }
}
@Delete(':id')
async deleteArticle(@Res() res,  @Param('id') id: string) {
    const article = await this.articleService.deleteArticle(id);
    if(!article) {
        return res.status(HttpStatus.BAD_REQUEST).send({
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'article not deleted!'
          });
    }else {
        return res.status(HttpStatus.OK).send({
            statusCode: HttpStatus.OK,
            message: 'article deleted successfully!',
            article: article
          });
    }
}

}
