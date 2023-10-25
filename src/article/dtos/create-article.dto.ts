import { IsInt, IsString, Length } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @Length(3, 100, { message: 'title is too short or too long' })
  readonly title: string;

  @IsString()
  @Length(10, 2000, { message: 'body is too short' })
  readonly body: string;

  @IsInt()
  readonly author: number;
}