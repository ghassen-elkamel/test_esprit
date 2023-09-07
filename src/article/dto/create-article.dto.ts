import { IsEmpty, IsNotEmpty, Length, Validate } from "class-validator";
export class CreateArticleDto {

  @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    content: string;
    @IsNotEmpty()
    author: string;
}

