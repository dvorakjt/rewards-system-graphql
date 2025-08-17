import { createUnionType, Field, InputType } from "type-graphql";
import { createOperators } from "./create-operators";
import { OperatorSymbols } from "./operator-symbols";
import { RegExpScalar } from "../scalars/regex.type";

export const StringComparisonOperators = createUnionType({
  name: "StringComparisonOperators",
  types: () => {
    const stringXStringOperators = <const>[
      OperatorSymbols.EqualTo,
      OperatorSymbols.NotEqualTo,
      OperatorSymbols.GreaterThan,
      OperatorSymbols.LessThan,
      OperatorSymbols.GreaterThanOrEqualTo,
      OperatorSymbols.LessThanOreEqualTo,
      OperatorSymbols.Contains,
      OperatorSymbols.IsContainedBy,
    ];

    const stringXArrayOperators = <const>[OperatorSymbols.IsContainedBy];

    const stringXRegExpOperators = <const>[OperatorSymbols.Like];

    return [
      ...createOperators<string, typeof stringXStringOperators>(
        stringXStringOperators,
        String,
        "StringXString"
      ),
      ...createOperators<string[], typeof stringXArrayOperators>(
        stringXArrayOperators,
        [String],
        "StringXArray"
      ),
      ...createOperators<RegExp, typeof stringXRegExpOperators>(
        stringXRegExpOperators,
        RegExp,
        "StringXRegExp"
      ),
    ] as const;
  },
});
