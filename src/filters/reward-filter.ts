import { InputType, Field } from "type-graphql";
import { BaseEntityFilter } from "./base-entity-filter";
import {
  DurationOperators,
  InstantOperators,
  IntOperators,
  OperatorSymbols,
  RedemptionForumArrayOperators,
  StringArrayOperators,
  StringOperators,
} from "./operators";
import { PartnerFilter } from "./partner-filter";

@InputType()
export class RewardFilter extends BaseEntityFilter {
  @Field(() => StringOperators, { nullable: true })
  shortDescription?: StringOperators;

  @Field(() => RedemptionForumArrayOperators, { nullable: true })
  redemptionForums?: RedemptionForumArrayOperators;

  @Field(() => StringArrayOperators, { nullable: true })
  categories?: StringArrayOperators;

  @Field(() => StringOperators, { nullable: true })
  longDescription?: StringOperators;

  @Field(() => InstantOperators, { nullable: true })
  claimableUntil?: InstantOperators;

  @Field(() => InstantOperators, { nullable: true })
  redeemableUntil?: InstantOperators;

  @Field(() => DurationOperators, { nullable: true })
  redeemableFor?: DurationOperators;

  @Field(() => IntOperators, { nullable: true })
  rewardsAvailable?: IntOperators;

  @Field(() => PartnerFilter, { nullable: true })
  partner?: PartnerFilter;

  @Field(() => [RewardFilter], { nullable: true })
  [OperatorSymbols.And]?: Array<RewardFilter>;

  @Field(() => [RewardFilter], { nullable: true })
  [OperatorSymbols.Or]?: Array<RewardFilter>;

  @Field(() => RewardFilter, { nullable: true })
  [OperatorSymbols.Not]?: RewardFilter;
}
