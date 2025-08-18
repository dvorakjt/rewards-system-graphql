import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { PartnerResolver } from "./resolvers/partner-resolver";
import { RewardResolver } from "./resolvers/reward-resolver";
import { LocationResolver } from "./resolvers/location-resolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [PartnerResolver, RewardResolver, LocationResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`GraphQL server ready at ${url}`);
}

main().catch(console.error);
