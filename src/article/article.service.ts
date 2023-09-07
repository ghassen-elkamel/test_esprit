import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { updateArticleDto } from './dto/update-article.dto';

@Injectable() 
export class ArticleService {
    constructor(
        @InjectModel('Article') private readonly articleModel: Model<Article>,
    ) { }
    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(createArticleDto);
        return await createdArticle.save();
    }
    getArticleById(id: string): Promise<Article|null> {
        return this.articleModel.findById(id).exec();
    }
    getArticlesByAuthor(author: string): Promise<Article[]> {
        return this.articleModel.find({ author }).exec();
    }
    updateArticle(id: string, articleDto: updateArticleDto): Promise<Article> {


return this.articleModel.findByIdAndUpdate(id, articleDto, { new: true }).exec();
    }
    deleteArticle(id: string): Promise<Article> {
        return this.articleModel.findByIdAndDelete(id).exec();
    }
}
