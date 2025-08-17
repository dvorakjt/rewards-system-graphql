import { createUnionType, ID } from "type-graphql";
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

export const IDOperators = createUnionType({
  name: "IDOperators",
  types: () =>
    createOperators<string, typeof implementedOperators>(
      implementedOperators,
      ID
    ),
});
