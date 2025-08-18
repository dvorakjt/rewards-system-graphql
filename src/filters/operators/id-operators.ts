import { InputType, Field, ID } from "type-graphql";
import { OperatorSymbols } from "./operator-symbols";

@InputType()
export class IDOperators {
  @Field(() => ID, { nullable: true })
  [OperatorSymbols.EqualTo]?: string;

  @Field(() => ID, { nullable: true })
  [OperatorSymbols.NotEqualTo]?: string;

  @Field(() => ID, { nullable: true })
  [OperatorSymbols.GreaterThan]?: string;

  @Field(() => ID, { nullable: true })
  [OperatorSymbols.LessThan]?: string;

  @Field(() => ID, { nullable: true })
  [OperatorSymbols.GreaterThanOrEqualTo]?: string;

  @Field(() => ID, { nullable: true })
  [OperatorSymbols.LessThanOreEqualTo]?: string;

  @Field(() => [ID], { nullable: true })
  [OperatorSymbols.IsContainedBy]?: string[];
}
