const { gql } = require('apollo-server');

const typeDefs = gql`
    # Your schema will go here
    type Launch {
        id: ID!     # field 이름: 반환할 타입
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }

    type Rocket {
        id: ID!
        name: String
        type: String
    }

    type User {
        id: ID!
        email: String!
        trips: [Launch]!
        token: String
    }

    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }

    enum PatchSize {
        SMALL
        LARGE
    }

    type Query {
        launches( # replace the current launches query with this one.
            pageSize: Int   # The number of results to show. Must be >= 1. Default = 20
            after: String   # If you add a cursor here, it will only return results _after_ this cursor
        ): LaunchConnection!
        launch(id: ID!): Launch
        me: User
    }

    """
    Simple wrapper around our list of launches that contains a cursor to the
    last item in the list. Pass this cursor to the launches query to fetch results
    after these.
    """
    type LaunchConnection {
        cursor: String!     # 다음에 어디서부터 가져 올 것인가
        hasMore: Boolean!   # 더 불러올 것이 있는가?
        launches: [Launch]!
    }

    type Mutation {
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchId: ID!): TripUpdateResponse!
        login(email: String): User
    }

    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }
`;

module.exports = typeDefs;