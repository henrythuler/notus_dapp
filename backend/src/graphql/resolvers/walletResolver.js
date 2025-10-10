import { walletService } from "../../services/walletService.js";
import { GraphQLJSON } from "graphql-type-json";

export const walletResolvers = {
  JSON: GraphQLJSON,
  
  Mutation: {
    registerSmartWallet: async (_, { input }) => {
      return await walletService.registerSmartWallet(input);
    },
    createDepositTransaction: async (_, { walletAddress, input }) => {
      return await walletService.createDepositTransaction(walletAddress, input);
    },
    updateWalletMetadata: async (_, { walletAddress, input }) => {
      return await walletService.updateWalletMetadata(walletAddress, input);
    },
  },

  Query: {
    getSmartWallet: async (_, args) => {
      return await walletService.getSmartWallet(args);
    },
    getSmartWalletsByProject: async () => {
      return await walletService.getSmartWalletsByProject();
    },
  },
};