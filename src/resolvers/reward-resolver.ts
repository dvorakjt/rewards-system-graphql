import {
  Resolver,
  Query,
  Arg,
  ArgsType,
  Args,
  Field,
  Int,
  ID,
} from "type-graphql";
import { Reward } from "../entities";
import { RewardFilter } from "../filters";

@ArgsType()
export class RewardsArgs {
  @Field(() => Int, { nullable: true })
  first?: number;

  @Field(() => String, { nullable: true })
  after?: string;

  @Field(() => RewardFilter, { nullable: true })
  filter?: typeof RewardFilter;
}

@Resolver()
export class RewardResolver {
  @Query(() => Reward, { nullable: true })
  async reward(@Arg("id", () => ID) id: string): Promise<Reward | null> {
    throw new Error("Not implemented.");
  }

  @Query(() => [Reward])
  async rewards(
    @Args(() => RewardsArgs) { first, after, filter }: RewardsArgs
  ): Promise<Reward[]> {
    throw new Error("Not implemented.");
  }
}
