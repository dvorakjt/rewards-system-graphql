import { createUnionType } from "type-graphql";
import { Temporal } from "@js-temporal/polyfill";
import { DurationScalar } from "../../types";
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

export const DurationOperators = createUnionType({
  name: "DurationOperators",
  types: () =>
    createOperators<Temporal.Duration, typeof implementedOperators>(
      implementedOperators,
      DurationScalar,
      "Duration"
    ),
});
