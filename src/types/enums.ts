import { registerEnumType } from "type-graphql";

enum DistanceUnits {
  Meters = "Meters",
  Kilometers = "Kilometers",
  Miles = "Miles",
}

enum RedemptionForum {
  Online = "Online",
  InStore = "InStore",
}

registerEnumType(DistanceUnits, {
  name: "DistanceUnits",
});

registerEnumType(RedemptionForum, {
  name: "RedemptionForum",
});

export { DistanceUnits, RedemptionForum };
