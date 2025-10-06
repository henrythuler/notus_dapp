import { walletService } from "../../services/walletService.js";
import { transactionService } from "../../services/transactionService.js";

export const transactionResolvers = {
  Query: {
    getWalletHistory: async (_, { walletAddress, ...filters }) => {
      return await walletService.getWalletHistory(walletAddress, filters);
    },
  },

  Mutation: {
    updateTransactionMetadata: async (_, { transactionId, input }) => {
      return await transactionService.updateTransactionMetadata(transactionId, input);
    },
  },
};