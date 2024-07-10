import { Controller, Get } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('health')
export class HealthController {
  constructor(@InjectQueue('health-queue') private readonly healthQueue: Queue) {}

  @Get()
  async getHealth(): Promise<string> {
    await this.healthQueue.add('health-job', {
      timestamp: new Date().toISOString(),
    });
    return 'OK';
  }
}
