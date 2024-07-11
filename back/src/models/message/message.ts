import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user'; // Import User from the same directory
import { Conversation } from '../conversation/conversation';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field(() => User)
  sender: User;

  @Field(() => Conversation)
  conversation: Conversation;

  @Field(() => Date)
  createdAt: Date;

  constructor() {
    this.id = '';
    this.content = '';
    this.sender = new User();
    this.conversation = new Conversation();
    this.createdAt = new Date();
  }
}