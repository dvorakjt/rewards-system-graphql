import { ObjectType, Field, Int } from "type-graphql";
import { Temporal } from "@js-temporal/polyfill";
import { BaseEntity } from "./base-entity";
import { RedemptionForum, InstantScalar, DurationScalar } from "../types";
import { Partner } from "./partner";

@ObjectType()
export class Reward extends BaseEntity {
  @Field(() => String)
  shortDescription: string;

  @Field(() => [RedemptionForum])
  redemptionForums: RedemptionForum[];

  @Field(() => [String])
  categories: string[];

  @Field(() => String, { nullable: true })
  longDescription?: string;

  @Field(() => InstantScalar, { nullable: true })
  claimableUntil?: Temporal.Instant;

  @Field(() => InstantScalar, { nullable: true })
  redeemableUntil?: Temporal.Instant;

  @Field(() => DurationScalar, { nullable: true })
  redeemableFor?: Temporal.Duration;

  @Field(() => Int, { nullable: true })
  rewardsAvailable?: number;

  @Field(() => Partner)
  partner: Partner;
}
