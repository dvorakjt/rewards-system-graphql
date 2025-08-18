import {
  Resolver,
  Query,
  FieldResolver,
  Root,
  Arg,
  ArgsType,
  Args,
  Field,
  Int,
  ID,
} from "type-graphql";
import { Location } from "../entities";
import { LocationFilter } from "../filters";
import { Coordinates } from "../entities";
import { DistanceUnits } from "../types";

@ArgsType()
export class LocationsArgs {
  @Field(() => Int, { nullable: true })
  first?: number;

  @Field(() => String, { nullable: true })
  after?: string;

  @Field(() => LocationFilter, { nullable: true })
  filter?: typeof LocationFilter;
}

@ArgsType()
class DistanceArgs {
  @Field(() => Coordinates)
  from: Coordinates;

  @Field(() => DistanceUnits)
  units: DistanceUnits;
}

@Resolver(() => Location)
export class LocationResolver {
  @Query(() => Location, { nullable: true })
  async Location(@Arg("id", () => ID) id: string): Promise<Location | null> {
    throw new Error("Not implemented.");
  }

  @Query(() => [Location])
  async Locations(
    @Args(() => LocationsArgs) { first, after, filter }: LocationsArgs
  ): Promise<Location[]> {
    throw new Error("Not implemented.");
  }

  @FieldResolver()
  async distance(
    @Root() location: Location,
    @Args(() => DistanceArgs) { from, units }: DistanceArgs
  ): Promise<number> {
    throw new Error("Not implemented.");
  }
}
