import { createUnionType } from "type-graphql";
import { Temporal } from "@js-temporal/polyfill";
import { InstantScalar } from "../../types";
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

export const InstantOperators = createUnionType({
  name: "InstantOperators",
  types: () =>
    createOperators<Temporal.Instant, typeof implementedOperators>(
      implementedOperators,
      InstantScalar,
      "Instant"
    ),
});
