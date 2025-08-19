import "reflect-metadata";
import { graphql, GraphQLSchema } from "graphql";
import { createSchema } from "../util";
import { faker } from "@faker-js/faker";
import { DistanceUnits } from "../types";
import { Partner } from "../entities";
import { Temporal } from "@js-temporal/polyfill";

describe("LocationResolver", () => {
  let schema: GraphQLSchema;

  beforeAll(async () => {
    schema = await createSchema();
  });

  it("finds a location by id and returns it when a location query is made.", async () => {
    const query = `
      query Location($locationId: ID!) {
        location(id: $locationId) {
          id
        }
      }`;
    /* 
      In practice, should create a location in the database, get its id back, 
      and check that.
    */
    const locationId = "1";

    const response = await graphql({
      schema,
      source: query,
      variableValues: {
        locationId,
      },
    });

    expect(response).toMatchObject({
      data: {
        location: {
          id: locationId,
        },
      },
    });

    expect(response.errors).toBeUndefined();
  });

  it("returns null when no location with the provided id is found.", async () => {
    const query = `
      query Location($locationId: ID!) {
        location(id: $locationId) {
          id
        }
      }`;

    /* 
      In practice, this id can be determined by finding the highest id in the 
      database and incrementing it.
    */
    const locationId = "999";

    const response = await graphql({
      schema,
      source: query,
      variableValues: {
        locationId,
      },
    });

    expect(response).toMatchObject({
      data: {
        location: null,
      },
    });

    expect(response.errors).toBeUndefined();
  });

  it("returns a list of locations matching the provided filters.", async () => {
    const query = `
      query Locations($from: InputCoordinates!, $searchRadius: Float, $units: DistanceUnits!) {
        locations(filter: {  
          distance:  {
            _lt: $searchRadius
          }
        }) {
          distance(from: $from, units: $units)
        }
      }
    `;

    const from = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };

    const searchRadius = 100;

    // create random points in the database that are near to and far from this location
    // const nearbyCoordinates = faker.location.nearbyGPSCoordinate({
    //   origin: [from.latitude, from.longitude],
    //   radius: 100,
    //   isMetric: false
    // })

    const variableValues = {
      from,
      searchRadius,
      units: DistanceUnits.Meters,
    };

    const response = await graphql({
      schema,
      source: query,
      variableValues,
    });

    expect(response.data).toBeTruthy();
    expect(response.errors).toBeUndefined();
    expect(response.data.locations).toBeInstanceOf(Array);
    const locations = response.data.locations as unknown[];
    expect(locations.length).toBeGreaterThan(0);

    for (const location of locations) {
      expect(isLocationWithDistance(location)).toBe(true);
      expect((location as { distance: number }).distance).toBeLessThan(
        searchRadius
      );
    }
  });

  it("calculates distance in various units.", async () => {
    // create an origin point
    // create points in the database, calculate the distances between these points
    // and the origin. For each distance unit, perform the same query and
    // expect to find the correct distances in the result (possibly sort the
    // result by distance for each checking)
    throw new Error("Not implemented.");
  });

  it("returns partner data.", async () => {
    const locationId = "1";

    // create a partner in the database and create a few locations that refer
    // to that partner, then verify the partner data that those rewards return
    const partner = {
      id: faker.lorem.slug(),
      name: faker.company.name(),
      logoUrl: faker.internet.url(),
      description: faker.lorem.paragraphs(),
      website: faker.internet.url(),
      why8by8: faker.lorem.paragraph(),
      createdAt: Temporal.Instant.from(new Date().toISOString()),
      updatedAt: Temporal.Instant.from(new Date().toISOString()),
    };

    const query = `
      query Location($locationId: ID!) {
        location(id: $locationId) {
          partner {
            id
            name
            logoUrl
            description
            website
            why8by8
            createdAt
            updatedAt
          }
        }
      }`;

    const response = await graphql({
      schema,
      source: query,
      variableValues: {
        locationId,
      },
    });

    expect(response).toMatchObject({
      data: {
        location: {
          partner,
        },
      },
    });

    expect(response.errors).toBeUndefined();
  });
});

function isLocationWithDistance(thing: unknown): thing is { distance: number } {
  return (
    typeof thing === "object" &&
    thing !== null &&
    "distance" in thing &&
    typeof thing.distance === "number"
  );
}
