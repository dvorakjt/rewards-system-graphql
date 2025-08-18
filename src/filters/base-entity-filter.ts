import { InputType, Field } from "type-graphql";
import { IDOperators } from "./operators";
import { InstantOperators } from "./operators";

@InputType()
export abstract class BaseEntityFilter {
  @Field(() => IDOperators, { nullable: true })
  id?: IDOperators;

  @Field(() => InstantOperators, { nullable: true })
  createdAt?: InstantOperators;

  @Field(() => InstantOperators, { nullable: true })
  updatedAt?: InstantOperators;
}
