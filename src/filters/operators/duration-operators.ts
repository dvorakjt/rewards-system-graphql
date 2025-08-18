import { InputType, Field } from "type-graphql";
import { Temporal } from "@js-temporal/polyfill";
import { DurationScalar } from "../../types";
import { OperatorSymbols } from "./operator-symbols";

@InputType()
export class DurationOperators {
  @Field(() => DurationScalar, { nullable: true })
  [OperatorSymbols.EqualTo]?: Temporal.Duration;

  @Field(() => DurationScalar, { nullable: true })
  [OperatorSymbols.NotEqualTo]?: Temporal.Duration;

  @Field(() => DurationScalar, { nullable: true })
  [OperatorSymbols.GreaterThan]?: Temporal.Duration;

  @Field(() => DurationScalar, { nullable: true })
  [OperatorSymbols.LessThan]?: Temporal.Duration;

  @Field(() => DurationScalar, { nullable: true })
  [OperatorSymbols.GreaterThanOrEqualTo]?: Temporal.Duration;

  @Field(() => DurationScalar, { nullable: true })
  [OperatorSymbols.LessThanOreEqualTo]?: Temporal.Duration;
}
