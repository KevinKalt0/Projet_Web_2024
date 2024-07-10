import { Test, TestingModule } from '@nestjs/testing';
import { MessagesService } from '../message/message.service';
import { Message } from '../message/message';
import { User } from '../user/user';
import { Conversation } from '../conversation/conversation';

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesService],
    }).compile();

    service = module.get<MessagesService>(MessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a message', () => {
    const sender: User = { id: '1', username: 'test', email: 'test@example.com', password: 'test' };
    const conversation: Conversation = {
      id: '1',
      participants: [sender],
      createdAt: new Date(),
    };
    const message: Message = {
      id: '1',
      content: 'Hello, world!',
      sender,
      conversation,
      createdAt: new Date(),
    };
    const createdMessage = service.create(message.content, sender, conversation);
    
    // Comparaison flexible en excluant les champs dynamiques
    expect(createdMessage).toMatchObject({
      content: message.content,
      sender: message.sender,
      conversation: message.conversation,
    });
    expect(service.findByConversation('1')).toContainEqual(expect.objectContaining({
      content: message.content,
      sender: message.sender,
      conversation: message.conversation,
    }));
  });

  it('should find messages by conversation ID', () => {
    const sender: User = { id: '1', username: 'test', email: 'test@example.com', password: 'test'};
    const conversation: Conversation = {
      id: '1',
      participants: [sender],
      createdAt: new Date(),
    };
    const message1: Message = {
      id: '1',
      content: 'Hello, world!',
      sender,
      conversation,
      createdAt: new Date(),
    };
    const message2: Message = {
      id: '2',
      content: 'Another message',
      sender,
      conversation,
      createdAt: new Date(),
    };
    service.create(message1.content, sender, conversation);
    service.create(message2.content, sender, conversation);
    const messages = service.findByConversation('1');
    
    // Comparaison flexible en excluant les champs dynamiques
    expect(messages).toEqual([
      expect.objectContaining({ content: message1.content, sender: message1.sender, conversation: message1.conversation }),
      expect.objectContaining({ content: message2.content, sender: message2.sender, conversation: message2.conversation }),
    ]);
  });
});