import { createUnionType, Int } from "type-graphql";
import { createOperators } from "./create-operators";
import { OperatorSymbols } from "./operator-symbols";

const implementedOperators = <const>[
  OperatorSymbols.EqualTo,
  OperatorSymbols.NotEqualTo,
  OperatorSymbols.GreaterThan,
  OperatorSymbols.LessThan,
  OperatorSymbols.GreaterThanOrEqualTo,
  OperatorSymbols.LessThanOreEqualTo,
];

export const IntComparisonOperators = createUnionType({
  name: "IntComparisonOperators",
  types: () =>
    createOperators<number, typeof implementedOperators>(
      implementedOperators,
      Int
    ),
});
