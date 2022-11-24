const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getMatchup: async (parent, args, context) => {
        return 
      },
    getAllMatchups: async (parent, args, context) => {
        return 
      },
    getAllTech: async (parent, args, context) => {
        return 
      }
  },

  Mutation: {
    createVote: async (parent, args, context) => {
      
      return vote
    },
    createMatchup: async (parent, args, context) => {

      return matchup
    }
  }  
};

module.exports = resolvers;
