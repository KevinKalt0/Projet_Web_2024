import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConversationsService } from './conversation.service';
import { Conversation } from '../conversation/conversation';
import { UsersService } from '../user/users.service';
import { User } from '../user/user';


@Resolver(() => Conversation)
export class ConversationsResolver {
  constructor(
    private readonly conversationsService: ConversationsService,
    private readonly usersService: UsersService
  ) {}

  @Query(() => [Conversation])
  conversations(@Args('userId') userId: string): Conversation[] {
    return this.conversationsService.findByUser(userId);
  }

  @Mutation(() => Conversation)
  createConversation(
    @Args('userIds', { type: () => [String] }) userIds: string[]
  ): Conversation {
    const participants: User[] = userIds
      .map(id => this.usersService.findOne(id))
      .filter((user): user is User => user !== null);

    return this.conversationsService.create(participants);
  }
}