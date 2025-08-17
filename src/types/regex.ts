import { GraphQLScalarType, Kind } from "graphql";

export const RegExpScalar = new GraphQLScalarType({
  name: "RegExp",
  description: "RegExp custom scalar type",
  serialize(value: RegExp) {
    return value.toString();
  },
  parseValue(value: string) {
    return new RegExp(value);
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.STRING) {
      return new RegExp(ast);
    }

    return null;
  },
});
