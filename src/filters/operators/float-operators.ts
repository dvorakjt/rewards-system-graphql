import { InputType, Field, Float } from "type-graphql";
import { OperatorSymbols } from "./operator-symbols";

@InputType()
export class FloatOperators {
  @Field(() => Float, { nullable: true })
  [OperatorSymbols.EqualTo]?: number;

  @Field(() => Float, { nullable: true })
  [OperatorSymbols.NotEqualTo]?: number;

  @Field(() => Float, { nullable: true })
  [OperatorSymbols.GreaterThan]?: number;

  @Field(() => Float, { nullable: true })
  [OperatorSymbols.LessThan]?: number;

  @Field(() => Float, { nullable: true })
  [OperatorSymbols.GreaterThanOrEqualTo]?: number;

  @Field(() => Float, { nullable: true })
  [OperatorSymbols.LessThanOreEqualTo]?: number;
}
