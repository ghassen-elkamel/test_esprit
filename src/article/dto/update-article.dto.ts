import { IsNotEmpty } from "class-validator";
import { CreateArticleDto } from "./create-article.dto";

export class updateArticleDto extends CreateArticleDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    content: string;
    @IsNotEmpty()
    author: string;
}
