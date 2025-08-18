import { createUnionType } from "type-graphql";
import { createOperators } from "./create-operators";
import { OperatorSymbols } from "./operator-symbols";
import { RedemptionForum } from "../../types";

export const RedemptionForumArrayOperators = createUnionType({
  name: "RedemptionForumOperators",
  types: () => {
    const arrayXArrayOperators = <const>[
      OperatorSymbols.EqualTo,
      OperatorSymbols.NotEqualTo,
      OperatorSymbols.Contains,
      OperatorSymbols.IsContainedBy,
      OperatorSymbols.Overlaps,
    ];

    const arrayXRFOperators = <const>[OperatorSymbols.Contains];

    return [
      ...createOperators<string[], typeof arrayXArrayOperators>(
        arrayXArrayOperators,
        [RedemptionForum],
        "RFArrXRFArrOperators"
      ),
      ...createOperators<string, typeof arrayXRFOperators>(
        arrayXRFOperators,
        RedemptionForum,
        "RFArrXRFOperators"
      ),
    ] as const;
  },
});
