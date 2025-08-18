import { InputType, Field, Float } from "type-graphql";
import { BaseEntityFilter } from "./base-entity-filter";
import { OperatorSymbols } from "./operators";
import { PartnerFilter } from "./partner-filter";

@InputType()
class DistanceOperators {
  @Field(() => Float, { nullable: true })
  [OperatorSymbols.LessThan]?: number;

  @Field(() => Float, { nullable: true })
  [OperatorSymbols.LessThanOreEqualTo]?: number;
}

@InputType()
export class LocationFilter extends BaseEntityFilter {
  @Field(() => DistanceOperators, { nullable: true })
  distance?: DistanceOperators;

  @Field(() => PartnerFilter, { nullable: true })
  partner?: PartnerFilter;

  @Field(() => [LocationFilter], { nullable: true })
  [OperatorSymbols.And]?: Array<LocationFilter>;

  @Field(() => [LocationFilter], { nullable: true })
  [OperatorSymbols.Or]?: Array<LocationFilter>;

  @Field(() => LocationFilter, { nullable: true })
  [OperatorSymbols.Not]?: LocationFilter;
}
