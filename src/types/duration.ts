import { GraphQLScalarType, Kind } from "graphql";
import { Temporal } from "@js-temporal/polyfill";

export const DurationScalar = new GraphQLScalarType({
  name: "Duration",
  description: "Temporal.Duration custom scalar type",
  serialize(value: Temporal.Duration) {
    return value.toString();
  },
  parseValue(value: string) {
    return Temporal.Duration.from(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return Temporal.Duration.from(ast.value);
    }

    return null;
  },
});
