import { buildSchema } from "type-graphql";
import { LocationResolver } from "../resolvers/location-resolver";
import { PartnerResolver } from "../resolvers/partner-resolver";
import { RewardResolver } from "../resolvers/reward-resolver";
import type { GraphQLSchema } from "graphql";

let schema: GraphQLSchema;

export async function createSchema() {
  return (schema ??= await buildSchema({
    resolvers: [PartnerResolver, RewardResolver, LocationResolver],
  }));
}
