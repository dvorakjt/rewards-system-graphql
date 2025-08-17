import { ObjectType, InputType, Field, Float } from "type-graphql";

@ObjectType()
@InputType("InputCoordinates")
export class Coordinates {
  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;
}
