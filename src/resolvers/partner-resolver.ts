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
import { Partner } from "../entities";
import { PartnerFilter } from "../filters";

@ArgsType()
export class PartnersArgs {
  @Field(() => Int, { nullable: true })
  first?: number;

  @Field(() => String, { nullable: true })
  after?: string;

  @Field(() => PartnerFilter, { nullable: true })
  filter?: typeof PartnerFilter;
}

@Resolver()
export class PartnerResolver {
  @Query(() => Partner, { nullable: true })
  async partner(@Arg("id", () => ID) id: string): Promise<Partner | null> {
    throw new Error("Not implemented.");
  }

  @Query(() => [Partner])
  async partners(
    @Args(() => PartnersArgs) { first, after, filter }: PartnersArgs
  ): Promise<Partner[]> {
    throw new Error("Not implemented.");
  }
}
