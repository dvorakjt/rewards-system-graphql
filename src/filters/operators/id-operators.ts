import { createUnionType, ID } from "type-graphql";
import { createOperators } from "./create-operators";
import { OperatorSymbols } from "./operator-symbols";

export const IDOperators = createUnionType({
  name: "IDOperators",
  types: () => {
    const idXIDOperators = <const>[
      OperatorSymbols.EqualTo,
      OperatorSymbols.NotEqualTo,
      OperatorSymbols.GreaterThan,
      OperatorSymbols.LessThan,
      OperatorSymbols.GreaterThanOrEqualTo,
      OperatorSymbols.LessThanOreEqualTo,
    ];

    const idXArrayOperators = <const>[OperatorSymbols.IsContainedBy];

    return [
      ...createOperators<string, typeof idXIDOperators>(
        idXIDOperators,
        ID,
        "IDXIDOperators"
      ),
      ...createOperators<string[], typeof idXArrayOperators>(
        idXArrayOperators,
        [ID],
        "IDXArrayOperators"
      ),
    ] as const;
  },
});
