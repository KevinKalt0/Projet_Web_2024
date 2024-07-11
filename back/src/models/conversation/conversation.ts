import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user';

@ObjectType()
export class Conversation {
  @Field(() => ID)
  id: string;

  @Field(() => [User])
  participants: User[];

  @Field(() => Date)
  createdAt: Date;

  constructor() {
    this.id = '';
    this.participants = [];
    this.createdAt = new Date();
  }
}
