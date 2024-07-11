import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { HealthProcessor } from './health.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'health-queue',
    }),
  ],
  controllers: [HealthController],
  providers: [HealthService, HealthProcessor],
})
export class HealthModule {}
