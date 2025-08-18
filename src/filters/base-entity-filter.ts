import { InputType, Field } from "type-graphql";
import { IDOperators } from "./operators";
import { InstantOperators } from "./operators";

@InputType()
class BaseEntityIDFilter {
  @Field(() => IDOperators)
  id: typeof IDOperators;
}

@InputType()
class BaseEntityCreatedAtFilter {
  @Field(() => InstantOperators)
  createdAt: typeof InstantOperators;
}

@InputType()
class BaseEntityUpdatedAtFilter {
  @Field(() => InstantOperators)
  updatedAt: typeof InstantOperators;
}

export const BaseEntityFilters = <const>[
  BaseEntityIDFilter,
  BaseEntityCreatedAtFilter,
  BaseEntityUpdatedAtFilter,
];
