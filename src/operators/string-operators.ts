import { createUnionType, Field, InputType } from "type-graphql";
import { createOperators } from "./create-operators";
import { Operators } from "./operators";
import { RegExpScalar } from "../scalars/regex.type";

export const StringComparisonOperators = createUnionType({
  name: "StringComparisonOperators",
  types: () => {
    const stringXStringOperators = <const>[
      Operators.EqualTo,
      Operators.NotEqualTo,
      Operators.GreaterThan,
      Operators.LessThan,
      Operators.GreaterThanOrEqualTo,
      Operators.LessThanOreEqualTo,
      Operators.Contains,
      Operators.IsContainedBy,
    ];

    const stringXArrayOperators = <const>[Operators.IsContainedBy];

    const stringXRegExpOperators = <const>[Operators.Like];

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
