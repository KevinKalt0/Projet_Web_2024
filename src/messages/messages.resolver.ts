import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from '../models/message/message';
import { UsersService } from '../models/user/users.service';
import { ConversationsService } from '../conversations/conversations.service';
import { MessageQueueService } from '../message-queue/message-queue.service';
import { User } from '../models/user/user';
import { Conversation } from '../models/conversation/conversation';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly usersService: UsersService,
    private readonly conversationsService: ConversationsService,
    private readonly messageQueueService: MessageQueueService,
  ) {}

  @Query(() => [Message])
  messages(@Args('conversationId') conversationId: string): Message[] {
    return this.messagesService.findByConversation(conversationId);
  }

  @Mutation(() => Message)
  async sendMessage(
    @Args('content') content: string,
    @Args('senderId') senderId: string,
    @Args('conversationId') conversationId: string,
  ): Promise<Message> {
    const sender: User = this.usersService.findOne(senderId);
    const conversation: Conversation =
      this.conversationsService.findOne(conversationId);
    const message: Message = {
      id: Date.now().toString(),
      content,
      sender,
      conversation,
      createdAt: new Date(),
    };

    await this.messageQueueService.addMessageToQueue(message);

    return message;
  }
}
