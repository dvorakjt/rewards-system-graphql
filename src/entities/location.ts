import { ObjectType, Field, Float } from "type-graphql";
import { BaseEntity } from "./base-entity";
import { Coordinates } from "./coordinates";
import { Partner } from "./partner";

@ObjectType()
export class Location extends BaseEntity {
  @Field(() => Coordinates)
  coordinates: Coordinates;

  @Field(() => Float)
  distance: number;

  @Field(() => Partner)
  partner: Partner;
}
