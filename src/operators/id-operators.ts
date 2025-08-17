import { createUnionType, ID } from "type-graphql";
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

export const IDComparisonOperators = createUnionType({
  name: "IDComparisonOperators",
  types: () =>
    createOperators<string, typeof implementedOperators>(
      implementedOperators,
      ID
    ),
});
