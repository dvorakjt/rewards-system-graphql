import { InputType, Field } from "type-graphql";
import { OperatorSymbols } from "./operator-symbols";
import { RedemptionForum } from "../../types";

@InputType()
export class RedemptionForumArrayOperators {
  @Field(() => [RedemptionForum], { nullable: true })
  [OperatorSymbols.EqualTo]?: RedemptionForum[];

  @Field(() => [RedemptionForum], { nullable: true })
  [OperatorSymbols.NotEqualTo]?: RedemptionForum[];

  @Field(() => RedemptionForum, { nullable: true })
  [OperatorSymbols.Contains]?: RedemptionForum;

  @Field(() => [RedemptionForum], { nullable: true })
  [OperatorSymbols.ContainsArr]?: RedemptionForum[];

  @Field(() => [RedemptionForum], { nullable: true })
  [OperatorSymbols.IsContainedBy]?: RedemptionForum[];

  @Field(() => [RedemptionForum], { nullable: true })
  [OperatorSymbols.Overlaps]?: RedemptionForum[];
}
