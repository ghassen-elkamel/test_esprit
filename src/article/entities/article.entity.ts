import * as mongoose from 'mongoose';
export const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    author : {
        type: String,
    },})
    export interface Article {
    _id: string;
    title: string;
    content: string;
    author: string;
}
