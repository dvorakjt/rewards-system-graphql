import { GraphQLScalarType, Kind } from "graphql";
import { Temporal } from "@js-temporal/polyfill";

export const InstantScalar = new GraphQLScalarType({
  name: "Instant",
  description: "Temporal.Instant custom scalar type",
  serialize(value: Temporal.Instant) {
    return value.toString();
  },
  parseValue(value: string) {
    return Temporal.Instant.from(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return Temporal.Instant.from(ast.value);
    }

    return null;
  },
});
