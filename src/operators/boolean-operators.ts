import { createUnionType, InputType, Field } from "type-graphql";
import { createOperators } from "./create-operators";
import { Operators } from "./operators";

const implementedOperators = <const>[Operators.EqualTo, Operators.NotEqualTo];

export const BooleanComparisonOperators = createUnionType({
  name: "BooleanComparisonOperators",
  types: () =>
    createOperators<boolean, typeof implementedOperators>(
      implementedOperators,
      Boolean
    ),
});
