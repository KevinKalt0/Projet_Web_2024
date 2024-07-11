import { Injectable } from '@nestjs/common';
import { Message } from './message';
import { User } from '../user/user';
import { Conversation } from '../conversation/conversation';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];

  findByConversation(conversationId: string): Message[] {
    return this.messages.filter(message => message.conversation.id === conversationId);
  }

  create(content: string, sender: User, conversation: Conversation): Message {
    const message: Message = {
      id: Date.now().toString(),
      content,
      sender,
      conversation,
      createdAt: new Date(),
    };
    this.messages.push(message);
    return message;
  }
}
