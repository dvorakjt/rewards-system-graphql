import { registerEnumType } from "type-graphql";

enum DistanceUnits {
  Meters = "meters",
  Kilometers = "kilometers",
  Miles = "miles",
}

enum RedemptionForum {
  Online = "online",
  InStore = "in-store",
}

registerEnumType(DistanceUnits, {
  name: "DistanceUnits",
});

registerEnumType(RedemptionForum, {
  name: "RedemptionForum",
});

export { DistanceUnits, RedemptionForum };
