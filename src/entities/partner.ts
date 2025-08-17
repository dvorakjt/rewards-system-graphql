import { ObjectType, Field } from "type-graphql";
import { BaseEntity } from "./base-entity";
import { Reward } from "./reward";
import { Location } from "./location";

@ObjectType()
export class Partner extends BaseEntity {
  @Field(() => String)
  name: string;

  @Field(() => String)
  logoUrl: string;

  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => String, { nullable: true })
  why8by8?: string;

  @Field(() => [Reward])
  rewards: Reward[];

  @Field(() => [Location])
  locations: Location[];
}
