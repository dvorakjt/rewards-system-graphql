import { InputType, Field, createUnionType } from "type-graphql";
import { StringOperators, OperatorSymbols } from "./operators";
import { BaseEntityFilters } from "./base-entity-filter";
import { AllLocationFilters } from "./location-filter";
import { AllRewardFilters } from "./reward-filter";

@InputType()
class PartnerNameFilter {
  @Field(() => StringOperators)
  name: typeof StringOperators;
}

@InputType()
class PartnerLogoUrlFilter {
  @Field(() => StringOperators)
  logoUrl: typeof StringOperators;
}

@InputType()
class PartnerDescriptionFilter {
  @Field(() => StringOperators)
  description: typeof StringOperators;
}

@InputType()
class PartnerWebsiteFilter {
  @Field(() => StringOperators)
  website: typeof StringOperators;
}

@InputType()
class PartnerWhy8by8Filter {
  @Field(() => StringOperators)
  why8by8: typeof StringOperators;
}

@InputType()
class LocationExistsOperator {
  @Field(() => AllLocationFilters)
  [OperatorSymbols.Exists]: typeof AllLocationFilters;
}

@InputType()
class PartnerLocationExists {
  @Field(() => LocationExistsOperator)
  locations: LocationExistsOperator;
}

@InputType()
class RewardExistsOperator {
  @Field(() => AllRewardFilters)
  [OperatorSymbols.Exists]: typeof AllRewardFilters;
}

@InputType()
class PartnerRewardExists {
  @Field(() => RewardExistsOperator)
  rewards: RewardExistsOperator;
}

@InputType()
class PartnerAnd {
  @Field(() => [AllPartnerFilters])
  [OperatorSymbols.And]: Array<typeof AllPartnerFilters>;
}

@InputType()
class PartnerOr {
  @Field(() => [AllPartnerFilters])
  [OperatorSymbols.Or]: Array<typeof AllPartnerFilters>;
}

@InputType()
class PartnerNot {
  @Field(() => AllPartnerFilters)
  [OperatorSymbols.Not]: typeof AllPartnerFilters;
}

export const AllPartnerFilters = createUnionType({
  name: "AllPartnerFilters",
  types: () => [
    ...BaseEntityFilters,
    PartnerNameFilter,
    PartnerLogoUrlFilter,
    PartnerDescriptionFilter,
    PartnerWebsiteFilter,
    PartnerWhy8by8Filter,
    PartnerLocationExists,
    PartnerRewardExists,
    PartnerAnd,
    PartnerOr,
    PartnerNot,
  ],
});
