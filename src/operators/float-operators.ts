import { createUnionType, Float } from "type-graphql";
import { createOperators } from "./create-operators";
import { Operators } from "./operators";

const implementedOperators = <const>[
  Operators.EqualTo,
  Operators.NotEqualTo,
  Operators.GreaterThan,
  Operators.LessThan,
  Operators.GreaterThanOrEqualTo,
  Operators.LessThanOreEqualTo,
];

export const FloatComparisonOperators = createUnionType({
  name: "FloatComparisonOperators",
  types: () =>
    createOperators<number, typeof implementedOperators>(
      implementedOperators,
      Float
    ),
});
