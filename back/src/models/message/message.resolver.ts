import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessagesService } from './message.service';
import { Message } from './message';
import { UsersService } from '../user/users.service';
import { ConversationsService } from '../conversation/conversation.service';
import { User } from '../user/user';
import { Conversation } from '../conversation/conversation';
import { MessageQueueService } from '../message-queue/message-queue.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly usersService: UsersService,
    private readonly conversationsService: ConversationsService,
    private readonly messageQueueService: MessageQueueService, // Assurez-vous que MessageQueueService est injecté ici
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Message])
  messages(@Args('conversationId') conversationId: string): Message[] {
    return this.messagesService.findByConversation(conversationId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Message)
  async sendMessage(
    @Args('content') content: string,
    @Args('senderId') senderId: string,
    @Args('conversationId') conversationId: string
  ): Promise<Message> {
    const sender: User | null = this.usersService.findOne(senderId);
    if (!sender) {
      throw new Error(`User with ID ${senderId} not found`);
    }

    const conversation: Conversation | null = this.conversationsService.findOne(conversationId);
    if (!conversation) {
      throw new Error('Conversation not found');
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