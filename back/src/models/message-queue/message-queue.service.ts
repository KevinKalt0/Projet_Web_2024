import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';


@Injectable()
export class MessageQueueService {
  constructor(@InjectQueue('message-queue') private readonly messageQueue: Queue) {}

  async addMessageToQueue(message: any) {
    await this.messageQueue.add(message);
  }
}
