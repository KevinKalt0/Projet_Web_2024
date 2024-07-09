import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessagesService } from '../message/message.service';
import { Message } from '../message/message';
import { UsersService } from '../user/users.service';
import { ConversationsService } from '../conversation/conversation.service';
import { User } from '../user/user';
import { Conversation } from '../conversation/conversation';
import { MessageQueueService } from '@/message-queue/message-queue.service';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly usersService: UsersService,
    private readonly conversationsService: ConversationsService,
    private readonly messageQueueService: MessageQueueService
  ) {}

  @Query(() => [Message])
  messages(@Args('conversationId') conversationId: string): Message[] {
    return this.messagesService.findByConversation(conversationId);
  }

  @Mutation(() => Message)
  async sendMessage(
    @Args('content') content: string,
    @Args('senderId') senderId: string,
    @Args('conversationId') conversationId: string
  ): Promise<Message> {
    const sender = this.usersService.findOne(senderId);
    if (!sender) {
      throw new Error(`User with ID ${senderId} not found`);
    }

    const conversation = this.conversationsService.findOne(conversationId);
    if (!conversation) {
      throw new Error(`Conversation with ID ${conversationId} not found`);
    }

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