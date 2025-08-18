import { InputType, Field } from "type-graphql";
import { StringOperators, OperatorSymbols } from "./operators";
import { BaseEntityFilter } from "./base-entity-filter";
import { RewardFilter } from "./reward-filter";
import { LocationFilter } from "./location-filter";

@InputType()
class RewardExistsOperator {
  @Field(() => RewardFilter, { nullable: true })
  [OperatorSymbols.Exists]?: RewardFilter;
}

@InputType()
class LocationExistsOperator {
  @Field(() => LocationFilter, { nullable: true })
  [OperatorSymbols.Exists]?: LocationFilter;
}

@InputType()
export class PartnerFilter extends BaseEntityFilter {
  @Field(() => StringOperators, { nullable: true })
  name?: StringOperators;

  @Field(() => StringOperators, { nullable: true })
  logoUrl?: StringOperators;

  @Field(() => StringOperators, { nullable: true })
  description?: StringOperators;

  @Field(() => StringOperators, { nullable: true })
  website?: StringOperators;

  @Field(() => StringOperators, { nullable: true })
  why8by8?: StringOperators;

  @Field(() => RewardExistsOperator, { nullable: true })
  rewards?: RewardExistsOperator;

  @Field(() => LocationExistsOperator, { nullable: true })
  locations?: LocationExistsOperator;

  @Field(() => [PartnerFilter], { nullable: true })
  [OperatorSymbols.And]?: Array<PartnerFilter>;

  @Field(() => [PartnerFilter], { nullable: true })
  [OperatorSymbols.Or]?: Array<PartnerFilter>;

  @Field(() => PartnerFilter, { nullable: true })
  [OperatorSymbols.Not]?: PartnerFilter;
}
