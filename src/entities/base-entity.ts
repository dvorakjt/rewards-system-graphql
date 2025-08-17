import { ObjectType, Field, ID } from "type-graphql";
import { InstantScalar } from "../types";
import { Temporal } from "@js-temporal/polyfill";

@ObjectType()
export abstract class BaseEntity {
  @Field(() => ID)
  id: string;

  @Field(() => InstantScalar)
  createdAt: Temporal.Instant;

  @Field(() => InstantScalar)
  updatedAt: Temporal.Instant;
}
