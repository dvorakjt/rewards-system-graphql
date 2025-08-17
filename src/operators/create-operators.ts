import { InputType, Field, ClassType } from "type-graphql";
import { capitalize } from "../util/capitalize";

type IOperator<T, K extends string> = {
  [Key in K]: T;
};

type Operators<T, V extends readonly string[]> = {
  [K in keyof V]: K extends number | `${number}`
    ? ClassType<IOperator<T, V[K]>>
    : never;
};

export function createOperators<T, TOperators extends readonly string[]>(
  operators: TOperators,
  compareTo: any, // don't love this any here...
  typeName: string = capitalize(compareTo.name)
): Operators<T, TOperators> {
  return operators.map((operator) => {
    @InputType(`${typeName}${operator}`)
    class Operator {
      @Field(() => compareTo, { nullable: true })
      [operator]: T;
    }
    return Operator;
  }) as Operators<T, TOperators>;
}
