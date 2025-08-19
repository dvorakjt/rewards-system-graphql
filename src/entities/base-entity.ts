import { ObjectType, Field, ID } from "type-graphql";
import { InstantScalar } from "../types";
import { Temporal } from "@js-temporal/polyfill";

@ObjectType()
export abstract class BaseEntity {
  @Field(() => ID)
  id: string;

  @Field((_type) => InstantScalar)
  createdAt: Temporal.Instant;

  @Field((_type) => InstantScalar)
  updatedAt: Temporal.Instant;
}
