import { createUnionType } from "type-graphql";
import { createOperators } from "./create-operators";
import { OperatorSymbols } from "./operator-symbols";

export const StringArrayOperators = createUnionType({
  name: "StringArrayOperators",
  types: () => {
    const arrayXArrayOperators = <const>[
      OperatorSymbols.EqualTo,
      OperatorSymbols.NotEqualTo,
      OperatorSymbols.GreaterThan,
      OperatorSymbols.LessThan,
      OperatorSymbols.GreaterThanOrEqualTo,
      OperatorSymbols.LessThanOreEqualTo,
      OperatorSymbols.Contains,
      OperatorSymbols.IsContainedBy,
      OperatorSymbols.Overlaps,
    ];

    const arrayXStringOperators = <const>[OperatorSymbols.Contains];

    return [
      ...createOperators<string[], typeof arrayXArrayOperators>(
        arrayXArrayOperators,
        [String],
        "StringArrXStringArrOperators"
      ),
      ...createOperators<string, typeof arrayXStringOperators>(
        arrayXStringOperators,
        String,
        "StringArrXStringOperators"
      ),
    ] as const;
  },
});
