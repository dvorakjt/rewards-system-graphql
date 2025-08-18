import { InputType, Field, createUnionType } from "type-graphql";
import { BaseEntityFilters } from "./base-entity-filter";
import {
  DurationOperators,
  InstantOperators,
  IntOperators,
  OperatorSymbols,
  RedemptionForumArrayOperators,
  StringArrayOperators,
  StringOperators,
} from "./operators";
import { AllPartnerFilters } from "./partner-filter";

@InputType()
class RewardShortDescriptionFilter {
  @Field(() => StringOperators)
  shortDescription: typeof StringOperators;
}
@InputType()
class RewardRedemptionForumsFilter {
  @Field(() => RedemptionForumArrayOperators)
  redemptionForums: typeof RedemptionForumArrayOperators;
}

@InputType()
class RewardCategoriesFilter {
  @Field(() => StringArrayOperators)
  categories: typeof StringArrayOperators;
}

@InputType()
class RewardLongDescriptionFilter {
  @Field(() => StringOperators)
  longDescription: typeof StringOperators;
}

@InputType()
class RewardClaimableUntilFilter {
  @Field(() => InstantOperators)
  claimableUntil: typeof InstantOperators;
}

@InputType()
class RewardRedeemableUntilFilter {
  @Field(() => InstantOperators)
  redeemableUntil: typeof InstantOperators;
}

@InputType()
class RewardRedeemableForFilter {
  @Field(() => DurationOperators)
  redeemableFor: typeof DurationOperators;
}

@InputType()
class RewardNumAvailableFilter {
  @Field(() => IntOperators)
  rewardsAvailable: typeof IntOperators;
}

@InputType()
class RewardPartnerFilter {
  @Field(() => AllPartnerFilters)
  partner: typeof AllPartnerFilters;
}

@InputType()
class RewardAnd {
  @Field(() => [AllRewardFilters])
  [OperatorSymbols.And]: Array<typeof AllRewardFilters>;
}

@InputType()
class RewardOr {
  @Field(() => [AllRewardFilters])
  [OperatorSymbols.Or]: Array<typeof AllRewardFilters>;
}

@InputType()
class RewardNot {
  @Field(() => AllRewardFilters)
  [OperatorSymbols.Not]: typeof AllRewardFilters;
}

export const AllRewardFilters = createUnionType({
  name: "AllRewardFilters",
  types: () => [
    ...BaseEntityFilters,
    RewardShortDescriptionFilter,
    RewardRedemptionForumsFilter,
    RewardCategoriesFilter,
    RewardLongDescriptionFilter,
    RewardClaimableUntilFilter,
    RewardRedeemableUntilFilter,
    RewardRedeemableForFilter,
    RewardRedeemableUntilFilter,
    RewardNumAvailableFilter,
    RewardPartnerFilter,
    RewardAnd,
    RewardOr,
    RewardNot,
  ],
});
