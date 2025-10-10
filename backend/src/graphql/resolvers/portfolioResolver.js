import { walletService } from "../../services/walletService.js";

export const portfolioResolvers = {
  Query: {
    getWalletPortfolio: async (_, { walletAddress }) => {
      return await walletService.getWalletPortfolio(walletAddress);
    },
  },
};