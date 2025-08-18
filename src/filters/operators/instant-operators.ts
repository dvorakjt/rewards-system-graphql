import { InputType, Field } from "type-graphql";
import { Temporal } from "@js-temporal/polyfill";
import { InstantScalar } from "../../types";
import { OperatorSymbols } from "./operator-symbols";

@InputType()
export class InstantOperators {
  @Field(() => InstantScalar, { nullable: true })
  [OperatorSymbols.EqualTo]?: Temporal.Instant;

  @Field(() => InstantScalar, { nullable: true })
  [OperatorSymbols.NotEqualTo]?: Temporal.Instant;

  @Field(() => InstantScalar, { nullable: true })
  [OperatorSymbols.GreaterThan]?: Temporal.Instant;

  @Field(() => InstantScalar, { nullable: true })
  [OperatorSymbols.LessThan]?: Temporal.Instant;

  @Field(() => InstantScalar, { nullable: true })
  [OperatorSymbols.GreaterThanOrEqualTo]?: Temporal.Instant;

  @Field(() => InstantScalar, { nullable: true })
  [OperatorSymbols.LessThanOreEqualTo]?: Temporal.Instant;
}
