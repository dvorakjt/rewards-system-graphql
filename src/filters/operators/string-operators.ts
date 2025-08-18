import { InputType, Field } from "type-graphql";
import { OperatorSymbols } from "./operator-symbols";
import { RegExpScalar } from "../../types";

@InputType()
export class StringOperators {
  @Field(() => String, { nullable: true })
  [OperatorSymbols.EqualTo]?: string;

  @Field(() => String, { nullable: true })
  [OperatorSymbols.NotEqualTo]?: string;

  @Field(() => String, { nullable: true })
  [OperatorSymbols.GreaterThan]?: string;

  @Field(() => String, { nullable: true })
  [OperatorSymbols.LessThan]?: string;

  @Field(() => String, { nullable: true })
  [OperatorSymbols.GreaterThanOrEqualTo]?: string;

  @Field(() => String, { nullable: true })
  [OperatorSymbols.LessThanOreEqualTo]?: string;

  @Field(() => String, { nullable: true })
  [OperatorSymbols.Contains]?: string;

  @Field(() => String, { nullable: true })
  [OperatorSymbols.IsSubstringOf]?: string;

  @Field(() => [String], { nullable: true })
  [OperatorSymbols.IsContainedBy]?: string[];

  @Field(() => RegExpScalar, { nullable: true })
  [OperatorSymbols.Like]?: RegExp;
}
