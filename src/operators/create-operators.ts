import { InputType, Field, ClassType } from "type-graphql";
import { capitalize } from "../util/capitalize";

type IOperator<T, K extends string> = {
  [Key in K]: T;
};

export function createOperators<T, TOperators extends readonly string[]>(
  operators: TOperators,
  compareTo: any, // don't love this any here...
  typeName: string = capitalize(compareTo.name)
): {
  [K in keyof TOperators]: K extends number | `${number}`
    ? ClassType<IOperator<T, TOperators[K]>>
    : never;
} {
  return operators.map((operator) => {
    @InputType(`${typeName}${operator}`)
    class Operator {
      @Field(() => compareTo, { nullable: true })
      [operator]: T;
    }
    return Operator;
  }) as {
    [K in keyof TOperators]: K extends number | `${number}`
      ? ClassType<IOperator<T, TOperators[K]>>
      : never;
  };
}
