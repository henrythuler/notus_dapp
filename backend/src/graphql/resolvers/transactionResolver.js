import { walletService } from "../../services/walletService.js";

export const transactionResolvers = {
  Query: {
    getWalletHistory: async (_, { walletAddress, ...filters }) => {
      return await walletService.getWalletHistory(walletAddress, filters);
    },
  },
};