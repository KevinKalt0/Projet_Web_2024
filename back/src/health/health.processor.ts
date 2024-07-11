import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('health-queue')
export class HealthProcessor {
  @Process('health-job')
  handleHealthJob(job: Job) {
    console.log('Job received:', job.data);
  }
}
