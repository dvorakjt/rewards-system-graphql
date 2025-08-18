import { InputType, Field, Int } from "type-graphql";
import { OperatorSymbols } from "./operator-symbols";

@InputType()
export class IntOperators {
  @Field(() => Int, { nullable: true })
  [OperatorSymbols.EqualTo]?: number;

  @Field(() => Int, { nullable: true })
  [OperatorSymbols.NotEqualTo]?: number;

  @Field(() => Int, { nullable: true })
  [OperatorSymbols.GreaterThan]?: number;

  @Field(() => Int, { nullable: true })
  [OperatorSymbols.LessThan]?: number;

  @Field(() => Int, { nullable: true })
  [OperatorSymbols.GreaterThanOrEqualTo]?: number;

  @Field(() => Int, { nullable: true })
  [OperatorSymbols.LessThanOreEqualTo]?: number;
}
