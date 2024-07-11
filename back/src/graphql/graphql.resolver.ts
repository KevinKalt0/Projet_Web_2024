import { Resolver, Query, ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class HealthCheckResult {
  @Field()
  result: string;

  constructor(result: string) {
    this.result = result;
  }
}

@Resolver()
export class GraphqlResolver {
  @Query(() => HealthCheckResult)
  healthCheck(): HealthCheckResult {
    return new HealthCheckResult('ok');
  }
}
