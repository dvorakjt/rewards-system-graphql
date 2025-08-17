import { createUnionType } from "type-graphql";
import { createOperators } from "./create-operators";
import { OperatorSymbols } from "./operator-symbols";

const implementedOperators = <const>[
  OperatorSymbols.EqualTo,
  OperatorSymbols.NotEqualTo,
];

export const BooleanOperators = createUnionType({
  name: "BooleanOperators",
  types: () =>
    createOperators<boolean, typeof implementedOperators>(
      implementedOperators,
      Boolean
    ),
});
