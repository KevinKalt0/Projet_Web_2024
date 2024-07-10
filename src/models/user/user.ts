import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  constructor() {
    this.id = '';
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
