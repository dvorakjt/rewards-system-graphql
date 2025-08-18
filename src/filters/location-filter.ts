import { InputType, Field, createUnionType, Float } from "type-graphql";
import { BaseEntityFilters } from "./base-entity-filter";
import { createOperators, OperatorSymbols } from "./operators";
import { AllPartnerFilters } from "./partner-filter";

const distanceOperatorSymbols = <const>[
  OperatorSymbols.LessThan,
  OperatorSymbols.LessThanOreEqualTo,
];

const DistanceOperators = createUnionType({
  name: "Distance",
  types: () =>
    createOperators<number, typeof distanceOperatorSymbols>(
      distanceOperatorSymbols,
      Float,
      "Distance"
    ),
});

@InputType()
class LocationDistanceFilter {
  @Field(() => DistanceOperators)
  distance: typeof DistanceOperators;
}

@InputType()
class LocationPartnerFilter {
  @Field(() => AllPartnerFilters)
  partner: typeof AllPartnerFilters;
}

@InputType()
class LocationAnd {
  @Field(() => [AllLocationFilters])
  [OperatorSymbols.And]: Array<typeof AllLocationFilters>;
}

@InputType()
class LocationOr {
  @Field(() => [AllLocationFilters])
  [OperatorSymbols.Or]: Array<typeof AllLocationFilters>;
}

@InputType()
class LocationNot {
  @Field(() => AllLocationFilters)
  [OperatorSymbols.Not]: typeof AllLocationFilters;
}

export const AllLocationFilters = createUnionType({
  name: "AllLocationFilters",
  types: () => [
    ...BaseEntityFilters,
    LocationDistanceFilter,
    LocationPartnerFilter,
    LocationAnd,
    LocationOr,
    LocationNot,
  ],
});
