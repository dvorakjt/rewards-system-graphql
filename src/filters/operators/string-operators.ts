import { createUnionType } from "type-graphql";
import { createOperators } from "./create-operators";
import { OperatorSymbols } from "./operator-symbols";
import { RegExpScalar } from "../../types/regex";

export const StringOperators = createUnionType({
  name: "StringOperators",
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
        RegExpScalar,
        "StringXRegExp"
      ),
    ] as const;
  },
});
