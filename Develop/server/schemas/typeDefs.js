const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: String
    tech2_votes: [String]!
  }

  type Query {
    getAllMatchups: [Matchup]
    getMatchup(id: ID!): Matchup
    getAllTech: [Tech]
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Matchup
  }

  type Mutation {
    createMatchup(tech1:String!, tech2:String!):Matchup
    createVote(techNum:String!, id:ID!):Matchup
  }
`;

module.exports = typeDefs;
