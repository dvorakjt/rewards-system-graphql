import { InputType, Field } from "type-graphql";
import { OperatorSymbols } from "./operator-symbols";

@InputType()
export class BooleanOperators {
  @Field(() => Boolean, { nullable: true })
  [OperatorSymbols.EqualTo]?: boolean;

  @Field(() => Boolean, { nullable: true })
  [OperatorSymbols.NotEqualTo]?: boolean;
}
