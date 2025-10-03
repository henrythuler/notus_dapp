import { walletService } from "../../services/walletService.js";
import { GraphQLJSON } from "graphql-type-json";

export const walletResolvers = {
  JSON: GraphQLJSON,
  
  Mutation: {
    registerSmartWallet: async (_, { input }) => {
      return await walletService.registerSmartWallet(input);
    },
  },
};